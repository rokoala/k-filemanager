var dirTree = require('directory-tree'),
  fsManager = require('./server/components/fsmanager.js'),
  filesDirectory = require('./server/components/filesDirectory.js'),
  fs = require('fs'),
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  multer = require('multer'),
  session = require('express-session'),
  app = express();

const PORT = process.env.PORT || 3000;
const UPLOAD_PATH = process.env.UPLOAD_PATH;

if (!UPLOAD_PATH) {
  console.error("Please insert the enviroment variable UPLOAD_PATH");
  return;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index', {
    uploadPath: UPLOAD_PATH
  });
});

app.get('/fsread', function(req, res) {
  res.charset = 'utf-8';
  res.json(fsManager.read(UPLOAD_PATH));
});

app.get('/fsfiles', function(req, res) {
  res.charset = 'utf-8';
  var files = [];
  filesDirectory(UPLOAD_PATH, null, files);
  res.json(files);
});

app.post('/remove', function(req, res) {
  fsManager.remove(req.body.path, function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
});

app.post('/mkdir', function(req, res) {
  fsManager.mkdir(req.body.path, function(path, err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200);
      res.json(path);
    }
  })
});

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    fs.access(req.body.path + "/" + file.originalname, fs.F_OK, function(err) {
      if (!err) {
        cb(new Error("File already exists"))
      } else {
        cb(null, req.body.path);
      }
    });
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({
  storage: storage
}).any();

app.post('/upload', function(req, res) {
  upload(req, res, function(err, test) {
    if (err) {
      console.log(err);
      // An error occurred when uploading
      res.status(500);
      res.json(err);
      return;
    }
    res.status(200);
    res.json(fsManager.read(req.files[0].path));
  });
});

app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use('/uploads', express.static(UPLOAD_PATH));

app.listen(PORT, function() {
  console.log('Application is running on port: %s', PORT);
});

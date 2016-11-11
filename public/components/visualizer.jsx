import React from 'react';
import VisualizerElement from './visualizerElement.jsx';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class Visualizer extends React.Component {
  constructor() {
    super();
    this.state = {
      showDirectoryInput: false,
      dirName: "",
      currentPath: "",
      currentDir: "/",
      files: []
    }
  }
  componentWillMount() {
    this.setState({files: this.props.branchFiles});
  }
  componentWillReceiveProps(nextProps) {
    this.setState({files: nextProps.branchFiles});
  }
  handleElementRemove(name, path) {
    var self = this;
    if (confirm('Deseja realmente remover ' + name + '?')) {
      $.ajax({
        type: 'POST',
        url: '/remove',
        data: {
          path: path
        }
      }).done(() => {

        var objIndex = -1;

        self.state.files.forEach((obj, index) => {
          if (obj.name === name) {
            objIndex = index;
          }
        });

        if (objIndex >= 0) {
          self.setState((previousState) => {
            previousState.files.splice(objIndex, 1);
            self.props.onRemoveFile(name, path);
          });
        }
      });
    }
  }
  createDirectory() {
    var self = this;
    name = this.state.dirName;
    $.ajax({
      type: 'POST',
      url: '/mkdir',
      data: {
        path: this.props.currentPath + "/" + name
      }
    }).done((result) => {
      self.setState((previousState) => {
        previousState.dirName = "";
        previousState.showDirectoryInput = false;
        previousState.files.push(result);
        self.props.onAddFile()
      })
    });
  }
  onAddFile(files) {
    this.setState({sendFiles: files});
  }
  sendFiles() {
    var self = this;

    var req = request.post('/upload');
    this.state.sendFiles.forEach((file) => {
      req.field('path', this.props.currentPath)
      req.attach(file.name, file);
    });
    req.end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        self.setState((previousState) => {
          previousState.sendFiles = null;
          previousState.files.push(res.body);
          self.props.onAddFile()
        })
      }
    });
  }
  handleDirInputChange(event) {
    this.setState({dirName: event.target.value});
  }
  toogleDirectoryInput() {
    this.setState((previousState) => {
      previousState.showDirectoryInput = previousState.showDirectoryInput
        ? false
        : true;
    });
  }
  componentWillReceiveProps(nextProps) {
    var cDir = nextProps.currentPath.split(kFManager.uploadPath)[1];
    cDir = (cDir === "")
      ? "/"
      : cDir;

    this.setState({currentPath: nextProps.currentPath, currentDir: cDir, files: nextProps.branchFiles});
  }
  backHome() {
    this.props.onBackHome();
  }
  onDoubleClickElement(props) {
    this.props.onDoubleClickDirectory(props);
  }
  render() {

    var elements = this.state.files.map((file) => {
      if (!!file.children)
        return (<VisualizerElement key={file.name} name={file.name} path={file.path} onRemoveElement={this.handleElementRemove.bind(this)} onDoubleClickElement={this.onDoubleClickElement.bind(this)} type="directory"/>);
      else
        return (<VisualizerElement key={file.name} name={file.name} path={file.path} onRemoveElement={this.handleElementRemove.bind(this)} type="file"/>);
      }
    )

    var dropZoneStyle = {
      margin: '5px',
      display: 'inline-block',
      float: 'right'
    };

    var toolbarStyle = {
      zIndex: 10,
      boxShadow: '0px 0px 7px rgba(0,0,0,0.04)',
      height: '100px',
      right: '0',
      bottom: '10px',
      position: 'fixed',
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.09)',
      borderRadius: '5px'
    }

    var fileUploadStyle = {
      color: 'rgb(61, 172, 208)',
      float: 'right',
      display: 'inline-block',
      padding: '20px'
    }

    var folderCreateStyle = {
      display: 'inline-block',
      float: 'right',
      color: 'rgb(61, 172, 208)',
      padding: '15px',
      margin: '5px'
    }

    var plusIconStyle = {
      color: 'lightslategray'
    }

    var uploadNameFilesStyle = {
      backgroundColor: 'white',
      float: 'right',
      maxWidth: '50%',
      marginTop: '30px'
    }

    var inputDirNameStyle = {
      backgroundColor: 'white',
      display: 'inline-block',
      float: 'right',
      marginTop: '35px'
    }

    var BtnSendStyle = {
      margin: '5px'
    }

    var nameFiles = (this.state.sendFiles)
      ? this.state.sendFiles.map((file) => {
        return file.name;
      })
      : null;

    var navigatorDisplay = {
      height: '30px',
      width: '100%',
      backgroundColor: '#ECECEC',
      boxShadow: '0px 0 3px gray'
    }

    var navigatorTextDisplay = {
      textAlign: 'center',
      lineHeight: '1.5',
      fontSize: '17px'
    }

    var wrapperVisualizer = {
      overflow: 'auto',
      marginBottom: '90px'
    }

    var render = (
      <div style={wrapperVisualizer}>
        <div style={navigatorDisplay}>
          <div style={navigatorTextDisplay}>
            {this.state.currentDir}
          </div>
        </div>
        <div style={toolbarStyle}>
          {this.state.showDirectoryInput
            ? <div style={inputDirNameStyle}>
                <input type="text" value={this.state.dirName} placeholder="nome do diretório..." onChange={this.handleDirInputChange.bind(this)}/>
                <button onClick={this.createDirectory.bind(this)}>Ok</button>
              </div>
            : null}
          <div onClick={this.toogleDirectoryInput.bind(this)} className="item-clickable item-toolbar" title="Criar diretório" style={folderCreateStyle}>
            <i className="fa fa-folder fa-3x item-clickable"></i>
            <i className="fa fa-plus fa-1x item-clickable" style={plusIconStyle}></i>
          </div>
          <div style={uploadNameFilesStyle}>
            {(this.state.sendFiles)
              ? <div>
                  {nameFiles}
                  <button style={BtnSendStyle} onClick={this.sendFiles.bind(this)}>Enviar arquivo</button>
                </div>
              : null
}
          </div>
          <Dropzone style={dropZoneStyle} onDrop={this.onAddFile.bind(this)} title="Upload arquivo">
            <i className="fa fa-upload fa-3x item-clickable item-toolbar" style={fileUploadStyle}></i>
          </Dropzone>
          <div onClick={this.backHome.bind(this)} className="item-clickable item-toolbar" title="Buscar arquivo" style={folderCreateStyle}>
            <i className="fa fa-search fa-3x item-clickable"></i>
          </div>

        </div>
        <div>
          {elements}
        </div>
      </div>
    );

    return render;
  }
}

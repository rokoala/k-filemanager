import React from 'react';

export default class VizualizerElement extends React.Component {
  constructor() {
    super();
    this.state = {
      showRemoveIcon: false
    }
  }
  openFile(path) {
    var _path = "uploads/" + path.split(kFManager.uploadPath)[1];
    window.open(_path, '_blank');
  }
  removeFile(name, path) {
    this.props.onRemoveElement(name, path);
  }
  doubleClickDirectory(props) {
    this.props.onDoubleClickElement(props)
  }
  showRemoveIcon() {
    this.setState({showRemoveIcon: true});
  }
  hideRemoveIcon() {
    this.setState({showRemoveIcon: false});
  }
  render() {
    var directoryStyle = {
      padding: '10px',
      color: '#3DACD0'
    };

    var fileStyle = {
      padding: '10px',
      color: 'gray'
    };

    var elementStyle = {
      float: 'left',
      padding: '30px 0',
      textAlign: 'center',
      width: '175px',
      position: 'relative'
    };

    var iconTrash = {
      position: 'absolute',
      top: '30px',
      right: '30px',
      cursor: 'pointer'
    };

    var nameStyle = {
      cursor: 'default',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      padding: '5px',
      whiteSpace: 'nowrap'
    };

    if (this.props.type === 'file') {
      return (
        <div style={elementStyle} onMouseOver={this.showRemoveIcon.bind(this)} onMouseLeave={this.hideRemoveIcon.bind(this)}>
          {(() => {
            var chunkNames = this.props.name.split(".");
            var ext = chunkNames[chunkNames.length - 1];
            switch (ext) {
              case "pdf":
                fileStyle.color = "#D20000";
                return <i style={fileStyle} className='fa fa-file-pdf-o fa-4x' title={this.props.name} onDoubleClick={this.openFile.bind(this, this.props.path)}></i>;
              case "svg":
                fileStyle.color = "green";
                return <i style={fileStyle} className='fa fa-file-image-o fa-4x' title={this.props.name} onDoubleClick={this.openFile.bind(this, this.props.path)}></i>;
              case "rar":
                fileStyle.color = "#D08938";
                return <i style={fileStyle} className='fa fa-file-zip-o fa-4x' title={this.props.name} onDoubleClick={this.openFile.bind(this, this.props.path)}></i>;
              default:
                return <i style={fileStyle} className='fa fa-file-text-o fa-4x' title={this.props.name} onDoubleClick={this.openFile.bind(this, this.props.path)}></i>;
            }
          })()}
          <div style={nameStyle}>{this.props.name}</div>
          {(this.state.showRemoveIcon)
            ? <i className="fa fa-trash" style={iconTrash} onClick={this.removeFile.bind(this, this.props.name, this.props.path)}></i>
            : null
}
        </div>
      );
    } else {
      return (
        <div style={elementStyle} onDoubleClick={this.doubleClickDirectory.bind(this, this.props)} onMouseOver={this.showRemoveIcon.bind(this)} onMouseLeave={this.hideRemoveIcon.bind(this)}>
          <i style={directoryStyle} title={this.props.name} className='fa fa-folder fa-4x'></i>
          <div style={nameStyle}>{this.props.name}</div>
          {(this.state.showRemoveIcon)
            ? <i className="fa fa-trash" style={iconTrash} onClick={this.removeFile.bind(this, this.props.name, this.props.path)}></i>
            : null
}
        </div>
      );
    }
  }
}

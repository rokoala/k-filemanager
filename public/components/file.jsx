import React from 'react';

export default class KFile extends React.Component {
  constructor() {
    super();
  }
  render() {

    var fileStyle = {
      display:'inline',
      padding: '4px 8px',
      color: 'gray'
    };

    var href = "uploads/" + this.props.path.split(kFManager.uploadPath)[1];

    return (
      <li style={{margin: '5px'}}>
        {(() => {
          var chunkNames = this.props.name.split(".");
          var ext = chunkNames[chunkNames.length - 1];

          switch (ext) {
            case "pdf": fileStyle.color="#D20000"; return <i className="fa fa-file-pdf-o" style={fileStyle}></i>;
            case "svg": fileStyle.color="green"; return <i className="fa fa-file-image-o" style={fileStyle}></i>;
            case "rar": fileStyle.color="#D08938"; return <i className="fa fa-file-zip-o" style={fileStyle}></i>;
            default: return <i className="fa fa-file-text-o" style={fileStyle}></i>;
          }
        })()}
        <a href={href} className="clickable" style={{color:'black',textDecoration: 'none'}} target="_blank">{this.props.name}</a>
      </li>
    )
  }
}

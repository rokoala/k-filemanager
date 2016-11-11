import React from 'react';
import kFileManager from './kFileManager.jsx';

export default class SearchBar extends React.Component{
  constructor(){
    super();
    this.state={
      files:[],
      filterValue:""
    }
  }
  handleChange(){
    this.setState({filterValue:this.refs.filterTextInput.value});
  }
  componentDidMount(){
    $.get('/fsfiles').then((result) => {
      this.setState({files: result});
    })
  }
  openFile(path){
    var _path = "uploads/" + path.split(kFManager.uploadPath)[1];
    window.open(_path, '_blank');
  }
  render(){

    var itemStyle = {
      cursor:'pointer'
    };

    var rows = this.state.files.map((file)=>{
      if (this.state.filterValue !=="" && file.name.toUpperCase().indexOf(this.state.filterValue.toUpperCase()) !== -1) {

        var fileStyle={
          color:'gray'
        };
        var chunkNames = file.name.split(".");
        var ext = chunkNames[chunkNames.length - 1];

        switch (ext) {
          case "pdf":
            fileStyle.color = "#D20000";
            return <li onClick={this.openFile.bind(this,file.path)} style={itemStyle} key={file.path}><i style={fileStyle} className='fa fa-file-pdf-o fa-1x'></i> {file.name}</li>;
          case "svg":
            fileStyle.color="green";
            return <li onClick={this.openFile.bind(this,file.path)} style={itemStyle} key={file.path}><i style={fileStyle} className='fa fa-file-image-o fa-1x'></i> {file.name}</li>;
          case "rar":
            fileStyle.color="#D08938";
            return <li onClick={this.openFile.bind(this,file.path)} style={itemStyle} key={file.path}><i style={fileStyle} className='fa fa-file-zip-o fa-1x' ></i> {file.name}</li>;
          default:
            return <li onClick={this.openFile.bind(this,file.path)} style={itemStyle} key={file.path}><i style={fileStyle} className='fa fa-file-text-o fa-1x'></i> {file.name}</li>;
          }
      }
    }).filter((e) =>!!e)

    var listBoxStyle = {
      maxHeight:'500px',
      overflowY:'auto',
      border: '1px solid rgba(0,0,0,0.09)'
    };

    var wrapperSeacher = {
      position: 'absolute',
      top: '40vh',
      left: '38%'
    };

    var wrapperInputSearch = {
      textAlign:'center'
    };

    return(
      <div style={wrapperSeacher}>
        <div style={wrapperInputSearch} className="inputSearchBar">
          <input style={{width:'100%', padding:'8px'}} type="text" placeholder="Pesquisar..." ref="filterTextInput" onChange={this.handleChange.bind(this)}></input>
        </div>
        <div className="listSearchBar" style={listBoxStyle}>
          {(this.state.filterValue!=="") ?
          (rows.length > 0) ? <ul>{rows}</ul> : <ul>Nenhum arquivo encontrado...</ul> :
          null
          }
        </div>
      </div>
    )
  }
}

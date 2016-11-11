import React from 'react';
import Directory from './directory.jsx';
import KFile from './file.jsx';
import KFileManagerService from './kFileManagerService.jsx';
import kFileManager from './kFileManager.jsx';

export default class FsTree extends React.Component {
  constructor() {
    super();
  }
  handleOnClickBranch(files,path,ref){
    this.props.onClickBranch(files,path,ref);
  }
  render() {
    if(this.props.files.length > 0){
      return (
        <ul>
          <Directory name={'/'} key={'root'} files={this.props.files} onClickBranch={this.handleOnClickBranch.bind(this)} path={kFManager.uploadPath}/>
        </ul>
      );
    }else
      return(<ul></ul>);
  }
}

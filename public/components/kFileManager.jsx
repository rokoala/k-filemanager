import React from 'react';
import FsTree from './fsTree.jsx';
import SearchBar from './searchBar.jsx';
import Visualizer from './visualizer.jsx';
import KFileManagerService from './kFileManagerService.jsx';

export default class KFileManager extends React.Component {

  constructor() {
    super();
    this.state = {
      currentBranchFiles: [],
      currentTreeReference: null,
      currentPath: "",
      showVisualize: false,
      files: []
    }
  }
  componentDidMount() {
    $.get('/fsread').then((result) => {
      this.setState({files: result.children});
    })
  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  }
  handleClickBranch(branchFiles, path, reference) {
    this.setState({currentBranchFiles: branchFiles, currentTreeReference: reference, currentPath: path, showVisualize: true})
  }
  handleRemoveFile(name, path) {
    this.state.currentTreeReference.forceUpdate();
  }
  handleAddFile() {
    this.state.currentTreeReference.forceUpdate();
  }
  handleVisualizeClickDirectory(props) {

    var newCurrentBranch = "";

    this.setState((previousState) => {
      for (var i = 0; i < previousState.currentBranchFiles.length; i++) {
        if (previousState.currentBranchFiles[i].path === props.path) {
          newCurrentBranch = previousState.currentBranchFiles[i].children;
          break;
        }
      }
      // changes the currentBranchFiles to newCurrentBranch;
      // set the current path
      // TODO: check why dos not need to set currentTreeReference;
      previousState.currentBranchFiles = newCurrentBranch;
      previousState.currentPath = props.path;
    })
  }
  backHome() {
    this.setState({showVisualize: false});
  }
  render() {

    var visualizerWrapperCss = {
      minHeight: '500px'
    }

    var sideBarWrapperCss = {
      height: '100%',
      zIndex: 5,
      width: '23%',
      minWidth: '200px',
      float: 'left',
      borderRight: '1px solid rgba(0,0,0,0.06)',
      backgroundColor: '#F7F7F7',
      overflowX: 'auto'
    };

    return (
      <div className="full-wh">
        <div style={sideBarWrapperCss}>
          <FsTree onClickBranch={this.handleClickBranch.bind(this)} files={this.state.files}/>
        </div>
        <div style={visualizerWrapperCss}>
          {(this.state.showVisualize)
            ? <div>
                <Visualizer branchFiles={this.state.currentBranchFiles} currentPath={this.state.currentPath} onRemoveFile={this.handleRemoveFile.bind(this)} onAddFile={this.handleAddFile.bind(this)} onBackHome={this.backHome.bind(this)} onDoubleClickDirectory={this.handleVisualizeClickDirectory.bind(this)}/>
              </div>
            : <div>
              <div className="main-logo">
                <div>k-filemanager</div>
              </div>
              <SearchBar></SearchBar>
            </div>
}
        </div>
      </div>
    )
  }

}

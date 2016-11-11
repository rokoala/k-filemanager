import React from 'react';
import KFile from './file.jsx';

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      renderChild: false,
      iconFolderClass: 'fa fa-folder k-folder-icon',
      iconArrowClass: 'fa fa-caret-right'
    }
  }
  toogleDirectory() {
    this.setState((previousState, currentProps) => {
      if (previousState.renderChild) {
        previousState.renderChild = false;
        previousState.iconArrowClass = 'fa fa-caret-right';
        previousState.iconFolderClass = 'fa fa-folder k-folder-icon';
      } else {
        previousState.renderChild = true;
        previousState.iconArrowClass = 'fa fa-caret-down';
        previousState.iconFolderClass = 'fa fa-folder-open k-folder-icon';
      }
    })
  }
  handleClickDirectory() {
    this.props.onClickBranch(this.props.files, this.props.path, this);
  }
  render() {

    /* create array of components based on files, check if render child node and also check
       it types by checking if node has a child node
    */
    var rows = this.props.files.map((row) => {
      if (this.state.renderChild) {
        if (!!row.children)
          return (<Directory name={row.name} key={row.name} files={row.children} path={row.path} onClickBranch={this.props.onClickBranch}/>)
        else
          return (<KFile name={row.name} key={row.name} path={row.path} filterText={this.props.filterText}/>)
      } else
        return;
      }
    );

    return (
      <li>
        <i className={this.state.iconArrowClass} onClick={this.toogleDirectory.bind(this)}></i>
        <span className="disable-select highlight" onClick={this.handleClickDirectory.bind(this)} onDoubleClick={this.toogleDirectory.bind(this)}>
          <i className={this.state.iconFolderClass}></i>
          {this.props.name}</span>
        <ul>{rows}</ul>
      </li>
    );
  }
}

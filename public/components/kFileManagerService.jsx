
let instanceKFileManagerService = null;

export default class KFileManagerService{
  constructor(branchFiles){
    if(!instanceKFileManagerService){
      instanceKFileManagerService = this;
      return instanceKFileManagerService;
    }

    this.currentBranchFiles = branchFiles || [];

    return instanceKFileManagerService;
  }
  setCurrentBranchFiles(branchFiles){
    this.currentBranchFiles = branchFiles;
  }
  getCurrentBranchFiles(){
    return this.currentBranchFiles;
  }
}

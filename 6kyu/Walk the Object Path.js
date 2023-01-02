function find(object, path) {
  
    return path.split('.').reduce(function(acc, pathName){
      return (acc && acc.hasOwnProperty(pathName)) ? acc[pathName] : undefined;
    },object);
    
  }
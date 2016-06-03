module.exports = function(self){
  return function(elem){
    if(elem.postRender){
      elem.postRender();
    }
    for(var id in elem.registry){
      self.postProcess(elem.registry[id]);
    }
  }
}

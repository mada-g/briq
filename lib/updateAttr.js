module.exports = function(instance){

  return function(newAttr){
    for(var p in newAttr){
      instance.attr[p] = newAttr[p];
    }
  }

}

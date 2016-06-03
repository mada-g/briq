module.exports = function(initAttr, definition){
  for(var p in initAttr){
    definition.attr[p] = initAttr[p];
  }
  return definition.attr;
}

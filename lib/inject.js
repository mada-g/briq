module.exports = function(self){
  return function(anchor, elem){
    elem.registry = {};
    anchor.innerHTML = elem.render();
    self.postProcess(elem);
  }
}

var Utils = require('./utils.js');

module.exports = function(instance, definition, thisBriq){

  return function(newAttr){
    instance.updateAttr(newAttr);
    Utils.empty(instance.id);

    instance.registry = {};

    document.getElementById(instance.id).innerHTML = definition.render.apply(instance);

    thisBriq.postProcess(instance);
  }

}

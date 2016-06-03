module.exports = function(instance, definition){

  return function(newAttr){
    if(newAttr != undefined){
      instance.updateAttr(newAttr)
    }

    return "<div id='" +instance.id+ "'>" + definition.render.apply(instance) + "</div>";
  }

}

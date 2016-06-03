module.exports = function(instance){

  return function(component){
    instance.registry[component.id] = component;

    return function(newAttrs){
      return component.render(newAttrs);
    }
  }

}

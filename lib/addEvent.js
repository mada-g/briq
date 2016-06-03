module.exports = function(instance){

  return function(selector){
    return function(type){
      return function(callback){
        var elem = document.querySelector(selector);
        elem.addEventListener(type, callback.bind(instance), false);
      }
    }
  }

}

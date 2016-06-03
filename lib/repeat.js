module.exports = function(instance){
  return function(arr){
    return function(fn){
      var html = '';

      arr.forEach(function(elem, i){
        html += fn.call(instance, elem, i);
      });

      return html;
    }
  }
}

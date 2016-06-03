module.exports = {

  empty: function(elemID){
    var elem = document.getElementById(elemID);
    while(elem.lastChild){
      elem.removeChild(elem.lastChild);
    }
  },

  findRegistryNode: function(obj, key){
    for(var k in obj){
      if(k === key) return obj[k];
      return this.findRegistryNode(obj[k].children, key);
    }

  }

}

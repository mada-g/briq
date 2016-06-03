var shortid = require('shortid');

var attributes = require('./attributes.js');
var updateAttr = require('./updateAttr.js');
var render = require('./render.js');
var update = require('./update.js');
var addEvent = require('./addEvent.js');
var attach = require('./attach.js');
var repeat = require('./repeat.js');

module.exports = function(self){
  return function(definition){
    var thisBriq = self;

    return function(initAttr){
      definition.init();

      var instance = {
        id: shortid.generate(),
        attr: attributes(initAttr, definition),
        registry: {},
        func: {},
      }

      instance.attach = attach(instance);
      instance.render = render(instance, definition);
      instance.updateAttr = updateAttr(instance);
      instance.update = update(instance, definition, thisBriq);
      instance.addEvent = addEvent(instance);
      instance.repeat = repeat(instance);

      if(definition.postRender){
        instance.postRender = definition.postRender.bind(instance);
      }

      if(definition.func){
        for(var m in definition.func){
          instance.func[m] = definition.func[m].bind(instance);
        }
      }

      return instance;
    }
  }
}

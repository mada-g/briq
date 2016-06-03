var shortid = require('shortid');

var define = require('./define.js');
var inject = require('./inject.js');
var postProcess = require('./postProcess.js');

var Utils = require('./utils.js')

var Briq = {};

Briq.define = define(Briq);
Briq.inject = inject(Briq);
Briq.postProcess = postProcess(Briq);

module.exports = Briq;

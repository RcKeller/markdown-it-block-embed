// Copyright (c) Keller, Rotorz Limited and portions by original markdown-it-video authors
// Licensed under the MIT license. See LICENSE file in the project root.

"use strict";

const JSFiddleService = require("./services/JSFiddleService");
// const CodePenService = require("./services/CodePenService");
// const JSBinService = require("./services/JSBinService");

class PluginEnvironment {

  constructor(md, options) {
    this.md = md;
    this.options = Object.assign(this.getDefaultOptions(), options);

    this._initServices();
  }

  _initServices() {
    let defaultServiceBindings = {
      "jsfiddle": JSFiddleService,
      // "codepen": CodePenService,
      // "jsbin": JSBinService
    };

    let serviceBindings = Object.assign({}, defaultServiceBindings, this.options.services);
    let services = {};
    for (let serviceName of Object.keys(serviceBindings)) {
      let _serviceClass = serviceBindings[serviceName];
      services[serviceName] = new _serviceClass(serviceName, this.options[serviceName], this);
    }

    this.services = services;
  }

  getDefaultOptions() {
    return {
      containerClassName: "block-embed",
      serviceClassPrefix: "block-embed-service-",
      outputPlayerSize: true,
      allowFullScreen: true,
      filterUrl: null
    };
  }

}


module.exports = PluginEnvironment;

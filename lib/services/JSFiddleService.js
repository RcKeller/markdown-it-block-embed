// Copyright (c) Rotorz Limited and portions by original markdown-it-video authors
// Licensed under the MIT license. See LICENSE file in the project root.

"use strict";

const VideoServiceBase = require("./VideoServiceBase");


class JSFiddleService extends VideoServiceBase {

  getDefaultOptions() {
    return {
      width: '100%',
      height: 300,
      allowFullScreen: true,
      frameborder: 0
    };
  }

  getVideoUrl(link) { //  Namespace retained from source
    return this.env.md.utils.escapeHtml(link);
  }

}


module.exports = JSFiddleService;

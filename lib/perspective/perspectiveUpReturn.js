'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateX = (0, _utils.compose)(_utils.perspective, _utils.rotateX);


var perspectiveUpReturn = {
  '0%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateX(['800px'], [180])
  },
  '100%': {
    transformOrigin: '0 0',
    transform: perspectiveRotateX(['800px'], [0])
  }
};

exports.default = perspectiveUpReturn;
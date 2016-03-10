'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var TestClass = function () {
    function TestClass() {
        _classCallCheck(this, TestClass);
    }

    _createClass(TestClass, [{
        key: 'logFuncition',
        value: function logFuncition(message) {
            console.log(message);
        }
    }]);

    return TestClass;
}();

exports.default = TestClass;
//# sourceMappingURL=testdebug.js.map

//# sourceMappingURL=testdebug-compiled.js.map
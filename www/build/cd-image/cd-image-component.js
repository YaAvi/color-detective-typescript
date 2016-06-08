"use strict";
var Ctrl = require("./cd-image-controller");
var cda;
(function (cda) {
    var image;
    (function (image) {
        var imageComponent = (function () {
            function imageComponent() {
                this.templateUrl = 'build/cd-image/cd-image-template.html';
                this.controller = Ctrl.cda.image.CdImageCtrl;
            }
            return imageComponent;
        }());
        image.imageComponent = imageComponent;
        angular.module('cda').component('cdImage', new imageComponent());
    })(image = cda.image || (cda.image = {}));
})(cda || (cda = {}));

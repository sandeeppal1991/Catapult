(function () {
    "use strict";

    angular.module("Elements.Directives", []);
    angular.module("Elements.Services", []);
    angular.module("Elements.Controllers", []);
    angular.module("Elements.Factories", []);
    angular.module("Elements.Helpers", []);
    angular.module("Elements.Externals", ["ui.router", "ui.bootstrap"]);

    var app = angular.module("Elements", ["Elements.Directives", "Elements.Services", "Elements.Factories", "Elements.Controllers", "Elements.Externals", "Elements.Helpers"]);
})();
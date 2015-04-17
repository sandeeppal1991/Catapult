(function () {
    "use strict";
    angular
        .module("Elements")
        .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state("Index", {
                url: "/",
                templateUrl: "/app/views/index.html",
                controller: "IndexController",
                controllerAs: "Index"
            });

            $urlRouterProvider.otherwise("/");
        }]);
})();
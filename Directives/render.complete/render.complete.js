// credit: http://www.bennadel.com/blog/2592-hooking-into-the-complete-event-of-an-ngrender-loop-in-angularjs.htm

/*
    GUIDELINES:
    - Keep your directives light and effective. each one has a purpose
    - Keep the scope limited, don't misuse the power a directive provides
    - Keep the link function light, if you want to use this as an api then consider a controller function instead
    - You can call methods of a directive from else where for OOPs using a provider        
*/

(function () {
    "use strict";

    // register your directive into a dependent module.
    angular
        .module('Elements.Directives')
        .directive("renderComplete", ["$rootScope", renderCompleteDirective]);

    // directive definintion function. note this is a singleton
    var renderCompleteDirective = function ($rootScope) {

        var uniqueId = 0;

        // use compile for all your DOM manipulations
        function compile($element, $attrs) {
            var id = ++uniqueId;
            $element.attr("render-id", id);
            $element.removeAttr("render-complete");
            var completeExpression = $attrs.renderComplete;
            var parent = $element.parent();
            var parentScope = (parent.scope() || $rootScope);
            var unbindWatcher = parentScope.$watch(
                function () {
                    var lastItem = parent.children("*[render-id = '" + id + "']:last");
                    if (!lastItem.length) {
                        return;
                    }
                    var itemScope = lastItem.scope();
                    if (itemScope.$last) {
                        unbindWatcher();
                        itemScope.$eval(completeExpression);
                    }
                }
            );
        }

        // use link for all your logic. remember link runs multiple times
        // you may also want to consider $observing attrs incase you want to support interpolation
        // do not absue $watch. keep this simple.
        return ({
            compile: compile,
            priority: 1001,
            restrict: "A"
        });
    }
})();
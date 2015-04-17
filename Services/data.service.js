/*
    GUIDELINES:
    - A service is meant to provide/transform data into a particular format. Services may or may not communicate with external sources
    - Use the logger for any sort of logging, it helps with a bunch of timestamps. 
    - Expose only the required functions
    - If communicating with Rest APIs then use $resource instead
    - Configure authentication and other settings globally. Google is your friend!
    - Use promises and know the please use $q instead.
    - Defer the call if you dont know what's happening or if something will take a really long time to process
    - Dont always chain promises, sometimes make them run together with join
    - Define service data transformations in this service - Google this as well    
*/

(function () {
    "use strict";

    // register your service into a dependent module.
    angular
         .module("Elements.Services")
         .service("DataService", ["$http", "$q", "logger", DataService]);

    // service definition. note this is a singleton class.
    function DataService($http, $q, logger) {

        // wire up all exposable methods to 'this'
        this.get = function (pageId) {
            return $http.get("Scripts/data.json").then(logger.success, logger.error);
        }

        // a generic handleSuccess method
        function handleSuccess(response) {
            if (!angular.isUndefined(response)) {
                return response.data;
            }
            else {
                logger.info("response was undefined");
            }
        }
    }
})();

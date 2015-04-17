(function () {
    "use strict";

    angular
        .module("Elements.Factories")
        .factory("logger", ["$log", LoggerFactory]);

    function LoggerFactory ($log) {
        var instance = {}

        var timeStamp = function () {
            var now = new Date();
            var
                hours = now.getHours(),
                minutes = now.getMinutes(),
                seconds = now.getSeconds(),
                date = now.toDateString()

            var time = [hours, minutes, seconds];
            return date + " - " + time.join(":");
        }

        instance.info = function (information) {
            $log.info(timeStamp(), error);
        }

        instance.error = function (error) {
            $log.error(timeStamp(), error);
        }

        return instance;
    }    
})();
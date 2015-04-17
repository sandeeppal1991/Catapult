/*
    GUIDELINES:
    - Do not do DOM manipulations here. modify values to do them for you
    - Use $watch only when necessary
    - Expose functions use 'this'
    - Use camel casing for member variables & methods
    - Use Standard class naming convention such as MyClass
    - Attach all functions to the prototype chain as shown below
    - Keep private variables outside the controller defininiton. Wathout for memory leaks
    - Name private variables with _
    - Store the current controller reference in 'that' if required.
*/


(function () {
    "use strict";

    // register your controller into a dependent module 
    angular
    .module("Elements.Controllers")
    .controller("IndexController", ["DataService", IndexController]);

    // controller class definintion
    function IndexController(dataService) {
        this.projectName = "Elements";
        dataService.get().then(this.initialize);
    };

    // this is the constructor to your controller class
    IndexController.prototype.initialize = function (data) {
        console.log(data);
    }
})();
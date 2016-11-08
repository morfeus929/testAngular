'use strict';

angular.module('main').directive('myModal', myModal);

myModal.$inject = [];

function myModal() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.dismiss = function() {
                element[0].style.display = 'none';
                document.getElementsByTagName('body')[0].className = 'ng-scope';
                angular.element(document.getElementsByClassName('modal-backdrop')).remove();
                element[0].className = 'modal fade';
            };
        }
    }

}
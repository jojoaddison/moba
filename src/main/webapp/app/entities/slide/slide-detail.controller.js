(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('SlideDetailController', SlideDetailController);

    SlideDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Slide'];

    function SlideDetailController($scope, $rootScope, $stateParams, entity, Slide) {
        var vm = this;

        vm.slide = entity;

        var unsubscribe = $rootScope.$on('mobaApp:slideUpdate', function(event, result) {
            vm.slide = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

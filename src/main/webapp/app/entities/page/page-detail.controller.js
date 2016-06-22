(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('PageDetailController', PageDetailController);

    PageDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Page'];

    function PageDetailController($scope, $rootScope, $stateParams, entity, Page) {
        var vm = this;

        vm.page = entity;

        var unsubscribe = $rootScope.$on('mobaApp:pageUpdate', function(event, result) {
            vm.page = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

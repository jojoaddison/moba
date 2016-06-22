(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('PollDetailController', PollDetailController);

    PollDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Poll'];

    function PollDetailController($scope, $rootScope, $stateParams, entity, Poll) {
        var vm = this;

        vm.poll = entity;

        var unsubscribe = $rootScope.$on('mobaApp:pollUpdate', function(event, result) {
            vm.poll = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('VoteDetailController', VoteDetailController);

    VoteDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Vote'];

    function VoteDetailController($scope, $rootScope, $stateParams, entity, Vote) {
        var vm = this;

        vm.vote = entity;

        var unsubscribe = $rootScope.$on('mobaApp:voteUpdate', function(event, result) {
            vm.vote = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

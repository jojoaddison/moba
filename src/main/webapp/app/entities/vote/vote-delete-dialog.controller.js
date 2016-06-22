(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('VoteDeleteController',VoteDeleteController);

    VoteDeleteController.$inject = ['$uibModalInstance', 'entity', 'Vote'];

    function VoteDeleteController($uibModalInstance, entity, Vote) {
        var vm = this;

        vm.vote = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Vote.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();

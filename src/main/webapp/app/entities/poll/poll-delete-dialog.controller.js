(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('PollDeleteController',PollDeleteController);

    PollDeleteController.$inject = ['$uibModalInstance', 'entity', 'Poll'];

    function PollDeleteController($uibModalInstance, entity, Poll) {
        var vm = this;

        vm.poll = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Poll.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();

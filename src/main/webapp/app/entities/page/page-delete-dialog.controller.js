(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('PageDeleteController',PageDeleteController);

    PageDeleteController.$inject = ['$uibModalInstance', 'entity', 'Page'];

    function PageDeleteController($uibModalInstance, entity, Page) {
        var vm = this;

        vm.page = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Page.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();

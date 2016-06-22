(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('SlideDeleteController',SlideDeleteController);

    SlideDeleteController.$inject = ['$uibModalInstance', 'entity', 'Slide'];

    function SlideDeleteController($uibModalInstance, entity, Slide) {
        var vm = this;

        vm.slide = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Slide.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();

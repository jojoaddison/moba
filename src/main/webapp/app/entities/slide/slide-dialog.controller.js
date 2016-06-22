(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('SlideDialogController', SlideDialogController);

    SlideDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Slide'];

    function SlideDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Slide) {
        var vm = this;

        vm.slide = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.slide.id !== null) {
                Slide.update(vm.slide, onSaveSuccess, onSaveError);
            } else {
                Slide.save(vm.slide, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mobaApp:slideUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();

(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('PollDialogController', PollDialogController);

    PollDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Poll'];

    function PollDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Poll) {
        var vm = this;

        vm.poll = entity;
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
            if (vm.poll.id !== null) {
                Poll.update(vm.poll, onSaveSuccess, onSaveError);
            } else {
                Poll.save(vm.poll, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mobaApp:pollUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();

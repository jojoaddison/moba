(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('VoteDialogController', VoteDialogController);

    VoteDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Vote'];

    function VoteDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Vote) {
        var vm = this;

        vm.vote = entity;
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
            if (vm.vote.id !== null) {
                Vote.update(vm.vote, onSaveSuccess, onSaveError);
            } else {
                Vote.save(vm.vote, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mobaApp:voteUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();

(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('MemberDialogController', MemberDialogController);

    MemberDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Member'];

    function MemberDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Member) {
        var vm = this;

        vm.member = entity;
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
            if (vm.member.id !== null) {
                Member.update(vm.member, onSaveSuccess, onSaveError);
            } else {
                Member.save(vm.member, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mobaApp:memberUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();

(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('AnnouncementDialogController', AnnouncementDialogController);

    AnnouncementDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Announcement'];

    function AnnouncementDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Announcement) {
        var vm = this;

        vm.announcement = entity;
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
            if (vm.announcement.id !== null) {
                Announcement.update(vm.announcement, onSaveSuccess, onSaveError);
            } else {
                Announcement.save(vm.announcement, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('mobaApp:announcementUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();

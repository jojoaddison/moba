(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('AnnouncementDeleteController',AnnouncementDeleteController);

    AnnouncementDeleteController.$inject = ['$uibModalInstance', 'entity', 'Announcement'];

    function AnnouncementDeleteController($uibModalInstance, entity, Announcement) {
        var vm = this;

        vm.announcement = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Announcement.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();

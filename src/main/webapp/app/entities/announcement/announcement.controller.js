(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('AnnouncementController', AnnouncementController);

    AnnouncementController.$inject = ['$scope', '$state', 'Announcement'];

    function AnnouncementController ($scope, $state, Announcement) {
        var vm = this;
        
        vm.announcements = [];

        loadAll();

        function loadAll() {
            Announcement.query(function(result) {
                vm.announcements = result;
            });
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('AnnouncementDetailController', AnnouncementDetailController);

    AnnouncementDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Announcement'];

    function AnnouncementDetailController($scope, $rootScope, $stateParams, entity, Announcement) {
        var vm = this;

        vm.announcement = entity;

        var unsubscribe = $rootScope.$on('mobaApp:announcementUpdate', function(event, result) {
            vm.announcement = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

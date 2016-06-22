(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('GalleryDetailController', GalleryDetailController);

    GalleryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Gallery'];

    function GalleryDetailController($scope, $rootScope, $stateParams, entity, Gallery) {
        var vm = this;

        vm.gallery = entity;

        var unsubscribe = $rootScope.$on('mobaApp:galleryUpdate', function(event, result) {
            vm.gallery = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

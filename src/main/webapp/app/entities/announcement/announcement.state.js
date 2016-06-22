(function() {
    'use strict';

    angular
        .module('mobaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('announcement', {
            parent: 'entity',
            url: '/announcement',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Announcements'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/announcement/announcements.html',
                    controller: 'AnnouncementController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            },
            resolve: {
            }
        })
        .state('announcement-detail', {
            parent: 'entity',
            url: '/announcement/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Announcement'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/announcement/announcement-detail.html',
                    controller: 'AnnouncementDetailController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Announcement', function($stateParams, Announcement) {
                    return Announcement.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('announcement.new', {
            parent: 'announcement',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/announcement/announcement-dialog.html',
                    controller: 'AnnouncementDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                paragraphs: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('announcement', null, { reload: true });
                }, function() {
                    $state.go('announcement');
                });
            }]
        })
        .state('announcement.edit', {
            parent: 'announcement',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/announcement/announcement-dialog.html',
                    controller: 'AnnouncementDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Announcement', function(Announcement) {
                            return Announcement.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('announcement', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('announcement.delete', {
            parent: 'announcement',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/announcement/announcement-delete-dialog.html',
                    controller: 'AnnouncementDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Announcement', function(Announcement) {
                            return Announcement.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('announcement', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();

(function() {
    'use strict';

    angular
        .module('mobaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('page', {
            parent: 'entity',
            url: '/page',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Pages'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/page/pages.html',
                    controller: 'PageController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            },
            resolve: {
            }
        })
        .state('page-detail', {
            parent: 'entity',
            url: '/page/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Page'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/page/page-detail.html',
                    controller: 'PageDetailController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Page', function($stateParams, Page) {
                    return Page.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('page.new', {
            parent: 'page',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/page/page-dialog.html',
                    controller: 'PageDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                contents: null,
                                galleries: null,
                                name: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('page', null, { reload: true });
                }, function() {
                    $state.go('page');
                });
            }]
        })
        .state('page.edit', {
            parent: 'page',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/page/page-dialog.html',
                    controller: 'PageDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Page', function(Page) {
                            return Page.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('page', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('page.delete', {
            parent: 'page',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/page/page-delete-dialog.html',
                    controller: 'PageDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Page', function(Page) {
                            return Page.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('page', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();

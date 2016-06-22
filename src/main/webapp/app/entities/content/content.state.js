(function() {
    'use strict';

    angular
        .module('mobaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('content', {
            parent: 'entity',
            url: '/content?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Contents'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/content/contents.html',
                    controller: 'ContentController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
            }
        })
        .state('content-detail', {
            parent: 'entity',
            url: '/content/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Content'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/content/content-detail.html',
                    controller: 'ContentDetailController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Content', function($stateParams, Content) {
                    return Content.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('content.new', {
            parent: 'content',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/content/content-dialog.html',
                    controller: 'ContentDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                paragraphs: null,
                                type: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('content', null, { reload: true });
                }, function() {
                    $state.go('content');
                });
            }]
        })
        .state('content.edit', {
            parent: 'content',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/content/content-dialog.html',
                    controller: 'ContentDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Content', function(Content) {
                            return Content.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('content', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('content.delete', {
            parent: 'content',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/content/content-delete-dialog.html',
                    controller: 'ContentDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Content', function(Content) {
                            return Content.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('content', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();

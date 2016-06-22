(function() {
    'use strict';

    angular
        .module('mobaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('slide', {
            parent: 'entity',
            url: '/slide?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Slides'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/slide/slides.html',
                    controller: 'SlideController',
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
                }]
            }
        })
        .state('slide-detail', {
            parent: 'entity',
            url: '/slide/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Slide'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/slide/slide-detail.html',
                    controller: 'SlideDetailController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Slide', function($stateParams, Slide) {
                    return Slide.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('slide.new', {
            parent: 'slide',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/slide/slide-dialog.html',
                    controller: 'SlideDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                url: null,
                                title: null,
                                subTitle: null,
                                description: null,
                                gallery: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('slide', null, { reload: true });
                }, function() {
                    $state.go('slide');
                });
            }]
        })
        .state('slide.edit', {
            parent: 'slide',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/slide/slide-dialog.html',
                    controller: 'SlideDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Slide', function(Slide) {
                            return Slide.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('slide', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('slide.delete', {
            parent: 'slide',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/slide/slide-delete-dialog.html',
                    controller: 'SlideDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Slide', function(Slide) {
                            return Slide.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('slide', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();

(function() {
    'use strict';

    angular
        .module('mobaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('poll', {
            parent: 'entity',
            url: '/poll?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Polls'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/poll/polls.html',
                    controller: 'PollController',
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
        .state('poll-detail', {
            parent: 'entity',
            url: '/poll/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Poll'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/poll/poll-detail.html',
                    controller: 'PollDetailController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Poll', function($stateParams, Poll) {
                    return Poll.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('poll.new', {
            parent: 'poll',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/poll/poll-dialog.html',
                    controller: 'PollDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                description: null,
                                votes: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('poll', null, { reload: true });
                }, function() {
                    $state.go('poll');
                });
            }]
        })
        .state('poll.edit', {
            parent: 'poll',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/poll/poll-dialog.html',
                    controller: 'PollDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Poll', function(Poll) {
                            return Poll.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('poll', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('poll.delete', {
            parent: 'poll',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/poll/poll-delete-dialog.html',
                    controller: 'PollDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Poll', function(Poll) {
                            return Poll.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('poll', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();

(function() {
    'use strict';

    angular
        .module('mobaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('error', {
                parent: 'app',
                url: '/error',
                data: {
                    authorities: [],
                    pageTitle: 'Error page!'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/layouts/error/error.html'
                    },
                    'footer@': {
                        templateUrl: 'app/home/footer.html'
                    }
                }
            })
            .state('accessdenied', {
                parent: 'app',
                url: '/accessdenied',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/layouts/error/accessdenied.html'
                    },
                    'footer@': {
                        templateUrl: 'app/home/footer.html'
                    }
                }
            });
    }
})();

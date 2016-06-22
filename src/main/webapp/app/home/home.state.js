(function() {
    'use strict';

    angular
        .module('mobaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('home', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'header@': {
                    templateUrl: 'app/home/header.html',
                    controller: 'HeaderController',
                    controllerAs: 'vm'
                },
                'content@': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html',
                    controller: 'HeaderController',
                    controllerAs: 'vm'
                }

            }
        });
    }
})();

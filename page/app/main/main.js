'use strict';

angular.module('mobaApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                parent: 'site',
                url: 'main',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'MainController'
                    }
                },
                resolve: {

                }
            });
    });

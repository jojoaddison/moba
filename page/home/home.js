'use strict';

angular.module('mobaApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    authorities: []
                },
                views: {
                    'header@': {
                        templateUrl: 'scripts/app/home/slider.html',
                        controller: 'SliderController'
                    },

                    'content@': {
                        templateUrl: 'scripts/app/home/main.html',
                        controller: 'HomeController'
                    },

                    'footer@': {
                        templateUrl: 'scripts/app/home/footer.html',
                        controller: 'FooterController'
                    }
                },
                resolve: {

                }
            });
    });

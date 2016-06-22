(function() {
    'use strict';

    angular
        .module('mobaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('requestReset', {
            parent: 'app',
            url: '/reset/request',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/account/reset/request/reset.request.html',
                    controller: 'RequestResetController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/home/footer.html'
                }
            }
        });
    }
})();

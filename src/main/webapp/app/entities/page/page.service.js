(function() {
    'use strict';
    angular
        .module('mobaApp')
        .factory('Page', Page);

    Page.$inject = ['$resource'];

    function Page ($resource) {
        var resourceUrl =  'api/pages/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();

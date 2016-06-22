(function() {
    'use strict';
    angular
        .module('mobaApp')
        .factory('Gallery', Gallery);

    Gallery.$inject = ['$resource'];

    function Gallery ($resource) {
        var resourceUrl =  'api/galleries/:id';

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

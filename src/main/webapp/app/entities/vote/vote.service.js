(function() {
    'use strict';
    angular
        .module('mobaApp')
        .factory('Vote', Vote);

    Vote.$inject = ['$resource'];

    function Vote ($resource) {
        var resourceUrl =  'api/votes/:id';

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

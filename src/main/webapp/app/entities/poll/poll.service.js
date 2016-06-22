(function() {
    'use strict';
    angular
        .module('mobaApp')
        .factory('Poll', Poll);

    Poll.$inject = ['$resource'];

    function Poll ($resource) {
        var resourceUrl =  'api/polls/:id';

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

(function() {
    'use strict';
    angular
        .module('mobaApp')
        .factory('Announcement', Announcement);

    Announcement.$inject = ['$resource'];

    function Announcement ($resource) {
        var resourceUrl =  'api/announcements/:id';

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

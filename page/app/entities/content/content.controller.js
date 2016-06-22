'use strict';

angular.module('mobaApp')
    .controller('ContentController', function ($rootScope, $scope, $state, Content, ParseLinks) {

        $scope.contents = [];
        $scope.predicate = 'id';
        $scope.reverse = true;
        $scope.page = 1;
        $scope.loadAll = function() {
            Content.query({page: $scope.page - 1, size: 20, sort: [$scope.predicate + ',' + ($scope.reverse ? 'asc' : 'desc'), 'id']}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.totalItems = headers('X-Total-Count');
                $scope.contents = result;
                $rootScope.$broadcast('content-loaded', result);
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.types = ['main', 'information', 'announcement', 'footer'];

        $scope.clear = function () {
            $scope.content = {
                title: null,
                paragraphs: null,
                type: null,
                id: null
            };
        };
    });

'use strict';

describe('Controller Tests', function() {

    describe('Announcement Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockAnnouncement;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockAnnouncement = jasmine.createSpy('MockAnnouncement');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Announcement': MockAnnouncement
            };
            createController = function() {
                $injector.get('$controller')("AnnouncementDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'mobaApp:announcementUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});

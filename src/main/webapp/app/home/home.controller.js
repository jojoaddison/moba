(function() {
    'use strict';

    angular
        .module('mobaApp')
        .controller('HeaderController', HeaderController)
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$rootScope', 'Principal', 'LoginService', '$state'];
    HeaderController.$inject = ['$scope', '$rootScope'];

    function HeaderController($scope, $rootScope){
        $rootScope.showHeader = true;
        $rootScope.currentDate = Date.now();
        var vm = this;
        vm.slides = [];

        for(var i=1; i < 19; i++){

            var url = "gallery/2012/thepast_" + (i < 10? "0"+i: i) + ".jpg";

            var slide = {
                url : url,
                sliderType: "standard",
                sliderLayout: "auto",
                responsiveLevels: [1920, 1024, 778, 480],
                gridwidth: [1930, 1240, 778, 480],
                gridheight: [768, 768, 960, 720],
                autoHeight: "off",
                minHeight: "",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                delay: 9000,
                disableProgressBar: "on",
                startDelay: "",
                stopAfterLoops: "",
                stopAtSlide: "",
                viewPort: {},
                lazyType: "none",
                dottedOverlay: "none",
                shadow: 0,
                spinner: "off",
                hideAllCaptionAtLilmit: 0,
                hideCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                debugMode: false,
                extensions: "",
                extensions_suffix: "",
                fallbacks: {
                    simplifyAll: "off",
                    disableFocusListener: false
                },
                parallax: {
                    type: "scroll",
                    origo: "enterpoint",
                    speed: 400,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
                },
                carousel: {},
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "on",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: false,
                        swipe_direction: "horizontal"
                    },
                    tabs: {
                        style: "zeus",
                        enable: true,
                        width: 150,
                        height: 30,
                        min_width: 100,
                        wrapper_padding: 0,
                        wrapper_color: "transparent",
                        wrapper_opacity: "0",
                        tmp: "<span class='tp-tab-title'>{{title}}</span>",
                        visibleAmount: 3,
                        hide_onmobile: true,
                        hide_under: 480,
                        hide_onleave: false,
                        hide_delay: 200,
                        direction: "horizontal",
                        span: true,
                        position: "inner",
                        space: 1,
                        h_align: "left",
                        v_align: "top",
                        h_offset: 30,
                        v_offset: 30
                    }
                },
                jsFileLocation: "",
                visibilityLevels: [1240, 1024, 778, 480],
                hideThumbsOnMobile: "off"
            };

            vm.slides.push(slide);
        }

        $scope.slider = {

        };


    }
    function HomeController ($scope, $rootScope, Principal, LoginService, $state) {
        $rootScope.showHeader = true;
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

       // getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }


        $scope.main = {
            title: "Mfantsipim Old Boys Association - 1992 Year Group",
            paragraphs: [
                " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum"
            ]
        };
        $scope.mainExist=true;
        $scope.information = [
            {
                title: "Our Aims",
                paragraphs: [
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum"
                ]
            },
            {
                title: "Our Objectives",
                paragraphs: [
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum"
                ]
            },
            {
                title: "Our Projects",
                paragraphs: [
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum"
                ]
            }
        ];
        $scope.informationExist = true;
        $scope.announcementsExist = true;
        $scope.announcements = [
            {
                title: "MOBA 92 Website launch 25th June, 2016",
                paragraphs: [
                    " As part of the our preparations towards 2022, we shall launch our new website on the 25th of June, 2016.",
                    " To enable a smooth launch, all members are required to send in their email addresses and current mobile phone numbers to the web master for registration.",
                    " Please note that, you shall not be able to log into the website and receive vital information leading up to 2022 if you failed to register.",
                    " Thank you very much for your understanding and cooperation.",
                    " - Your webmaster G.Stapo"
                ]
            },
            {
                title: "National MOBA Meeting 2nd July, 2016",
                paragraphs: [
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum"
                ]
            },
            {
                title: "MOBA 92 Executives Meeting 15th May, 2016",
                paragraphs: [
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum",
                    " lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosumIpsum lopsum dosum bosum"
                ]
            }
        ];


        $rootScope.$on('content-loaded', function(event, contents){
            angular.forEach(contents, function(content){
                if(content.type && content.type === 'main'){
                    $scope.main.title = content.title;
                    $scope.main.paragraphs = content.paragraphs;
                }
                if(content.type && content.type === 'announcement'){
                    $scope.announcementsExist = true;
                    $scope.announcements.push(content);
                }
                if(content.type && content.type === 'information'){
                    $scope.informationExist = true;
                    $scope.information.push(content);
                }
            });
        });
    }

})();

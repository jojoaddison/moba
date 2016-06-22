'use strict';

angular.module('mobaApp')
    .controller('SliderController', function($scope, $rootScope){
        $scope.slides = [];
        $rootScope.$on('slides-loaded', function(event, slides){
            $scope.slides = slides;
        });


    })
    .controller('FooterController', function($scope, $rootScope){
        $scope.footer = {
            title: null,
            paragraphs: null
        };
        $rootScope.$on('content-loaded', function(event, contents){

            angular.forEach(contents, function(content){

                if(content.type && content.type === 'footer'){
                   $scope.footer.paragraphs = content.paragraphs;
                   $scope.footer.title = content.title;
                }

            });

        });
    })
    .controller('PageController', function ($scope, $rootScope){
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
    })
;



/* ******************************
 * 
 * StyleSwitcher Script
 * 
 * Author: Pixel Industry
 * 
 ******************************* */

jQuery(document).ready(function($){
    var relativeDir = 'css/';
    
    /* ***************************************
     * Reading Cookies for stored values
     *******************************************/
     
    (function(){
        if(readCookie("ssMixedStyle") !== null){
            var styleVal = readCookie("ssMixedStyle");
            changeStyle(styleVal);
        }
        
        if((readCookie("ssMixedPattern") !== null)){
            var skinVal = readCookie("ssMixedPattern");
            $('body').removeClass().addClass(skinVal);
        }
    })();
        
    
    
    /* ***************************************
     * SlideIn and SlideOut animation on click
     *******************************************/
    
    $('#styles-button').on('click', function(e){
        e.preventDefault();
        var switcherWidth = $('#style-switcher').width();
        if($('#style-switcher').hasClass('opened')){
            $('#style-switcher').animate({
                left: -switcherWidth
            }, 700, function(){
                $(this).removeClass('opened');
            });
        }else{
            $('#style-switcher').animate({
                left: 0
            }, 700, function(){
                $(this).addClass('opened');
            });
        }
        
    });
    
    /* ******************
     * Style Changing
     *********************/
    
    $('.styles-list li').on('click', function(e){
        e.preventDefault();
        var styleVal = $(this).attr('class');
        changeStyle(styleVal);
        createCookie("ssMixedStyle", styleVal, 7);
    });
    
    /* ******************
     * Pattern Changing
     *********************/
    
    $('.pattern-list li').on('click', function(e){        
        var skinVal = $(this).attr('class');
        $('body').removeClass().addClass(skinVal);
        createCookie("ssMixedPattern", skinVal, 7);
        
    });
    
    function changeStyle(styleVal){
        $('link[title="activestyle"]').remove();
        var stylesheet = '<link rel="stylesheet" href="' + relativeDir + styleVal + '.css" type="text/css" />';
        $('head').append(stylesheet);
        
        // Changing logo
        $('.logo img').attr('src', 'img/' + 'logo-' + styleVal + '.png');
    }
    
    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name,"",-1);
    }
});
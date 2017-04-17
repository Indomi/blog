/**
 * Created by asus-pc on 2017/3/14.
 */
;
alert('正在开发中。。。。。。。');
$(function () {
    'use strict';
    var sidebar = $('#sidebar');//选择侧栏
    var mask = $('.mask');
    var sidebar_trigger = $('#sidebar_trigger');
    var backButton = $('.back-to-top');
    function showSideBar() {
        mask.fadeIn();
        sidebar.css('right',0);
    }
    function hidesidebar() {
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }
    sidebar_trigger.click(showSideBar);
    mask.click(hidesidebar);
    backButton.click(function () {
        $('html,body').animate({
            scrollTop:0
        },800);
    });
    $(window).scroll(function () {
        if($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else backButton.fadeOut();
    })
});
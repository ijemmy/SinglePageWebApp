/*
 spa.js
 Root namespace module
 */

var spa = (function () {
    var configMap = {
            main_html: '<div class="spa-shell-head">'
            + '<div class="spa-shell-head-logo"></div>'
            + '<div class="spa-shell-head-acct"></div>'
            + '<div class="spa-shell-head-search"></div>'
            + '</div>'
            + '<div class="spa-shell-main">'
            + '<div class="spa-shell-main-nav"></div>'
            + '<div class="spa-shell-main-content"></div>'
            + '</div>'
            + '<div class="spa-shell-foot"></div>'
            + '<div class="spa-shell-chat"></div>'
            + '<div class="spa-shell-modal"></div>'
        },
        stateMap = {$container: null},
        jqueryMap = {},
        setJqueryMap, initModule;

    setJqueryMap = function () {
        jqueryMap = {
            $container: stateMap.$container
        };
    };
    initModule = function ($container) {
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();
    };
    return {
        setJqueryMap: setJqueryMap,
        initModule: initModule
    };
}());
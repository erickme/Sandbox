(function () {
    'use strict';

    angular.module('sandbox', [
        // Angular modules 
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/pages/home/home.html'
            })
            .when('/page1', {
                templateUrl: 'app/pages/page1/page1.html'
            })
            .when('/page2', {
                templateUrl: 'app/pages/page2/page2.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    })
})();
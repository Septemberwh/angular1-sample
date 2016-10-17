define(['angular','dependencyResolverFor', 'angularResource', 'angularRoute'], function (angular, dependencyResolverFor) {
    var app = angular.module('routes', ['ngResource', 'ngRoute']);

    app.defaultRoutePath = '/web/notFound',
    app.routes =  {
        '/web': { templateUrl: 'html/homeBA.html', dependencies: ['html/homeBACtrl']},
    };

    app.config(
        [
            '$routeProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',

            function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;

                $locationProvider.html5Mode(true);

                if (app.routes !== undefined) {
                    angular.forEach(app.routes, function (route, path) {
                        $routeProvider
                            .when(path, {
                                templateUrl: route.templateUrl,
                                resolve: dependencyResolverFor(route.dependencies)
                            });
                    });
                }

                if (app.defaultRoutePath !== undefined) {
                    $routeProvider.otherwise({
                        redirectTo: app.defaultRoutePath
                    });
                }
            }
        ]
    );
    app.controller('indexCtrl', function ($scope) {

        // alert("success!!");

    });

    return app;
});
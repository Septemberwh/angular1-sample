requirejs.config({
    paths:{
        angular:"lib/angular/angular.min",
        jquery:'lib/jquery/dist/jquery.min',
        angularResource: "lib/angular-resource/angular-resource.min",
        angularRoute:"lib/angular-route/angular-route.min",
      
    },
    shim:{
        jquery: { exports: '$' },
        angular: { exports: 'angular',deps:['jquery']},
        angularResource: ['angular'],
        angularRoute:['angular'],
    },
    waitSeconds:30
});


require
(
    [
        'angular','routes'
    ],
    function(angular)
    {
        angular.bootstrap(document, ['routes']);
    }
);


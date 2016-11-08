var app = angular.module("main", ["ui.router",'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/albums");
    //$locationProvider.html5Mode(true);
    $stateProvider
        .state('albums', {
            url: "/albums",
            templateUrl: "partials/albums.html",
            controller: albumsController
        }).state('album', {
        url: "/album/{id}",
        templateUrl: "partials/album.html",
        controller: albumController
    });
});
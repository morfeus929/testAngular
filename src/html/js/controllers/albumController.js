angular.module('main').controller('albumController', albumController);
albumController.$inject = ['$scope','requestsService','$stateParams'];
function albumController($scope,requestsService,$stateParams) {

    $scope.$on('$viewContentLoaded',function () {
        $scope.getAllAlbums();

    });

    $scope.getAllAlbums = function () {
        requestsService.getAll(function (result) {
            $scope.getAlbum(result);

        },function (error) {
            console.log(error);
        });
    };

    $scope.getAlbum = function (result) {
        var temp = [];
        _.forEach(result, function(e) {
            temp.push(e);
        });
        for (var i = 0; i < temp.length; i++) {
            if(temp[i].id == $stateParams.id){
                var d = new Date();
                d.setFullYear(temp[i].year);
                temp[i].year = d;
                $scope.album = temp[i];
            }
        }
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1,
        minMode: 'year'
    };

    $scope.formats = ['yyyy'];

    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };

    $scope.open = function() {
        $scope.status.opened = true;
    };

    $scope.updateAlbum = function () {
        var requestParam = {
            param:{
                title: $scope.album.title,
                artist:  $scope.album.artist,
                logoUrl: $scope.album.logoUrl ,
                country: $scope.album.country,
                company:  $scope.album.company,
                price:  ""+$scope.album.price,
                year:  ""+$scope.album.year.getFullYear()
            },
            id: $scope.album.id
        };
        requestsService.update(requestParam,
            function (result) {
                console.log(result);
            },
            function (error) {
                console.log(error);
        });
    };

}
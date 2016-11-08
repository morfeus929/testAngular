angular.module('main').controller('albumsController', albumsController);
albumsController.$inject = ['$scope','requestsService','$document','$uibModal'];
function albumsController($scope,requestsService,$document,$uibModal) {

    $scope.$on('$viewContentLoaded',function () {
        $scope.albums = [];
        $scope.getAllAlbums();
    });

    $scope.getAllAlbums = function () {
        requestsService.getAll(function (result) {
            $scope.convertToArray(result);

        },function (error) {
            console.log(error);
        });
    };

    $scope.convertToArray = function (result) {
        _.forEach(result, function(e) {
            $scope.albums.push(e);
        });
    };

    $scope.orderAlbums = function (field) {
        if($scope.orderField === field){
            $scope.reverse = !$scope.reverse;
        }
        else {
            $scope.orderField = field;
            $scope.reverse = false;
        }

    };

    $scope.deleteAlbum = function (id,index) {
        var requestParam = {
            id:id
        };
        requestsService.deleteAlbum(requestParam,
            function () {
                $scope.albums.splice(index,1);
            },
            function (error) {
                console.log(error);
            });

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

    $scope.addNewAlbum = function () {
        var requestParam = {
            title: $scope.new.title,
            artist: $scope.new.artist,
            logoUrl:$scope.new.logoUrl,
            country: $scope.new.country,
            company: $scope.new.company,
            price: ""+$scope.new.price,
            year: $scope.new.year.getFullYear()
        };
        requestsService.addNew(requestParam,
        function () {
            $scope.getAllAlbums();
            $scope.new = {};
            $scope.dismiss();
        },
        function (error) {
            console.log(error);
        });
    };

}
angular.module('main').controller('albumsController', albumsController);
albumsController.$inject = ['$scope','requestsService'];
function albumsController($scope,requestsService) {

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
}
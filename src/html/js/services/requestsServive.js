'use strict';

angular.module('main').factory('requestsService', requestsService);

requestsService.$inject = ['$http','instance'];

function requestsService($http,instance) {
    function getAll(successCallback,errorCallback) {
        $http({
            method: 'GET',
            url: instance.url +'/albums/all',
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (result) {
            successCallback(result)
        }).error(function (error) {
           errorCallback(error)
        });
    }

    function deleteAlbum(requestParams,successCallback,errorCallback) {
        $http({
            method: 'DELETE',
            url: instance.url +'/albums/delete/'+requestParams.id,
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (result) {
            successCallback(result)
        }).error(function (error) {
            errorCallback(error)
        });
    }

    function update(requestParams,successCallback,errorCallback) {
        $http({
            method: 'POST',
            url: instance.url +'/albums/update/'+requestParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data:requestParams.param
        }).success(function (result) {
            successCallback(result)
        }).error(function (error) {
            errorCallback(error)
        });
    }

    function addNew(requestParams,successCallback,errorCallback) {
        $http({
            method: 'POST',
            url: instance.url +'/albums/add',
            headers: {
                'Content-Type': 'application/json'
            },
            data:requestParams
        }).success(function (result) {
            successCallback(result)
        }).error(function (error) {
            errorCallback(error)
        });
    }

    return {
        getAll:getAll,
        deleteAlbum:deleteAlbum,
        update:update,
        addNew:addNew
    };

}
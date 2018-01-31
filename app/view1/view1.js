'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

    $scope.creds = {
        bucket: '',
        access_key: '',
        secret_key: '',
        s3Url: '',
        region: ''
    };

    // Configure The S3 Object
    AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
    AWS.config.region = $scope.creds.region;
    var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
    $scope.s3Url = $scope.creds.s3Url;
    // var bucket = new AWS.S3({params: {Bucket: 'myBucket'}});

    bucket.listObjects(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            $scope.allImageData = data.Contents;
        }
    });
}]);
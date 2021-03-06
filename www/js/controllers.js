angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope) {

    $scope.fbLogin = function() {
        alert("facebook login");
    }

    $scope.deviceInfo = function() {
        alert('device info');
        console.log(device);
    }

    $scope.getGeoLocation = function() {
        alert('get geolocation');

        navigator.geolocation.getCurrentPosition(function(position) {
            alert('post: ' + position.coords.latitude + ', long: ' + position.coords.longitude + ', accuracy: ' + position.coords.accuracy + ', time: ' + position.timestamp);
        }, function(error) {
            alert('code: ' + error.code + '\n message: ' + error.message);
        });
    }
})

.controller('PickImageSourceCtrl', function($scope) {



    $scope.useCamera = function() {
        alert('useCamera');

        var cameraOptions = { quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false };

        navigator.camera.getPicture(function(data) {
            alert(data)
        }, function(err) {
            alert(err);
        }, cameraOptions );
    };

    $scope.useFolder = function() {
        alert('useFolder');
    };

})

.controller('SelectCategoryCtrl', function($scope) {

})

.controller('NewReportPreviewCtrl', function($scope) {

})

.controller('ReportsListCtrl', function($scope) {

})

.controller('ReportReviewCtrl', function($scope) {

})

.controller('ReportSendCtrl', function($scope) {

});

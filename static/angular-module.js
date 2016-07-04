var app = angular.module('Flickr', []);

app.controller('FlickrController', ['$scope', '$http', function ($scope, $http) {
  	$scope.getPhotos = function (){
  		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e06443c1e6342ce6b0c4f2d0247af627&extras=owner_name%2C+date_upload%2C+tags%2C+url_sq&per_page=500&page=4&format=json&nojsoncallback=1&auth_token=72157670609489975-464a212a57b686f2&api_sig=226442775acaa67e8759e8551062fb53";
	  	$http.get(url)
	    .then(function(response) {
	    	$scope.photodata = response.data.photos.photo;
	    	console.log($scope.photodata);
	    });
  	} 
  	$scope.getPhotos();	
}]);
var app = angular.module('Flickr', []);

app.controller('FlickrController', ['$scope', '$http', function ($scope, $http) {
  	$scope.getPhotos = function (){
  		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e06443c1e6342ce6b0c4f2d0247af627&extras=owner_name%2C+date_upload%2C+tags%2C+url_sq%2C+date_taken&per_page=500&page=4&format=json&nojsoncallback=1&auth_token=72157670609489975-464a212a57b686f2&api_sig=79033250ebb7bef62a075d0eb3b0a585";
	  	$http.get(url)
	    .then(function(response) {
	    	$scope.photodata = response.data.photos.photo;
	    	var tags_set = [];
	    	for (var i = 0; i<10; i++)
	    	{
	    		var tags = $scope.photodata[i].tags;
		    	console.log(tags);
		    	tags_set.push($scope.selectTags(tags));
	    	}
	    	console.log(tags_set);
	    });
  	} 
  	$scope.getPhotos();	

  	$scope.selectTags = function(data) {
  		var data = data;
  		var tags = data.split(/\b\s+(?!$)/);
	   	return tags;

  	}


}]);
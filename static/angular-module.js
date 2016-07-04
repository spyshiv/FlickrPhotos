var app = angular.module('Flickr', []);

app.controller('FlickrController', ['$scope', '$http', function ($scope, $http) {
  	$scope.getPhotos = function (){
  		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e06443c1e6342ce6b0c4f2d0247af627&extras=owner_name%2C+date_upload%2C+tags%2C+url_sq%2C+date_taken&per_page=500&page=4&format=json&nojsoncallback=1&auth_token=72157670609489975-464a212a57b686f2&api_sig=79033250ebb7bef62a075d0eb3b0a585";
	  	$http.get(url)
	    .then(function(response) {
	    	$scope.photodata = response.data.photos.photo;
	    	var tags_set = [];
	    	for (i=0; i<500 ; i++) {
	    		tags_set = tags_set + " " + $scope.photodata[i].tags;
	    		// tags_set.push($scope.selectTags($scope.photodata[i].tags));
	    	}
	    	
	    	var uniqueList=tags_set.split(' ').filter(function(item,i,allItems){
			    return i==allItems.indexOf(item);
			}).join(' ');
	    	var haha = $scope.selectTags(uniqueList);
	    	$scope.finaltags = haha;
	    });
  	} 
  	$scope.getPhotos();	

  	$scope.selectTags = function(data) {
  		var data = data;
  		var tags = data.split(/\b\s+(?!$)/);
	   	return tags;
  	}

  	$scope.filterImages = function(tag) {
  		$(".img-container").show();
		    // select all the images
		    var query = document.querySelectorAll('.img-container');
		    for (var i = 0; i < query.length; i++) {
		        var image = query[i];

		        // hide the image if it doesn't contain the tag we're looking for
		        if (image.getAttribute('data-tags').split(' ').indexOf(tag) === -1)
		            $scope.hideImage(image);
		    }
  	}

  	$scope.hideImage = function(image) {
	    // do whatever you need to "filter" out the image
	    image.style.display = 'none';
	}


}]);
var app = angular.module('Flickr', ['lazy-scroll']);

app.controller('FlickrController' , ['$scope', '$http', function ($scope, $http) {
  	// $scope.getPhotos = function (){
  	// 	var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=2239153265e72bab5b40b2cdc24f2b01&extras=owner_name%2C+date_upload%2C+tags%2C+url_sq%2C+date_taken&format=json&nojsoncallback=1&auth_token=72157670017841741-f4ad78652c2724d7&api_sig=4459e038259f54413da0a8db96dc71d6";
	  // 	$http.get(url)
	  //   .then(function(response) {
	  //   	$scope.photodata = response.data.photos.photo;
	  //   	var tags_set = $scope.photodata[0].tags;
	  //   	for (i=1; i<500 ; i++) {
	  //   		tags_set = tags_set + " " + $scope.photodata[i].tags;
	  //   	}
	    	
	  //   	var uniqueList = tags_set.split(' ').filter(function(item,i,allItems){
			//     return i==allItems.indexOf(item);
			// }).join(' ');

	  //   	$scope.finaltags = $scope.selectTags(uniqueList);
	  //   });
  	// } 
  	// $scope.getPhotos();	

  	$scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

	  $scope.loadMore = function() {
	    var last = $scope.images[$scope.images.length - 1];
	    for(var i = 1; i <= 50; i++) {
	      $scope.images.push(last + i);
	    }
	  };

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
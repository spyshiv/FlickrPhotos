app.controller('FlickrController',
	[
		'$scope', 'flickrRecent', '$location', '$route', '$routeParams',
function ($scope, flickrRecent, $location, $route, $routeParams) {

	$scope = $.extend($scope, {}, {
		recentSearches: null,
		init: function () {
			$scope.setupWatchers();
			$scope.$on('$routeChangeSuccess', this.onRouteChange);
		},

		setupWatchers: function () {
			$scope.watchFlickrData();
			$scope.watchTags();

		},

		watchFlickrData: function () {
			$scope.$watch(function () {
				return flickrRecent.photos;
			}, function (data) {
				$scope.photos = data;
			}, true);
		},

		watchTags : function () {
			$scope.$watch(function () {
				return flickrRecent.tags;
			}, function (data) {
				$scope.tags = data;
				console.log($scope.tags);
			}, true);
		},

		updatePath: function (path) {
			$location.path(path);
		},
		getRecent: function () {
			$scope.query = $scope.searchQuery = '';
			$scope.queryType = 'recent';
			flickrRecent.getRecent();
		},
		getMore: function () {
			flickrRecent.getMore();
		},
		onRouteChange: function () {
			var action = $route.current.action;
			switch (action) {
				case 'recent':
					$scope.getRecent();
					break;
			}
		},

		filterImages: function(tag) {
	  		$(".img-container").show();
			    // select all the images
			    var query = document.querySelectorAll('.img-container');
			    for (var i = 0; i < query.length; i++) {
			        var image = query[i];

			        // hide the image if it doesn't contain the tag we're looking for
			        if (image.getAttribute('data-tags').split(' ').indexOf(tag) === -1)
			            $scope.hideImage(image);
			    }
	  	},

  		hideImage: function(image) {
	    // do whatever you need to "filter" out the image
		    image.style.display = 'none';
		}

	});

	$scope.init();

	window.scope = $scope;
}]);

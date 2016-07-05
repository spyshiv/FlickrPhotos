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
		},
		watchFlickrData: function () {
			$scope.$watch(function () {
				return flickrRecent.photos;
			}, function (data) {
				$scope.photos = data;
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
		}

	});

	$scope.init();

	window.scope = $scope;
}]);

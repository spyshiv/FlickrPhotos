var app = angular.module('Flickr', ['infinite-scroll']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			action: 'recent'
		})
		.when('/recent', {
			action: 'recent'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);


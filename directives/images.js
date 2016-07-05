var app;

app.directive('images', [function () {
	return {
		restrict: 'E',
		templateUrl: 'partials/images.tpl.html',
		replace: true,
		link: function (scope, element, attributes) {

		}
	}
}]);

app.directive('tags', [function () {
	return {
		restrict: 'E',
		templateUrl: 'partials/tags.tpl.html',
		replace: true,
		link: function (scope, element, attributes) {

		}
	}
}]);

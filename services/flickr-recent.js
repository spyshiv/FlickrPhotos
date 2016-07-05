app.factory('flickrRecent', ['$http', function ($http) {

	var url = 'https://api.flickr.com/services/rest/',
		methods = {
			'recent': 'flickr.photos.getRecent',
		},
		apiKey = '2239153265e72bab5b40b2cdc24f2b01',
		jsonCallback = 'JSON_CALLBACK',
		extras = ["owner_name", "date_upload", "tags", "url_q", "date_taken"],
		append = false,
		currentCall = '',
		totalPages,
		currentPage;

	function getRecentURL() {
		return currentCall = url + '?method=' + methods.recent +
			'&extras=' + extras.join(',') +
			'&api_key=' + apiKey +
			'&format=json' +
			'&jsoncallback=' + jsonCallback
	}

	svc = {
		photos: [],
		dataLoading: false,
		getRecent: function () {
			append = false;
			svc.makeApiCall(getRecentURL());
		},
		
		getMore: function () {
			append = true;
			currentPage++;
			svc.makeApiCall(currentCall + '&page=' + currentPage);
		},
		
		makeApiCall: function (apiCall) {
			if (svc.dataLoading) return;
			svc.dataLoading = true;
			$http.jsonp(apiCall)
				.success(svc.onLoadSuccess)
				.error(function () {
					console.log('error', arguments);
					svc.dataLoading = false;
				});
		},
		onLoadSuccess: function (data) {
			currentPage = data.photos.page;
			totalPages = data.photos.pages;
			svc.photos = (append) ? svc.photos.concat(data.photos.photo) : data.photos.photo;
			svc.dataLoading = false;
		}
	};
	return svc;
}]);
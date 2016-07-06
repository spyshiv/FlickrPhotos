app.factory('flickrRecent', ['$http', function ($http) {

	var url = 'https://api.flickr.com/services/rest/',
		methods = {
			'recent': 'flickr.photos.getRecent',
		},
		apiKey = '389e360c918cdb9b05cc63694f74682c',
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
		tags : [],
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
			$(".loading").show();
			$http.jsonp(apiCall)
				.success(svc.onLoadSuccess)
				.error(function () {
					console.log('error', arguments);
					svc.dataLoading = false;
				});
		},
		onLoadSuccess: function (data) {
			$(".loading").hide();
			currentPage = data.photos.page;
			totalPages = data.photos.pages;
			svc.photos = (append) ? svc.photos.concat(data.photos.photo) : data.photos.photo;
			svc.dataLoading = false;

			var tags_set = svc.photos[0].tags;
	    	for (i=1; i<svc.photos.length ; i++) {
	    		tags_set = tags_set + " " + svc.photos[i].tags;
	    	}
	    	
	    	var uniqueList = tags_set.split(' ').filter(function(item,i,allItems){
			    return i==allItems.indexOf(item);
			}).join(' ');

	    	function selectTags (data) {
			  	var tags = data.split(/\b\s+(?!$)/);
				return tags;
	    	}
	    	svc.tags = selectTags(uniqueList);
		}
	};
	return svc;
}]);

app.factory('dataService', ['$http', function($http){
	return {
		getCards: function(){
			return $http.get('cards.json').success(function(data){
				return data;
			}).error(function(data, status) {
				console.error('Error retriving data: ', status, data);
			});
		}
	}
}])
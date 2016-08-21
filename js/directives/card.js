app.directive('cardOne',  function (){
	return {
		restrict: 'E',
		scope: {
			info: '='
		},	
		templateUrl: 'js/directives/card.html',
		link: function(scope, element, attrs){
		}
	}
})
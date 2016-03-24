(function(angular) {
    'use strict';

    angular
        .module('myapp')
        .directive('priceFormat', priceFormat);

    function priceFormat() {
        return {
            require: '?ngModel',
            scope: {
            	limit: '=',
            	centsLimit: '=',
                idElement: '='
            },
            link: function(scope, element, attrs, ngModel) {
            
            	function applyFormat(){
	            	$("." + scope.idElement).priceFormat({
                  prefix: '',
                  centsSeparator: ',',
                  thousandsSeparator: '',
                  limit: scope.limit,
                  centsLimit: scope.centsLimit
	            	});
	            	
                $("#" + scope.idElement).priceFormat({
                    prefix: '',
                    centsSeparator: ',',
                    thousandsSeparator: '',
                    limit: scope.limit,
                    centsLimit: scope.centsLimit
                });
	            	
  	        	  $('#' + scope.idElement).blur(function(){
                  if($("#" + scope.idElement).val() == "0.00"){
                      $("#" + scope.idElement).val("");
                  }
  	        		});
            	}
            	
	            scope.$watch(function() {
	                return ngModel.$viewValue;
	            }, function(value) {
	            	applyFormat();
	            });
            }
        }
	}
})(angular);

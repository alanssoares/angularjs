(function(angular) {
    'use strict';

    angular
        .module('myapp')
        .directive('datePicker', datePicker);
        
            /**
     * Diretiva responsável por criar um componente datepicker no
     * formato brasileiro com configurações pré-definidas
     * @param limitToday para ser usado quando houver necessidade de limitar a data atual.
     */
    function datePicker() {
        return {
            restrict: 'A',
            require: '?ngModel',
            scope: {
                limitToday: '@'
            },
            link: function(scope, element, attrs, ngModelCtrl, $render) {

                var options = {
                    todayBtn: "linked",
                    language: "pt-BR",
                    autoclose: true,
                    showButtonPanel: true
                };

                if (typeof scope.limitToday != 'undefined' &&
                    scope.limitToday === 'true') {
                    options.endDate = new Date();
                    options.todayHighlight = true;
                }

                if (attrs.datePicker === "yyyy") {
                    options.format = "yyyy";
                    options.viewMode = "years";
                    options.minViewMode = "years";
                } else if (attrs.datePicker === "mm/yyyy") {
                    options.format = "mm/yyyy";
                    options.viewMode = "months";
                    options.minViewMode = "months";
                } else {
                    options.format = "dd/mm/yyyy";
                }

                $(element).datepicker(options);

                if (typeof ngModelCtrl != 'undefined') {
                    ngModelCtrl.$render = function() {
                        element.datepicker('setDate', ngModelCtrl.$viewValue || '');
                    };
                }
            }
        }
    }
})(angular);

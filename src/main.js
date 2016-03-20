// MAIN.JS - Webpack main entry file
module.exports = (function(){
    require('ionic/ionic/css/ionic.css');
    
    require('ionic/ionic/js/ionic');
    // require('ionic/ionic/js/angular');
    // require('ionic/ionic/js/angular-ui');
    require('angular/angular');
    require('angular-animate/angular-animate');
    require('angular-sanitize/angular-sanitize');
    require('angular-ui-router');
    require('ionic/ionic/js/ionic-angular');

    var angular = window.angular;

    angular.module('demo-app', ['ionic'])
    .controller('TaskViewCtrl', ['$scope', function($scope){
        return {
            refresh : function(){
                console.log('refresh requested..');
            },

            handleSwipeGesture : function(ev, index) {
                console.log('handleSwipeGesture: ' + ev + ', ', index);
            },
            
            toggleDescShort : function(idx) {
                if(idx) isDescShortMap[idx] = isDescShortMap[idx] !== true;
            }
        };
    }]);
    
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['demo-app']);
    });

})();

(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/my-info/myinfo.html',
      controller: 'myInfoController',
      controllerAs: 'ctrl'
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/signup-form/signupform.html',
      controller: 'signupController',
      controllerAs: 'ctrl'
      ,resolve: {
        menuItems: ['MenuService', function(MenuService){
          return MenuService.getMenuItems('').then(
            function(result)
            {
                var array = new Array();
                for(var i=0; i<result.menu_items.length;i++){
                    array.push(result.menu_items[i].short_name);
                }
                console.log(array);
                return array;
            }
          ); // end then
        }]
      }// end resolve
    }); // end state
}; // end route config
})();

(function () {
    var shoppingListApp = angular.module('shoppingListApp',[]);
    shoppingListApp.controller('shoppingListController',shoppingListController);
    
    shoppingListController.$inject = ['$scope'];
    
    shoppingListApp.filter('hideBoughtItems',function(){
        
    });
    
    function shoppingListController($scope){
        $scope.toBuy=[
             cookies={
                name:'cookies',quantity:0,bought:false
            },
            water={
                name:'water',quantity:0,bought:false
            },
            bananas={
                name:'bananas',quantity:0,bought:false
            },
            milk={
                name:'milk',quantity:0,bought:false
            },
            coconut={
                name:'coconut',quantity:0,bought:false
            }
        ];  // end array     
        
        $scope.boughtList=[];
        $scope.btnOnClick = function addAndDropItems(itemName){
            var index;
            if(itemName === 'cookies'){
                index=0;
            }
            else if(itemName === 'water'){
                index=1;
            }
            else if(itemName ==='bananas'){
                index=2;
            }
            else if(itemName===''){
                index=3;
            }
            else if (itemName===''){
                index=4;
            }
            $scope.toBuy[index].quantity +=10;
            $scope.toBuy[index].bought = true;
            console.log($scope.toBuy[index].quantity);
            $scope.boughtList.push($scope.toBuy[index]);
    }; // end function
        
    }; // end controller
    
    
    
}());



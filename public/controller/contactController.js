var myApp=angular.module('contact',[]);
myApp.controller('contactController',function($scope,$http,$location,libraryService){
  $scope.cont={};

  $scope.contactUs=function(){
libraryService.contactService($scope.cont).success(function(data,status){
	alert(status);
}).error(function(err){
	alert('err'+err);
})
  }
})

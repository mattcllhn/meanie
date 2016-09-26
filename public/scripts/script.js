var myApp=angular.module( 'myApp', [] );
myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){
  $scope.addRecord = function(){
    event.preventDefault();
    var objectToSend ={
      name: $scope.nameIn,
      location: $scope.locationIn,
    };//objectToSend
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    }).then(function(response){
    $scope.nameIn ='';
    $scope.locationIn='';
    console.log('hello from success function');

  });//then function
  };//addRecord function
  $scope.getRecords = function(){
    $http({
      method: 'GET',
      url: '/getRecords',
    }).then( function( response ){
      $scope.allTheRecords = response;
      console.log( $scope.allTheRecords );
      function myError( response ){
      console.log( response.statusText );
    }//error function
    });//response error
    };
}]);//controller

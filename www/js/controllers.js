angular.module('M.O.B.controllers', ['ngSanitize'])

.controller('AppCtrl', function($scope) {
  // Form data for the login modal
      // $scope.loginData = {};

      // // Create the login modal that we will use later
      // $ionicModal.fromTemplateUrl('templates/login.html', {
      //   scope: $scope
      // }).then(function(modal) {
      //   $scope.modal = modal;
      // });

      // // Triggered in the login modal to close it
      // $scope.closeLogin = function() {
      //   $scope.modal.hide();
      // };

      // // Open the login modal
      // $scope.login = function() {
      //   $scope.modal.show();
      // };

      // // Perform the login action when the user submits the login form
      // $scope.doLogin = function() {
      //   console.log('Doing login', $scope.loginData);

      //   // Simulate a login delay. Remove this and replace with your login
      //   // code if using a login system
      //   $timeout(function() {
      //     $scope.closeLogin();
      //   }, 1000);
      // };
})


.controller('PostsCtrl', function($scope, $rootScope, $http) {

  $rootScope.posts = [];

  var myurl = "http://www.mobsdachurch.com/wp-json/wp/v2/pages?search=home";

  $http.get(myurl)
    .success(function(response) {
      angular.forEach(response, function(child){
        $rootScope.posts.push(child);
      })
    });
  
  
})

.controller('PostCtrl', function($scope, $rootScope, $stateParams) {

  var id = $stateParams.postId;
  $scope.excerpt = "";
  $scope.content = "";

  for (var i = 0; i < $rootScope.posts.length; i++) {
    $scope.content = $rootScope.posts[i].content.rendered;
    $scope.excerpt = $rootScope.posts[i].excerpt.rendered;
    // $scope.title = $rootScope.posts[i].title.rendered;
  }
  
})

.controller('EldersCtrl', function($scope, $rootScope, $http) {
   $rootScope.postelders = [];

  var murl = "http://www.mobsdachurch.com/wp-json/wp/v2/posts?filter[category_name]=Leaders on Duty";

  $http.get(murl)
    .success(function(response) {
      angular.forEach(response, function(child){
        // console.log(child);
        $rootScope.postelders.push(child);
      })
    });
  
  
})

.controller('ElderCtrl', function($scope, $rootScope, $stateParams) {

  var id = $stateParams.postelderId;
  $scope.elderexcerpts = "";
  $scope.eldercontents = "";

  for (var i = 0; i < $rootScope.postelders.length; i++) {
    $scope.eldercontents = $rootScope.postelders[i].content.rendered;
    $scope.elderexcerpts = $rootScope.postelders[i].excerpt.rendered;
    // $scope.title = $rootScope.posts[i].title.rendered;
  }
  
})




.controller('NotificationsCtrl', function($scope) {
  // alert('hey');
  
  
})

.controller('HomeCtrl', function($scope) {
  // alert('hey');
  
  
})

.controller('ContactusCtrl', function($scope) {
  //   $scope.CallNumber = function(){ 
  //   var number = '18002005555' ; 
  //   window.plugins.CallNumber.callNumber(function(){
  //    //success logic goes here
  //   }, function(){
  //    //error logic goes here
  //   }, number) 
  // };


  $scope.CallNumber = function(){ 
  var number = '18002005555' ; 
  window.plugins.CallNumber.callNumber(onSuccess, onError, number).onSuccess(function(){ 
    alert("Success"); 
}).onError(function(){ alert("Error"); 
}); 
};
  

})

.controller('SabbathschoolCtrl', function($scope) {
  // alert('happy Sabbath');
  

})

.controller('MinistriesCtrl', function($scope) {
  // alert('happy Sabbath');
  

})

.controller('GalleryCtrl', function($scope) {
  // alert('happy Sabbath');
  

})


.controller('VideolibCtrl', function($scope, $http){
    $scope.playerVars = {
      rel: 0,
      showinfo: 0,
      modestbranding: 0,
      }

    $scope.videos = [];

    $scope.youtubeParams = {
      key: 'AIzaSyDcPGjaLoXzh4_E1HWsAr8XRhGNTEGZQHo',
      type: 'video',
      maxResults: '5',
      part: 'id,snippet',
      q: 'mobsdachurch',
      order: 'ViewCount',
      channelId: 'UC5WHiA8Lcm6l2byl-Ah3RRw',
    }

    $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
      angular.forEach(response.items, function(child){
        console.log (child);

        $scope.videos.push(child);
      });
    });

  })


.controller('AboutusCtrl', function($scope) {
  // alert('hey');
  
  
});



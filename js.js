var app = angular.module('movieList',[])

app.controller('reviewsController',function(){
  this.movies=movieRatings;

  this.submit = function(data){
    alert("hello")
  }
});

app.directive('starRatings', function(){
  return{
    restrict: 'E',
    //having issues linkning the page directly peopel say you can serve it to a server but directly to a html file causes issues idk
    //spent a while trying to solve this because I cant get my laptop to work and the computer doesnt let you install things (need admin)
    //got it to work using python "python -m SimpleHTTPServer 8000"
    templateUrl: 'star-rating.html'
  }
});






var movieRatings = [
  {name: "The Lobster", stars:[5]}
]

/* OLD CODE
(function(){
var app = angular.module('store',[]);

app.controller('ReviewController',function(){
  this.reviews = movies;

  this.addReview = function ($scope) {
    $scope.ratings(this.reviews)
    $scope.reviews = {};
  }
});


var movies = [
    { name: 'The Lobster',
    rating: [
      {
        stars: 5,
        body: "haha words",
        author: "kruddy3"
      }
    ] },
    { name: 'American Psycho',
      rating: [
      {
        stars: 5,
        body: "haha words",
        author: "kruddy3"
      },
      {
        stars: 1,
        body: "jhjbjbjb",
        author: "Kito"
      }
    ] },
    { name: 'The Prestige', rating: [
      {
        stars: 4,
        body: "haha words",
        author: "kruddy3"
      }
    ]  },
  ];
  app.controller('submitReview',function ($scope) {
    $scope.movieRatings = []
    $scope.UserName = 'UserName'

    $scope.submit = function(){
      $scope.ratings.push($scope);
      $scope.UserName = '';
    }
  });



~~~~~~V2
app.controller('submitReview',function ($scope) {
  $scope.movieRatings = []
  $scope.UserName = 'UserName'

  $scope.submit = function(){
    $scope.ratings.push($scope);
    $scope.UserName = '';
  }
});
})();
*/

var app = angular.module('movieList',[])

app.controller('reviewsController',function(){
  this.movies=movieRatings;
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

app.filter('average',function(){
  return function(number){
    var avger=0;
    for (var i = 0; i < number.length; i++) {
      avger = avger + Number(number[i])
    }
    avger = avger/number.length
    return avger.toFixed(1);

  }
})

// app.controller('average',function($scope) {
//   $scope.avgStars = $scope.movieName.stars.length;
// });

var movieRatings = [
  {name: "The Lobster", stars:["5","4"]},
  {name: "The Prestige", stars:["4"]},
  {name: "American Psycho", stars:["4"]}
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

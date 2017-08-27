var app = angular.module('movieList',[])

app.controller('reviewsController',function(){
  this.movies=movieRatings;

  this.submit = function(data){
    alert("hello")
  }
});

app.controller('submitReview',function ($scope) {
  $scope.movieRatings = []
  $scope.UserName = 'UserName'

  $scope.submit = function(){
    $scope.ratings.push($scope);
    $scope.UserName = '';
  }
});



var movieRatings = [
  {name: "The Lobster", ratings:[{user:"user", stars: 5}]},
  {name: "The Prestige", ratings:[{user:"Kevin", stars: 4}]}]

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

})();
*/

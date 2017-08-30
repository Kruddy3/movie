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

    link: function(scope, element, attrs) {
        scope.addStar = function(rating){
          //attrs is is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values
        if (1<=rating && rating<=5) {
          scope.movieName.stars.push(rating);
        }
        else {
          alert("please select a value")
        }
        scope.rating = "0";
      }
    },

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

var movieRatings = [
  {name: "The Lobster", stars:["5","4"]},
  {name: "The Prestige", stars:["4"]},
  {name: "American Psycho", stars:["4"]}
]

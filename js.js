var app = angular.module('movieList',[])

app.controller('reviewsController',function($scope){
  $scope.movies=movieRatings;
  $scope.starImgFull = 'star.png'
  $scope.starImgEmpty = 'starEmpty.png'
  $scope.starImg1 = 'starEmpty.png'
  $scope.starImg2 = 'starEmpty.png'
  $scope.starImg3 = 'starEmpty.png'
  $scope.starImg4 = 'starEmpty.png'
  $scope.starImg5 = 'starEmpty.png'
});

app.directive('starRatings', function(){
  return{
    restrict: 'E',
    link: function(scope, element, attrs) {
        scope.changeStars = function(rating){
          if (rating == 1 || rating == "1") {
            scope.starImg1=scope.starImgFull;
            scope.starImg2=scope.starImgEmpty;
            scope.starImg3=scope.starImgEmpty;
            scope.starImg4=scope.starImgEmpty;
            scope.starImg5=scope.starImgEmpty;
          }
          else if (rating == 2 || rating == "2") {
            scope.starImg1=scope.starImgFull;
            scope.starImg2=scope.starImgFull;
            scope.starImg3=scope.starImgEmpty;
            scope.starImg4=scope.starImgEmpty;
            scope.starImg5=scope.starImgEmpty;
          }
          else if (rating == 3 || rating == "3") {
            scope.starImg1=scope.starImgFull;
            scope.starImg2=scope.starImgFull;
            scope.starImg3=scope.starImgFull;
            scope.starImg4=scope.starImgEmpty;
            scope.starImg5=scope.starImgEmpty;
          }
          else if (rating == 4 || rating == "4") {
            scope.starImg1=scope.starImgFull;
            scope.starImg2=scope.starImgFull;
            scope.starImg3=scope.starImgFull;
            scope.starImg4=scope.starImgFull;
            scope.starImg5=scope.starImgEmpty;
          }
          else if (rating == 5 || rating == "5") {
            scope.starImg1=scope.starImgFull;
            scope.starImg2=scope.starImgFull;
            scope.starImg3=scope.starImgFull;
            scope.starImg4=scope.starImgFull;
            scope.starImg5=scope.starImgFull;
          }
          else {
            scope.starImg1=scope.starImgEmpty;
            scope.starImg2=scope.starImgEmpty;
            scope.starImg3=scope.starImgEmpty;
            scope.starImg4=scope.starImgEmpty;
            scope.starImg5=scope.starImgEmpty;
          }
        }
        scope.addStar = function(rating){
        if (1<=rating && rating<=5) {
          scope.movieName.stars.push(rating);
          scope.changeStars(0)
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


app.directive('starUpdater',function(){
  return{
    restrict: 'A',

    link: function(scope, element, attrs) {

    },
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

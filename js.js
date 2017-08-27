(function(){
var app = angular.module('store',[]);

app.controller('ReviewController',function(){
  this.reviews = movies;

  this.addReview = function (product) {
    product.reviews.push(this.review)
    this.review = {};
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

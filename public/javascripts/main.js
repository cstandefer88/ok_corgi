$(document).ready(function() {



var loadCorgis = function(){
    // request JSON and process it
    $.ajax({
      url: '/corgis/random',
      method: 'GET',
      data: {},
      dataType: "json"
    }).done(function(data){
      displayRandom(data);
      console.log(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      console.log("Reqest Failed: ", textStatus);
    })
    .always(function(){
      console.log("Request completed");
    })
  }

  var displayRandom = function(corgi){
    if (!corgi){
      console.log("no corgi to output");
    }

    $('#corgis').empty();


      $('#corgis').append(`<div class="corgi"><img src="${corgi.image_url}"><h3>Name: ${corgi.name}</h3><p> Age: ${corgi.age} </p> <p> Interests: ${corgi.interests} </p> <button type="button" class="btn btn-primary btn-like" data-corgi-id="${corgi._id}">Like</button> <button type="button" class="btn btn-danger btn-dislike" data-corgi-id="${corgi._id}">Dislike</button> </div>`)
    }


  // var displayLikesOnlySection = function() {
  //   $.ajax({
  //     url:
  //     method:
  //     data:
  //     dataType:"json"
  //   })
  // }


    $('.btn-create').click(function(){
    var name = $('#name').val();
    var image = $('#image').val();
    var interests = $('#interests').val();
    var age = $('#age').val();


    $.ajax({
      method: 'POST',
      url: '/corgis',
      data:{
        name: name,
        image: image,
        interests: interests,
        age: age
      }
    })
    .done(function(data){
      console.log('created:', data)
      $('#myModal').modal('hide');

      // $('#corgis').html(`<div class="corgi"><img src="${data.image_url}"><h3>Name: ${data.name}</h3><p> Age: ${data.age} </p> <p> Interests: ${data.interests} </p> </div>`)
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      console.log('request failed'+ textStatus)
    })
    .always(function(){
      console.log('created complete')
    })
  })


///////// LIKE ////////////

var likeCorgi = function(likeCorgiId){
    $.ajax({
      method: 'PATCH',
      url: '/corgis/' + likeCorgiId + '/like',
      data: {}
    })
    .done(function(data){
      console.log('liked', data.liked)
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      console.log('like failed'+ textStatus)
    })
    .always(function(){
      console.log('like completed')
    })
  }

  $('#corgis').on('click', '.btn-like', function(){


    console.log('button is working')
      var likeCorgiId = $(this).data('corgi-id');


      likeCorgi(likeCorgiId);
      loadCorgis();


  })


///////// DISLIKE ////////////

var dislikeCorgi = function(dislikeCorgiId){
    $.ajax({
      method: 'PATCH',
      url: '/corgis/' + dislikeCorgiId + '/dislike',
      data: {}
    })
    .done(function(data){
      console.log('disliked', data)

    })
    .fail(function(jqXHR, textStatus, errorThrown){
      console.log('dislike failed'+ textStatus)
    })
    .always(function(){
      console.log('dislike completed')
    })
  }

  $('#corgis').on('click', '.btn-dislike', function(){

    console.log('button is working')
      var dislikeCorgiId = $(this).data('corgi-id');


      dislikeCorgi(dislikeCorgiId);
      loadCorgis();

  })





loadCorgis();




});

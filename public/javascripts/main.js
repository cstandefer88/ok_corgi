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


      $('#corgis').append(`<div class="corgi"><img src="${corgi.image_url}"><h3>Name: ${corgi.name}</h3><p> Age: ${corgi.age} </p> <p> Interests: ${corgi.interests} </p> <button type="button" class="btn btn-primary btn-like">Like</button> <button type="button" class="btn btn-danger btn-dislike">Dislike</button> </div>`)
    }


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







loadCorgis();




});

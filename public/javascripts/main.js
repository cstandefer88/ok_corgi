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


      $('#corgis').append(`<div class="corgi"><img src="${corgi.image_url}"><h3>Name: ${corgi.name}</h3><p> Age: ${corgi.age} </p> <p> Interests: ${corgi.interests} </p> </div>`)
    }


    $('.btn-create').click(function(){
    var artist = $('#artist').val();
    var venue = $('#venue').val();
    var date = $('#date').val();

    $.ajax({
      method: 'POST',
      url: '/api/v1/concerts/',
      data:{
        artist: artist,
        venue: venue,
        date: date
      }
    })
    .done(function(data){
      console.log('created:', data)
      $('#myModal').modal('hide');

      $('#concerts').append(`<div class="concert"><h3>${data.artist}</h3><p>${data.venue}</p><p>${data.date}</p><button type="button" class="btn btn-danger" data-concert-id="${data._id}">Delete Show</button></div>`)
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

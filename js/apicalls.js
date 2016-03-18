var apiKey = require('./../.env').apiKey;

  exports.findUser = function(userName){
    var query = 'https://api.github.com/users/' + userName + '?access_token=' + apiKey;
    $.get(query).then(function(response){
      console.log(response);
      var name = response.login;
      var url = response.html_url;
      $('#top-text').html('<h3>Github user <a href=\"' + url +'\" target=\"_blank\">' + name + '</a></h3>');
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

  exports.findRepos = function(userName){
    var query = 'https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey;
    $.get(query).then(function(response){
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        var link = response[i].clone_url;
        var title = (response[i].full_name).slice(response[i].owner.login.length + 1);
        if (response[i].description != "") {
            var description = response[i].description;
          } else {
            var description = "no description";
          }
        $('#results').append('<div class=\"user-project\"><h4><a href=\"' +link + '\" target=\"_blank\">' + title + '</a></h4>' + '<p>' + description + '</p></div><hr>');
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

      // for (var i = 0; i < response.response.artists.length; i++) {
      //       if (response.response.artists[i].hasOwnProperty("foreign_ids")) {
      //           var id = response.response.artists[i].foreign_ids[0].foreign_id;
      //         } else {
      //           var id = "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
      //         }
      //   function findArtist() {
      //     $.get('https://api.spotify.com/v1/search?q=' + artistName + '&type=artist').then(function(response) {
      //       console.log(response);
      //       var artist = response.artists.items[0];
      //       var url = artist.external_urls.spotify;
      //       $('#top-text').html('<h2>Artists similar to <a href=\"' + url +'\" target=\"_blank\">' +artist.name +'</a></h2>' )
      //       var spotifyId = artist.id;
      //       findSimilarArtists(spotifyId);
      //     });
      //   }
      //
      //   function findSimilarArtists(spotifyId) {
      //     var similarIds = [];
      //     $.get('http://developer.echonest.com/api/v4/artist/similar?api_key=' + echoNestKey +  '&id=spotify:artist:' + spotifyId + '&bucket=id:spotify').then(function(response) {
      //       console.log(response);
      //       for (var i = 0; i < response.response.artists.length; i++) {
      //       if (response.response.artists[i].hasOwnProperty("foreign_ids")) {
      //           var id = response.response.artists[i].foreign_ids[0].foreign_id;
      //         } else {
      //           var id = "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
      //         }
      //         var idSlice = id.slice(15);
      //         similarIds.push(idSlice);
      //         idString = similarIds.join(',');
      //       }
      //       getSimilarArtistImgs(idString);
      //       console.log(idString);
      //     });
      //   }
      //
      //   function getSimilarArtistImgs(idString) {
      //     $.get('https://api.spotify.com/v1/artists/?ids=' + idString).then(function(response) {
      //       console.log(response);
      //       for (var i = 0; i < response.artists.length; i++) {
      //         var name = response.artists[i].name;
      //         var pic = response.artists[i].images[0].url;
      //         var link = response.artists[i].external_urls.spotify;
      //         $('#results').append('<div class=\"band-group\"><h3><a href=\"' +link + '\" target=\"_blank\">' + name + '</a></h3>' + '<img src=' + pic + '></div>');
      //       }
      //     });
      //   }

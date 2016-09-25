/**
 * Created by austin on 20/09/2016.
 */

var request = require('request');
const fsConfig = require('./fs-config');

/* should never leave you keys in js files like this

 var fsConfig = {
 base_url: 'https://api.foursquare.com/v2/venues/explore?',
 client_id: 'UBNAPVWLBQGZTBIPMVPBVKPAQJ2W25WS1IC4UIZLKHCF1MOV',
 client_secret: 'PMKTTWEIB1AE0X20TDWINC5MGOOAIDGS5TI2OPGTPKV1CFZ4',
 };*/

//console.log (fsConfig);

var fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20140601';

console.log(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials);

function loadVenues(locationName, venueKeyword) {
  var requestOptions = {
    url: fsConfig.base_url + 'near=' + locationName + '&query=' + venueKeyword + fsCredentials,
    method: 'GET',
    json: {},
  };

  //request(requestOptions, function (err, response, body) {
  request(requestOptions, (err, response, body) => {
    var venues = body.response.groups[0].items;
    const checkins = [];
    /*  for (let i = 0; i < venues.length; i++) {
     const venue = venues[i];
     const checkin = {
     name: venue.venue.name,
     checkins: venue.venue.stats.checkinsCount,
     users: venue.venue.stats.usersCount,
     };
     checkins.push(checkin);
     }*/
    for (let venue of venues) {
      const checkin = {
        name: venue.venue.name,
        checkins: venue.venue.stats.checkinsCount,
        users: venue.venue.stats.usersCount,
        rating: venue.venue.rating,
        url: venue.venue.url,

        //whoTipped: venue.tips.user.firstName,
      };
      checkins.push(checkin);
    }

    console.log(checkins);
  });
}

var locationName = 'Waterford, IE';
loadVenues(locationName, '');

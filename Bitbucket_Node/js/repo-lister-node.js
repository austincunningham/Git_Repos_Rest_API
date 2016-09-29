/**
 * Created by austin on 24/09/2016.
 */
var request = require('request');

//var username = 'austincunningham';

function loadRepo(username) {
  var requestOptions = {
    url: 'https://api.bitbucket.org/2.0/repositories/' + username,
    method: 'GET',
    json: {},
  };

  /*var requestOptions = {
    url: 'https://api.github.com/users/' + userName + '/repos',
    method: 'GET',
    json: {},
    headers: {
      'User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)'
    }
  };*/

  request(requestOptions, (err, response, body) => {
    var rb = response.body;
    let repos = [];
    for (let i = 0; i < rb.values.length; i++) {
      let repo = {
        name: rb.values[i].name,
        clone_url: rb.values[i].links.clone[0].href,
      };

      //console.log('response: ' + response.body.values[i].name);

      repos.push(repo);
    }

    console.log(repos);
  });
};

loadRepo('austincunningham');

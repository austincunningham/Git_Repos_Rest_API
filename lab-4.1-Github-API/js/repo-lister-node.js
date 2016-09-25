/**
 * Created by austin on 24/09/2016.
 */
var request = require('request');

//var username = 'austincunningham';

function loadRepo(userName) {
  var requestOptions = {
    url: 'https://api.bitbucket.org/2.0/repositories/' + userName,
    method: 'GET',
    json: {},
  };

  /*var requestOptions = {
    url: 'https://api.github.com/users/' + userName + '/repos',
    method: 'GET',
    json: {},
  };*/

  request(requestOptions, (err, response, body) => {
    var rb = response.body;
    let repos = [];
    for (let i = 0; i < rb.values.length; i++) {
      let repo = {
        name: rb.values[i].name,
        clone_url: rb.values[i].links.clone[0].href,
      };
      console.log('response: ' + response.body.values[i].name);


      repos.push(repo);
    }
    console.log(repos);
  });
};

loadRepo('austincunningham');

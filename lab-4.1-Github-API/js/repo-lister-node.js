/**
 * Created by austin on 24/09/2016.
 */
var request = require('request');

function loadRepo(userName, sort) {
  var requestOptions = {
    url: 'https://api.github.com/users/' + userName + '/repos?sort=' + sort,
    method: 'GET',
    json: {},
  };

  request(requestOptions, (err, response, body) => {
    var repo = body.response.group[0].items;
    const lists = [];
    for (let repos in repo) {
      const lists = {
      };
    }
  });
};
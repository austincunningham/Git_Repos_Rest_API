/**
 * Created by austin on 20/09/2016.
 */

/** force semantic ui forms to work*/
$('.ui.dropdown').dropdown();

function updateResult(result) {
  $('#result-msg').text('');
  $('#result-msg').text(result);
}

function populateTable(repoList) {
  for (var i = 0; i < repoList.length; i++) {
    $('#repo_table tbody ').append('<tr><td><b>' + repoList[i].name + '</b>  </td><td>'
        + repoList[i].clone_url + '</td></tr>');
  }
}

$('#clear_btn').click(function () {
  //document.getElementById('#repo_table').innerHTML = '';
  location.reload();
});

$('#search_btn').click(function () {
    var userName = $('#username').val();
    var sort = $('#select :selected').text();
    console.log(userName);

    $.ajax({
      dataType: 'json',
      url: 'https://api.github.com/users/' + userName + '/repos?sort=' + sort,

      success: function (data) {
          console.log('success');
          updateResult(data.length + ' repos');
          populateTable(data);
        },

      error: function (err) {
        //console.log('fail');
        //console.log(err.statusText);
        updateResult(userName + ' ' + err.statusText);
      },

    });
  });

/*
$('#search_btn').click(function () {

  var userName = $('#username').val();
  console.log(userName);

  $.ajax({
    dataType: 'json',
    url: 'https://api.github.com/users/' + userName + '/repos?sort=update',

    success: function (data) {
      console.log('success');
      updateResult(data.length + ' repos');
      populateTable(data);
    },

    error: function (err) {
      //console.log('fail');
      //console.log(err.statusText);
      updateResult(userName + ' ' + err.statusText);
    },

  });
});
*/


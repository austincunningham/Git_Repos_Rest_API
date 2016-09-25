/**
 * Created by austin on 25/09/2016.
 */
$('#search_btn').click(function () {

  var userName = $('#username').val();
  console.log(userName);

  $.ajax({
    dataType: 'json',
    url: 'https://api.bitbucket.org/2.0/repositories/' + userName,
    success: function (data) {
      console.log('success');
      for (let i = 0; i < data.values.length; i++) {
        console.log(data.values[i].name);
        $('#repo_table').append('<tr><td><b>' + data.values[i].name + '</b></td><td>' + data.values[i].links.clone[0].href + '</td></tr>');
      }
    },

    error: function (err) {
      console.log('fail');
      console.log(err.statusText);
    },

  });
});

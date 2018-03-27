/**
 * Created by austin on 20/09/2016.
 */

/** force semantic ui forms to work*/
$('.ui.dropdown').dropdown();

function updateResult(result) {
  //$('#result-msg').text('');
  $('#result-msg').text(result);
}

function populateTable(repoList) {
  var content = '';
  for (var i = 0; i < repoList.length; i++) {
    content += '<tr><td><b>' + repoList[i].name + '</b></td><td><a href="'
        + repoList[i].clone_url + '">'+ repoList[i].clone_url +'</a></td></tr>';
  }
  $('#repo_table tbody ').empty().append(content);
}

$('#clear_btn').click(function () {
  location.reload();
});

$('#search_btn').click(function () {
    var userName = $('#username').val();
    var sort = $('#select :selected').text();
    var startdate;
    console.log(userName, sort);

    $.ajax({
      dataType: 'json',
      url: 'https://api.github.com/users/' + userName + '/repos?sort=' + sort +'&per_page=100',

      success: function (data) {
          console.log('success');
          updateResult(data.length + ' public repos found');
          populateTable(data);
        },

      error: function (err) {
        updateResult(userName + ' ' + err.statusText);
      }
    });
  $.ajax({
    dataType: 'json',
    url: 'https://api.github.com/users/' + userName,

    success: function (userdata) {
      $('.header').text(userdata.name);
      startdate = (userdata.created_at).split("T")[0];
      $('.date').text('Account Created : '+startdate);
      $('.description').text('Bio : '+userdata.bio );
      $('.blog').text('Blog : '+userdata.blog );
      $('#followers').text(userdata.followers );
      $('#avatar').attr('src',userdata.avatar_url);
    },

    error: function (err) {
      updateResult(userName + ' ' + err.statusText);
    }
  });

});



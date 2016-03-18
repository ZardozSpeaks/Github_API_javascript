var findUser = require('./../js/apicalls.js').findUser;
var findRepos = require('./../js/apicalls.js').findRepos;

$(document).ready(function() {
  $('#enter').click(function() {
    $('.user-project').remove();
    var userName = $('#userName').val();
    findUser(userName);
    findRepos(userName);
  });
});

$.getJSON("/title", function(data) {
  for (var i = 0; i < data.length; i++) {
    $(".title").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});
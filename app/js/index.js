$(function() {
  var getBackgroundImage = function(record) {
    var query = encodeURIComponent(record.artist + ' ' + record.title + ' cover');
    $.getJSON('http://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=8&start=1&q='+query+'&callback=?', 
      function(json) {
        var url = json.responseData.results[0].url;
        console.log(url);
        $("body").css("background-image", "url("+url+")");
      });
  };

  $.getJSON('items/random.json', function(response) {
    html = JST['app/templates/record.us'](response);
    $('#result').html(html);

    getBackgroundImage(response);
  });
});

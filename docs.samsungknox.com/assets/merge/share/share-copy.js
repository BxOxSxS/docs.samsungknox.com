function copyFunction(elem) {

        var link = document.location.href
        const data = JSON.stringify({
          "destination": link
        });

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === this.DONE) {
            var responseObject = JSON.parse(this.responseText);
            var shortUrl = responseObject.shortUrl;

                            $(elem).next().text('Copied!');

                            setTimeout(function(){$(elem).next().text('');}, 2000);//



navigator.clipboard.writeText(shortUrl).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});

          }
        });


        xhr.open("POST", "https://api.rebrandly.com/v1/links");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("apikey", "3427b0da8563417faffceaa5a7a6625b");
        xhr.send(data);
      }

              function linkedinFunction(){

              var link = document.location.href
              const data = JSON.stringify({
                "destination": link,
              });

              const xhr = new XMLHttpRequest();

              xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                  var responseObject = JSON.parse(this.responseText);
                  var shortUrl = responseObject.shortUrl;
				  var http = 'https://';
				  var fullShort = http + shortUrl;


        window.open(
            `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(fullShort)}`
        );
                }
              });

              xhr.open("POST", "https://api.rebrandly.com/v1/links");
              xhr.setRequestHeader("content-type", "application/json");
              xhr.setRequestHeader("apikey", "31806549ff51476f8be018428f181cdc");
              xhr.send(data);


      }

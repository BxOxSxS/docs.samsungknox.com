              function emailFunction(){

              var link = document.location.href
              const data = JSON.stringify({
                "destination": link,
              });

              const xhr = new XMLHttpRequest();

              xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                  var responseObject = JSON.parse(this.responseText);
                  var shortUrl = responseObject.shortUrl;

                    n=getSelection().anchorNode;
        if(!n) {
            t = document.title;
        } else {
            t = n.nodeType === 3 ? n.data : n.innerText;
        }
        t = 'Check this site:\n';
        window.open(
            `mailto:?body=${encodeURIComponent(t)}${encodeURIComponent(shortUrl)}`
        );
                }
              });

              xhr.open("POST", "https://api.rebrandly.com/v1/links");
              xhr.setRequestHeader("content-type", "application/json");
              xhr.setRequestHeader("apikey", "31806549ff51476f8be018428f181cdc");
              xhr.send(data);


      }

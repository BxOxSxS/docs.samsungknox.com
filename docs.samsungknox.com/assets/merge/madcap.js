var pageTitle = document.getElementsByClassName('product');
document.getElementById("product").innerHTML = pageTitle[0].innerHTML;
document.getElementById("breadcrumb").innerHTML = pageTitle[0].innerHTML;

 
var articles = document.getElementsByTagName('h2')
for (var i = 0; i < articles.length; i ++) {
articles[i].parentNode.insertBefore(document.createElement('hr'), articles[i].nextSibling)
			}

var breadCrumbs = document.getElementsByTagName('h1');
document.getElementById("demo").innerHTML = breadCrumbs[0].innerHTML;
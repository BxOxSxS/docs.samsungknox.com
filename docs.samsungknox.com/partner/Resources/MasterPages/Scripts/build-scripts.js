/**
 Find the h1 on each page and inserts it into the breadcrumb in the header. Only have 1 h1 on each page
 */
var pageTitle = document.getElementsByTagName('h1');
document.getElementById("demo").innerHTML = pageTitle[0].innerHTML;

/**
 Find all h2's and inserts a hr line below it
 */
var articles = document.getElementsByTagName('h2')
for (var i = 0; i < articles.length; i ++) {
    articles[i].parentNode.insertBefore(document.createElement('hr'), articles[i].nextSibling)
}

/**
 * Replace all the product name anchors in the TOC with paragraphs
 */
// Grab the known TOC element first to reduce tree traversal
toc = document.getElementById("nav-accordion")
tocAnchors = toc.querySelectorAll("a")
externalLinks = [
    "https://docs.samsungknox.com/admin/fundamentals/welcome.htm",
    "https://docs.samsungknox.com/dev/index.htm"
    ]
for (let i = 0; i < tocAnchors.length; i++) { 
    anchor = tocAnchors[i]
    path = anchor.getAttribute("href")
    if (path.endsWith("toc-product-name.htm")) {
        paragraph = document.createElement("p")
        paragraph.setAttribute("class", "product-title")
        paragraph.textContent = anchor.textContent
        anchor.replaceWith(paragraph)
    }
    if (externalLinks.includes(path)) {
        anchor.textContent += " "
        externalImage = document.createElement("img")
        externalImage.setAttribute("src", "https://docs.samsungknox.com/assets/merge/images/external-link.svg")
        externalImage.setAttribute("class", "no-border")
        externalImage.setAttribute("style", "width: 12px; height: 12px; margin: 0")
        anchor.appendChild(externalImage)
    }
}

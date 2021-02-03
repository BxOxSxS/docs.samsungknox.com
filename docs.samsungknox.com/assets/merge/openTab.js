// Title: openTab.js
// Purpose: Defines the openTab() function, which controls which content within an html section styled for tabbed navigation
// Usage:
// Parameters:
//  evt - the page event (click)
//  tabName - the id of the <div> containing the content that should be displayed
//  id - the id of the tabbed-navigation section (should be 0 if there's only one tabbed-navigation section on the page)
/* <div class="tab0">
        <button class="tablinks0" onclick="openTab(event, 'jsSnippet')">JavaScript</button> 
        <button class="tablinks0" onclick="openTab(event, 'pythonSnippet')">Python</button>
    </div>
    <div id="jsSnippet" class="tabcontent0">[code snippet goes here in <pre> tags]</div>
    <div id="pythonSnippet" class="tabcontent0">[code snippet goes here in <pre> tags]</div>
    */
// Author/credit: The original function comes from https://www.w3schools.com/w3css/w3css_tabulators.asp, modifications made by Kendra Ellis (k.ellis) 2019

function openTab(evt, tabName, id) {
    let i, tabcontent, tablinks;
    // Set display of all tabbed content for the given tabbed-content section to none
    tabcontent = document.getElementsByClassName("tabcontent" + id);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Set display of all tabs for current tab section to none
    tablinks = document.getElementsByClassName("tablinks" + id);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Display the currently-selected tabbed content
    document.getElementById(tabName).style.display = "block";
    // Display the currently-selected tab as active
    evt.currentTarget.className += " active";
}
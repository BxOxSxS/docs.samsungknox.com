// Show all divs on page load
filterSelection("all");

/**
  * @desc filters all divs on a page with the class 'filterDiv' by version class (ex. 'v1')
  * @param string versionName - the name of the version class by which to filter
  * @return none
*/
function filterSelection(versionName) {
    let filterDivs, i;
    filterDivs = document.getElementsByClassName("filterDiv");
    if (versionName == "all") {
        versionName = "";
    }
    for (i = 0; i < filterDivs.length; i++) {
        removeClass(filterDivs[i], "show");
        if (filterDivs[i].className.indexOf(versionName) > -1) {
            addClass(filterDivs[i], "show");
        }
    }
}

/**
  * @desc helper function for filterSelection; adss a class to an element
  * @param string element - the name of the element to alter
  * @param string classToAdd - name of the class to add to the element
  * @return none
*/
function addClass(element, classToAdd) {
    const elementClasses = element.className.split(" ");
    if (elementClasses.indexOf(classToAdd) == -1) {
        element.className += " " + classToAdd;
    }
}

/**
  * @desc helper function for filterSelection; removes a class from an element
  * @param string element - the name of the element to alter
  * @param string classToAdd - name of the class to remove from the element
  * @return none
*/
function removeClass(element, classToRemove) {
    const elementClasses = element.className.split(" ");
    if (elementClasses.indexOf(classToRemove) > -1) {
        elementClasses.splice(elementClasses.indexOf(classToRemove), 1);
    }
    element.className = elementClasses.join(" ");
}
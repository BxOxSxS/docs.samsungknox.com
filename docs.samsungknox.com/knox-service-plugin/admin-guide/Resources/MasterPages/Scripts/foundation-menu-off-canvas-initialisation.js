/* Foundation menu initialisation for accordion and drilldown menus */
/* By David Lee 2016 - http://ukauthor.wordpress.com/ */
/* --- */
/* Uses Foundation 6.2.1 */
/* Download:       http://foundation.zurb.com/sites/download.html/ */
/* Drilldown menu: http://foundation.zurb.com/sites/docs/drilldown-menu.html */
/* Accordion menu: http://foundation.zurb.com/sites/docs/accordion-menu.html */		
/* Off-canvas:     http://foundation.zurb.com/sites/docs/off-canvas.html */
/* Icon fonts:     http://foundation.zurb.com/icon-fonts.html */

$(document).ready(function() {

		$("#nav-accordion ul.menu").removeClass("_Skins_Menu");
		/* Remove (most of) Flare's menu formatting from the skin. You need to remove the '_Skins_[menu filename]' class, so if your menu skin filename is 'Menu' the class is '_Skins_Menu'. Some of the menu skin styles are hard-coded by Flare, but you can override these in the CSS. */

		$("#nav-accordion ul.sub-menu").addClass("menu vertical");
		/* Here we add the Foundation 'menu' and 'vertical' classes to all the Flare 'sub-menu' classes in accordion menu. */
		
		$("#nav-accordion .selected").parents("ul").addClass("is-active");
		/* To automatically open the accordion on page load and show the current topic, the 'is-active' class needs to be set on each parent ul tag. Flare indicates the current topic with the 'selected' class, so we can use that to find the current item, then add the 'is-active' class to all its parents. */
				
		$("#nav-accordion>ul").clone().appendTo("#nav-drilldown");
		/* Now we've configured most of the accordion menu, we need to duplicate (clone) the menu to use it in the off-canvas drilldown menu too. This clones the menu inside the #nav-accordion container, and appends it to the empty #nav-drilldown container. */
		
		$("#nav-accordion ul.sub-menu").addClass("nested");
		/* For the accordion menu (only), we want each level to be indented. We find the Flare 'sub-menu' class, and add the Foundation 'nested' class to indent. This is done after the clone above because it's only for the accordion, not the drilldown. */
		
		
		$("#nav-accordion>ul").addClass("menu vertical").attr("data-accordion-menu", "").attr("data-multi-open", "true");
		/* Set Foundation styles for accordion menu (the top level ul) - add attributes data-accordion-menu="" and data-multi-open="true" */
		
		$("#nav-drilldown>ul").addClass("menu vertical").attr("data-drilldown", "");
		/* Set Foundation styles for drilldown (off-canvas) menu (the top level ul) - add attributes data-drilldown="" */
		/* This must come after the menu is cloned */		
	
		$("#nav-drilldown, #nav-accordion").css("display", "block");
		/* Set menus to be visible. They are initially hidden in the CSS, to prevent FOUC (flash of unstyled content). The menus can initially appear unformatted before all scripts have run, which was evident in Chrome browser especially. So we hide the menus in the CSS, and then display them in the script (using display:block), after they have been manipulated.  */
		/* This must come last */		
		
		$(document).foundation();
		/* initialise Foundation on the whole document */
		
		
});
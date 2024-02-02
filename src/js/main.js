import $ from "jquery";

import { initPlugins, destroyPlugins } from "./plugins";
import pictureObserver from "./picture";
import wow from "./wow"
import initializeFormValidation from './form';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods';

// Example usage
$(() => {
	// Initialize all plugins
	initPlugins();

	// Destroy all plugins
	// destroyPlugins();
	// setTimeout(destroyPlugins, 5000);

	// Form handler
	$(".app__form").on("submit", (e) => {
		e.preventDefault();
	});

	// Find the element to observe for lazy loading using jQuery
	const $picture = $("#app__picture");

	// Start observing the picture
	pictureObserver.observe($picture[0]);

	// Find text
	const $appText = $(".app__text");

	// WOW - add class for text when it is in the viewport
	wow.observe($appText[0]);

	// Form validation
	initializeFormValidation($("#app__form"));
});

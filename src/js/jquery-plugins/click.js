import $ from "jquery";

// jQuery click plugin
$.fn.clickPlugin = function (options) {
	// Default plugin settings
	const defaults = {
		clickClass: "clicked",
	};

	// Merge default settings with provided options
	const settings = $.extend({}, defaults, options);

	// Plugin initialization logic
	const init = function () {
		// Toggle class
		$(this).on("click", function () {
			$(this).toggleClass("clicked");
		});
	};

	// Plugin destruction logic
	const destroy = function () {
		// Remove class & remove eventListener
		$(this).removeClass(settings.clickClass).off("click");
	};

	// Depending on the provided command, call the corresponding method
	if (options === "destroy") {
		destroy.call(this);
	} else {
		init.call(this);
	}

	// Return the current jQuery object to support method chaining
	return this;
};

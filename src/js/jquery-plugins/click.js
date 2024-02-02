import $ from "jquery";

// jQuery click plugin
$.fn.clickPlugin = function (options) {
	console.log("options: ", options);
	// Default plugin settings
	const defaults = {
		clickedClass: "clicked",
	};

	// Merge default settings with provided options
	const settings = $.extend({}, defaults, options);

	// Plugin initialization logic
	const init = function () {
		// console.log("Initializing examplePlugin on:", this);
		console.log("$(this): ", $(this));
		// Your plugin initialization logic here
		$(this).on("click", function () {
			$(this).toggleClass("clicked");
		});
	};

	// Plugin destruction logic
	const destroy = function () {
		console.log("Destroying examplePlugin on:", this);

		// Your plugin destruction logic here
		$(this).removeClass(settings.clickedClass).off("click");
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

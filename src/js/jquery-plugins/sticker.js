import $ from "jquery";

// jQuery sticker plugin
$.fn.stickerPlugin = function (options) {
	// Default plugin settings
	const defaults = {
		stickerClass: "stickered",
	};

	// Merge default settings with provided options
	const settings = $.extend({}, defaults, options);

	const stickerHandler = (element) => {
		const scrollTop = $(window).scrollTop();

		if (scrollTop) {
			// Set class
			element.addClass(settings.stickerClass);
		} else {
			// Unset class
			element.removeClass(settings.stickerClass);
		}
	};

	// Plugin initialization logic
	const init = () => {
		// Your plugin initialization logic here
		$(window).on("scroll", stickerHandler.bind(null, $(this)));
	};

	// Plugin destruction logic
	const destroy = function () {
		// Remove class & remove eventListener
		$(this).removeClass(settings.stickerClass);
		$(window).off("scroll", stickerHandler);
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

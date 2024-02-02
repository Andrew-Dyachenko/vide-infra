import $ from "jquery";

// Function for lazy loading an image
function lazyLoadImage(entry) {
	if (entry.isIntersecting) {
		// Find all image and source elements within the picture tag using jQuery
		const $images = $(entry.target).find("img");
		const $sources = $(entry.target).find("source");

		// Set the source attributes to start loading each image
		$sources.each(function () {
			$(this).attr("srcset", $(this).data("srcset")).removeAttr("data-srcset");
		});

		$images.each(function () {
			$(this).attr("src", $(this).data("src")).removeAttr("data-src");
		});

		// Disable the Intersection Observer after loading the images
		pictureObserver.unobserve(entry.target);
	}
}

// Create an Intersection Observer with a 10% threshold
const pictureObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach(lazyLoadImage);
	},
	{ threshold: 0.1 }
);

export default pictureObserver;

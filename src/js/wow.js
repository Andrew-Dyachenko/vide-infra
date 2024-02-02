import $ from "jquery";

// Function for lazy loading an image
function wowHandler(entry) {
	if (entry.isIntersecting) {
		const target = $(entry.target);

		// Add class
		target.addClass("visible");

		// Disable the Intersection Observer
		wow.unobserve(entry.target);
	}
}

// Create an Intersection Observer with a 10% threshold
const wow = new IntersectionObserver(
	(entries) => {
		entries.forEach(wowHandler);
	},
	{ threshold: 0.1 }
);

export default wow;

import $ from "jquery";

import { initPlugins, destroyPlugins } from "./plugins";

// Example usage
$(() => {
	// Initialize all plugins
	initPlugins();

	// Destroy all plugins
	// destroyPlugins();
	// setTimeout(destroyPlugins, 5000);
});

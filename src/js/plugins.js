// Importing jQuery and custom plugins for hover and click functionality
import $ from "jquery";
import "./jquery-plugins/hover";
import "./jquery-plugins/click";

// Function to call plugins on elements with data-plugin attribute
function callPlugins(callback) {
	$("[data-plugin]").each(function () {
		const $element = $(this);
		const plugins = $element.data("plugin").trim().split(/\s+/);

		// Iterate through each plugin and execute the callback if the plugin is defined on the element
		// biome-ignore lint/complexity/noForEach: <explanation>
		plugins.forEach((plugin) => {
			if (plugin in $element) {
				callback($element, plugin);
			}
		});
	});
}

// Function to initialize plugins
export function initPlugins() {
	callPlugins(($element, plugin) => {
		// Call the plugin and pass all data-... attributes to it
		$element[plugin].call($element, $element.data());
	});
}

// Function to attempt destroying all plugins
export function destroyPlugins() {
	callPlugins(($element, plugin) => {
		// Pass 'destroy' parameter to plugins, responsible for removing all global event listeners, etc.
		$element[plugin]("destroy");
	});
}

// Exporting an object with init and destroy methods for external usage
export default {
	init: initPlugins,
	destroy: destroyPlugins,
};

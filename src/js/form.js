import $ from "jquery";

$(() => {
	$.validator.addMethod(
		"phoneValidation",
		function (value, element) {
			return this.optional(element) || /^(\+\d{1,})?\d{5,}$/.test(value);
		},
		"Invalid phone number."
	);
});

export default function initializeFormValidation(form) {
	$(form).validate({
		rules: {
			requiredField: {
				required: true,
			},
			phoneNumber1: {
				phoneValidation: true,
			},
			phoneNumber2: {
				phoneValidation: true,
			},
		},
		messages: {
			requiredField: {
				required: "Custom error message for required field.",
			},
			phoneNumber1: {
				phoneValidation: "Invalid phone number.",
			},
			phoneNumber2: {
				phoneValidation: "Invalid phone number.",
			},
		},
		submitHandler: (form) => {
			// Handle successful form submission
			$("#app__form").fadeOut("slow", () => {
				$("#successMessage").fadeIn("slow");
			});
			return false; // Prevent page reloading
		},
	});
}

"use strict";

module.exports = {
	extends: "stylelint-config-wordpress",
	plugins: [
		"stylelint-a11y",
		"stylelint-order"
	],
	rules: {
		"at-rule-empty-line-before": null,
		"at-rule-no-unknown": null,
		"comment-empty-line-before": null,
		"declaration-no-important": true,
		"function-url-quotes": 'always',
		"no-descending-specificity": [true, { "severity": "warning" }],
		"rule-empty-line-before": null,
		"selector-class-pattern": null,
		"a11y/no-outline-none": true,
		"a11y/selector-pseudo-class-focus": true,
		"a11y/font-size-is-readable": [true, { "severity": "warning" }],
		"a11y/line-height-is-vertical-rhythmed": [true, { "severity": "warning" }],
		"a11y/no-display-none": [true, { "severity": "warning" }],
		"a11y/no-obsolete-element": [true, { "severity": "warning" }],
		"a11y/no-text-align-justify": [true, { "severity": "warning" }],
		"order/properties-alphabetical-order": true,
	}
};

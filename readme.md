# Foxland Stylelint Config

## Dependencies

1. [Node & NPM](https://www.npmjs.com/get-npm) - 3rd party dependencies are managed through NPM, so you will need that installed globally
2. [Stylelint](https://stylelint.io/) - as this is a config extention for Stylelint, you will need Stylelint installed in your main project in order for it to work.

## Installation

First, install Stylelint:
```
// NPM
npm install stylelint --save-dev

// Yarn
yarn add stylelint
```

Then install the Foxland stylelint config:
```
// NPM
npm install @foxland/stylelint-config --save-dev
```

## Usage

Add the following to your `.stylelintrc` file:

```js
{
	"extends": "@foxland/stylelint-config"
}
```

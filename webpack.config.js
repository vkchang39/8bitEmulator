const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "build.js",
		path: path.resolve(__dirname, "./public/js"),
	},
	mode: "none",
};

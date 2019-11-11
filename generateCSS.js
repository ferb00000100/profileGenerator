function generateCSS(bgColor) {
	return`
	.bg {
		background-color: ${bgColor.color};
		}
	ul {
		list-style-type:none;
		}
	li {
		color: ${bgColor.color};
		}
	`;
}

module.exports = generateCSS;
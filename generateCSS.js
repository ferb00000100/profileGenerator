function generateCSS(bgColor) {
	return`	
	.container {
		background-color: ${bgColor.color};
		width: 1000px;
	}
	ul {
		list-style-type:none;
		}
	.pic {
		width: auto;
		height: 150px
	}
	.callOuts img {
		height: auto;
		width: 100px;
	}
	.miniCallOuts img {
		height: auto;
		width: 50px;
	}
	.topArea {
		background-color: #424243;
		color: white;
	}
	.middleArea{
		height: 500px;

	}
	.bottomArea{
		position: absolute;
		background-color: #424243;
		width: 100%;
		height: 150px;
		color: #fff;
		font-size: .8rem;
	}
	
	.bottomArea p{
		font-size: .7rem;
	}
	
	.bottomArea h5{
		font-weight: 800;
		font-size: 16px;
	}
	
	.w-60{
		width: 60%!important;
	}
	
	.h-30{
		width: 30%!important;
	}
	
	.w-20{
		width: 20%!important;
	}
	
	/*Responsive code*/
	
	@media (min-width: 576px) {
		.banner{
		height: 200px;
		}
	}
	
	/*Medium devices (tablets, 768px and up)*/
	@media (min-width: 768px) {
		.banner{
		height: 300px;
		}
	}
	
	/*Large devices (desktops, 992px and up)*/
	@media (min-width: 992px) {
		.banner{
		height: 400px;
		}
	}
	
	/*Extra large devices (large desktops, 1200px and up)*/
	@media (min-width: 1200px) {
	
}
	`;
}

module.exports = generateCSS;
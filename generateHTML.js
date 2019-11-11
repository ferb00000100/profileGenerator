function generateHTML(gitUser, repoCount, numberOfFollowing, numberOfFollowers, numberOfStarredRepos, gitLink, myName, locationLink, linkedInLink, twitterLink, instagramLink, facebookLink, bio, blog, avatar) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>${myName}</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/style.css" type="text/css">
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="container">
<div class="d-flex topArea flex-column shadow rounded p-3 flex-md-row px-md-3 px-5 mb-3"> 
	<div class="w-15 mt-3 shadow p-3 rounded">
		<img src="${avatar}" class="img-fluid" alt="my avatar">
	</div>
	<div class="w-75 p-3"> 
		<h4>${myName}</h4>
		<p>${bio}</p>
		<a href=${blog} class="btn btn-primary">My Blog</a>
	</div>
</div>

<div class="d-flex justify-content-around my-3 px-5 text-center flex-wrap">  
	<div class="callOuts d-flex flex-column p-4 m-2 flex-fill"> 
		<img src="assets/images/github_image.png" class="d-block mx-auto" alt="">
		<a href="${gitLink}">My GitHub</a>
		</div>
	<div class="callOuts d-flex flex-column p-4 m-2 flex-fill">
		<img src="assets/images/linkedIn1.png" class="d-block mx-auto" alt="">
		<a href="${linkedInLink}">My LinkedIn</a>
	</div>
	<div class="callOuts d-flex flex-column p-4 m-2 flex-fill">
		<img src="assets/images/twitter-logo.png" class="d-block mx-auto" alt="">
		<a href="${twitterLink}">My Twitter</a>
	</div>
	<div class="callOuts d-flex flex-column p-4 m-2 flex-fill">
		<img src="assets/images/maps_512dp.png" class="d-block mx-auto" alt="">
		<a href="${locationLink}">My Home</a>
	</div>
</div>
<div class="d-flex middleArea justify-content-around ml-10 my-3 px-5 text-left flex-wrap">
<div class="callOuts d-flex flex-column p-4 m-2 flex-fill">
<h6>My GutHub Statistics</h6>
		<ul>
				<li>Public Repositories: ${repoCount}</li>
				<li>Followers: ${numberOfFollowers}</li>
				<li>Following: ${numberOfFollowing}.</li>
				<li>GitHub Stars: ${numberOfStarredRepos}</li>
			</ul>
	</div>
</div>
<div>
	<nav
	class="navbar col-md-12 mt-3 d-flex justify-content-center navbar-toggleable-md navbar-expand-lg navbar-dark bg-dark shadow p-2 mb rounded" style="padding: 1px; width: 100%">
	<div class="d-flex row">
		<div class="miniCallOuts d-flex m-1">
			<a href="${facebookLink}"><img class="d-block" src="assets/images/facebook.png"></a>
		</div>
		<div class="footer-copyright bg-dark text-light m-1 py-3">© 2019 Copyright:
			<a href="https://github.com/ferb00000100?tab=repositories">ferb00000100 </a>
		</div>
		<div class="miniCallOuts d-flex m-1">
			<a class="miniCallOuts d-flex m-auto" href="${instagramLink}"><img class="d-block" src="assets/images/instagram.jpg"></a>
		</div>
	</div>  
	</nav>	
</div>
</div>
</body>
</html>
`;
}

module.exports = generateHTML;
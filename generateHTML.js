function generateHTML(gitUser, repoCount, numberOfFollowing, numberOfFollowers, numberOfStarredRepos, gitLink, myName, locationLink, linkedInLink, twitterLink, instagramLink, facebookLink, bio, blog) {
	return `
<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>${myName}</title>
	<link rel="stylesheet" href="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css">
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="off-canvas-wrapper">
	<div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
		<div class="off-canvas position-left reveal-for-large bg" id="my-info" data-off-canvas data-position="left">
			<div class="row column bg">
				<br>
				<img class="thumbnail" src="assets/images/profile_pic.jpg">
				<p>${bio}</p>
			</div>
		</div>
	<div class="off-canvas-content" data-off-canvas-content>
		<div class="title-bar hide-for-large">
			<div class="title-bar-left">
			<button class="menu-icon" type="button" data-open="my-info"></button>
			<span class="title-bar-title">${myName}</span>
		</div>
	</div>
	<div class="callout primary">
		<div class="row column">
			<h1>${myName}</h1>
			<h6>Learn About Me <a href=" ${blog}">${blog}</a></h6>
		</div>
	</div>
	<div class="row small-up-2 medium-up-3 large-up-4">
		<div class="column">
			<img class="thumbnail" src="assets/images/github_image.png">
			<a href="${gitLink}">My GitHub</a>
		</div>
		<div class="column">
			<img class="thumbnail" src="assets/images/maps_512dp.png">
			<a href="${locationLink}">My Home</a>
		</div>
		<div class="column">
			<img class="thumbnail" src="assets/images/linkedin.png">
			<a href="${linkedInLink}">My LinkedIn</a>
		</div>
		<div class="column">
			<img class="thumbnail" src="assets/images/twitter-logo.png">
			<a href="${twitterLink}">My Twitter</a>
		</div>
		<hr>
		<div class="column">
			<ul>
				<li>Public Repositories: ${repoCount}</li>
				<li>Followers: ${numberOfFollowers}</li>
				<li>Following: ${numberOfFollowing}.</li>
				<li>GitHub Stars: ${numberOfStarredRepos}</li>
			</ul>
		</div>
	</div>
	<hr>
	<div class="row small-up-2 medium-up-3 large-up-4">
		<div class="medium-6 columns">
			<h3>Social Me</h3>
			<div class="column">
				<a href="${facebookLink}"><img class="thumbnail" src="assets/images/facebook.png"></a>
			</div>
			<div class="columns">
				<a href="${instagramLink}"><img class="thumbnail" src="assets/images/instagram.jpg"></a>
			</div>
		</div>
	</div>
	<div class="column-12">
		<div class="row">
		<label>Name
			<input type="text" placeholder="Name">
		</label>
		<label>Email
			<input type="text" placeholder="Email">
		</label>
		<label> Message
			<textarea placeholder="what's on your mind!"></textarea>
		</label>
			<input type="submit" class="button expanded" value="Submit">
	</div>
<!--	</div>-->
</div>
</div>
</div>
</div>
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>
<script>
$(document).foundation();
</script>
</body>
</html>
`;
}

module.exports = generateHTML;
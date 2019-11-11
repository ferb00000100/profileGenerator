const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
const generateHTML = require("./generateHTML");
const generateCSS = require("./generateCSS");
const pdf = require('html-pdf');


function writePDF(html) {

	// let html = fs.readFileSync('index.html', 'utf8');
	let options = { format: 'Letter' };
	console.log(html);
	pdf.create(html, options).toFile('./jmart.pdf', function(err, res) {
		if (err) return console.log(err);
		console.log(res); // { filename: '/app/businesscard.pdf' }
	});

}
function writePDF(){
	const puppeteer = require('puppeteer');

	(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		// await page.goto(html);
		await page.goto(`file:///Users/jmartin/Documents/DU/developerProfileGenerator/index.html`,{waitUntil: 'networkidle2'});
		await page.content();
		await page.pdf({
			path: 'jasonMartin.pdf',
			printBackground: true,
			// format: 'A4',
			// landscape: true,
			margin: {
				top: "10px"
			}});

		await browser.close();
	})();
}

function gitHubData(userName) {
	const gitUser = userName.username;
	const myName = "Jason Martin";
	const gitLink ="https://github.com/"+gitUser+"?tab=repositories"
	const locationLink = "https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&ll=39.61520999999999%2C-104.99908399999998&spn=0.158686%2C0.205994&z=11&source=embed&mid=1_6SMyOGhQ6NzZ_PPkQx2opn4m_g";
	const linkedInLink = "https://www.linkedin.com/in/jason-martin-8a19583/";
	const twitterLink = "https://twitter.com/jmart004";
	const instagramLink = "https://www.instagram.com/jmart00000100/?hl=en";
	const facebookLink = "https://www.facebook.com/jason.martin.142240?ref=bookmarks";
	// const gitHubBlog = "https://github.blog/";

	axios.all([
		axios.get("https://api.github.com/users/"+ gitUser+"/repos?per_page=100"),
		axios.get("https://api.github.com/users/"+ gitUser+"/following"),
		axios.get("https://api.github.com/users/"+ gitUser+"/followers"),
		axios.get("https://api.github.com/users/"+ gitUser+"/starred"),
		axios.get("https://api.github.com/users/"+gitUser)
	])
		.then(responseArray => {
			let repositories = responseArray[0].data;
			const repoNames = repositories.map(function (repo) {
				return repo.name;
			});
			let repoCount = repoNames.length;

			let usersFollowing = responseArray[1].data;
			const following = usersFollowing.map(function (following) {
				return following.login;
			});
			let numberOfFollowing = following.length;

			let userfollowers = responseArray[2].data;
			const followers = userfollowers.map(function (followers) {
				return followers.login;
			});
			let numberOfFollowers = followers.length;

			let starredRepos = responseArray[3].data;
			const starred = starredRepos.map(function (starred) {
				return starred;
			});
			let numberOfStarredRepos = starred.length;

			// let data = responseArray[4].data;
			let bio = responseArray[4].data.bio;
			let blog = responseArray[4].data.blog;
			// console.log(data);



			const html = generateHTML(gitUser, repoCount, numberOfFollowing, numberOfFollowers, numberOfStarredRepos, gitLink, myName, locationLink, linkedInLink, twitterLink, instagramLink, facebookLink, bio, blog);
			writeFileAsync("index.html", html);
			writePDF();

		});
}


function getUserName() {

	return inquirer.prompt(
		{
			type: "input",
			name: "username",
			message: "What is your GitHub Username"
		});
}

function getColor() {

	return inquirer.prompt(
		{
			type: "list",
			name: "color",
			message: "What is your favorite color",
			choices: ["cadetblue", "darkcyan", "seagreen", "grey"]

		});
}

async function init() {
	try {
		const bgColor = await getColor();
		const userName = await getUserName();
		const css = generateCSS(bgColor);

		await writeFileAsync("assets/css/style.css", css);

		gitHubData(userName);



	} catch(err) {
		console.log(err);
	}
}

init();

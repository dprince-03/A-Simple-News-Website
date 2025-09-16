const axios = require("axios");

const newsHomePage = async (req, res) => {
	try {
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/`);
        newsData = newsAPI.data;
        // console.log(newsData);
        res.render('news', { articles: newsData });
    } catch (err) {
        if (err.response) {
            res.render("news", { articles: null });
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            res.render("news", { articles: null });
            console.log(err.request);
        } else {
            res.render("news", { articles: null });
            console.log('Error', err.message);
        }
    }
};

const getNewsByID = async (req, res) => {
	let articleID = req.params.id;
    try {
		const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleID}`);
		newsData = newsAPI.data;
		// console.log(newsData);
		res.render("newsSingle", { article: newsData });
	} catch (err) {
		if (err.response) {
			res.render("newsSingle", { article: null });
			console.log(err.response.data);
			console.log(err.response.status);
			console.log(err.response.headers);
		} else if (err.request) {
			res.render("newsSingle", { article: null });
			console.log(err.request);
		} else {
			res.render("newsSingle", { article: null });
			console.log("Error", err.message);
		}
	}
};

const searchNews = async (req, res) => {
	let search = req.body.search;
	try {
		const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`);
		newsData = newsAPI.data;
		// console.log(newsData);
		res.render("newsSearch", { articles: newsData });
	} catch (err) {
		if (err.response) {
			res.render("newsSearch", { articles: null });
			console.log(err.response.data);
			console.log(err.response.status);
			console.log(err.response.headers);
		} else if (err.request) {
			res.render("newsSearch", { articles: null });
			console.log(err.request);
		} else {
			res.render("newsSearch", { articles: null });
			console.log("Error", err.message);
		}
	}
};



https: module.exports = {
	newsHomePage,
	getNewsByID,
    searchNews,
};
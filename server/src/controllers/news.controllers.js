const axios = require("axios");

const newsHomePage = async (req, res) => {
	try {
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/`);
        newsData = newsAPI.data;
        // console.log(newsData);
        res.render('news', { articles: newsData });
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.log('Error', err.message);
        }
    }
};

module.exports = { newsHomePage };
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const newRoutes = require('./src/routes/news.routes');

const app = express();

const PORT = process.env.PORT || 5000;

// Static Files
app.use(express.static('public'));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// Templating Engine
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', newRoutes);
app.use('/article', newRoutes);

app.listen(PORT, () => {
    const externalNewApi = "https://raddy.dev/wp-json/wp/v2/posts/";
    
    console.log(`\n## Server is starting... ##`);
    console.log(`this server is fetching news from: ${externalNewApi}`);
    console.log(`Server is running on: http://localhost:${PORT}`);
    console.log(``);
    console.log(`- if you used nodemon (npm run watch), the server will restart automatically on code changes \n- you don't need to stop and start the server manually \n- just save the file and nodemon will restart the server for you \n- or you can type 'rs' and press enter to restart the server manually \n`);
    console.log(`## press Ctrl+C to stop the server ##`);
});
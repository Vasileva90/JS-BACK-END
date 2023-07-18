const http = require('http');
const fs = require('fs/promises');
const {
    addBreedGet,
    addBreedPost,
    addCatGet,
    addCatPost,
    editCatGet,
    editCatPost,
    shelterCatGet,
    shelterCatPost,
} = require('./controllers/cat');
const home = require('./controllers/home');
const siteCss = require('./public/styles/site');
const { get, post, match } = require('./router');
const port = 3000;

get('/', home);
get('/cats/add-breed', addBreedGet)
post('/cats/add-breed', addBreedPost)
get('/cats/add-cat', addCatGet)
post('/cats/add-cat', addCatPost)
get('/cats/edit', editCatGet)
post('/cats/edit', editCatPost)
get('/cats/shelter', shelterCatGet)
post('/cats/shelter', shelterCatPost)

const server = http.createServer(async (req, res) => {
    if (req.url.includes('/site.css')) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(siteCss);
    } else if (req.url.includes('/data/images') || req.url.includes('/public/images')) {
        res.write(await fs.readFile(__dirname + req.url))
    } else {
        await match(req, res);
    }
    res.end();
});

server.listen(port);

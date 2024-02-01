const renderLayout = require('./views/home/layout');
const routes = {};

function register(method, path, handler) {
        routes[path] ??= {};
        routes[path][method] = handler;
}

const get = register.bind(null, 'GET');
const post = register.bind(null, 'POST');

async function match(req, res) {
    const url = new URL(req.url, 'http://' + req.headers.host + '/');
    req.url = url

    const action = routes[url.pathname];
    const handler = action ? action[req.method] : null;
    
    if (typeof handler == 'function') {
        res.render = (body) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(renderLayout(body));
        };

        res.redirect = (location) => {
            res.writeHead(301, {Location: location});
        }

        await handler(req, res)
    } else {
        defaultController(req, res);
    }
}

function defaultController(req, res) {
    res.writeHead(404);
    res.write('<h1>Not Found</h1>');
}

module.exports = {
    get,
    post,
    match
}
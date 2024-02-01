const { getAll, searchCats } = require('../services/data');
const homeView = require('../views/home/home');
const catTemplate = require('../views/partials/cat');

module.exports = async (req, res) => {
    const query = req.url.searchParams.get('query');
    const cats = query ? await searchCats(query) : await getAll('cats');

    if (cats.length < 0) {
        res.render((homeView('<h1>No cats yet</h1>')));
    }
        res.render((homeView(`<ul>${cats.map((c) => catTemplate(c)).join('\n')}</ul>`)));
};

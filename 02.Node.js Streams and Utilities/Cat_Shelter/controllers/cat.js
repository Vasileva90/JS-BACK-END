const { getCatById, getAll, addBreed, removeCatById, addNewCat, editCat } = require('../services/data');
const { formParser, multipartFormParser } = require('../utils');
const addBreedView = require('../views/addBreed');
const addCatView = require('../views/addCat');
const shelterCatView = require('../views/catShelter');
const editCatView = require('../views/editCat');

module.exports = {
    addBreedGet(req, res) {
        res.render(addBreedView());
    },
    async addBreedPost(req, res) {
        const breed = await formParser(req);
        await addBreed(breed);
        res.redirect('/');
    },
    async shelterCatGet(req, res) {
        const id = req.url.searchParams.get('id');
        const cat = await getCatById(id);
        return res.render(shelterCatView(cat));
    },
    async shelterCatPost(req, res) {
        const id = req.url.searchParams.get('id');
        await removeCatById(id);
        res.redirect('/');
    },
    async addCatGet(req, res) {
        res.render(addCatView(await getAll('breeds')));
    },
    async addCatPost(req, res) {
        const cat = await multipartFormParser(req); 
        await addNewCat(cat);
        res.redirect('/');
    },
    async editCatGet(req, res) {
        const id = req.url.searchParams.get('id');
        const [breeds, cat] = await Promise.all([
            getAll('breeds'),
            getCatById(id),
        ]);
        res.render(editCatView(cat, breeds));
    },
    async editCatPost(req, res) {
        const id = req.url.searchParams.get('id');
        const cat = await multipartFormParser(req); 
        await editCat(id, cat);
        res.redirect('/');
    },
};

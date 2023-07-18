const { writeFile, readFile, deleteFile } = require('../utils');
const Cat = require('../models/Cat');

async function getAll(fileName) {
    return await readFile(fileName);
}

async function getCatById(id) {
    return (await getAll('cats')).find((x) => x.id == id)
}

async function removeCatById(id) {
    const filteredCats = (await getAll('cats')).filter((c) => c.id != id);
    await writeFile('cats', filteredCats);
}

async function searchCats(query) {
    const cats = await getAll('cats');
    return cats.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));
}

async function addBreed(breed) {
    const breeds = await getAll('breeds');
    if (!breeds.includes(breed)) {
        breeds.push(breed);
        return await writeFile('breeds', breeds);
    }
}

async function addNewCat({name, breed, img, description}) {
    const cats = await getAll('cats');
    const newCat = new Cat(name, breed, img, description);
    cats.push(newCat);
    await writeFile('cats', cats);
}

async function editCat(id, {name, breed, img, description}) {
    const cats = await getAll('cats');
    const catToEdit = cats.find((c) => c.id == id);
    if (img) {
        await deleteFile(catToEdit.img);
    }
    catToEdit.name = name ? name : catToEdit.name;
    catToEdit.breed = breed ? breed : catToEdit.breed;
    catToEdit.img = img ? img : catToEdit.img;
    catToEdit.description = description ? description : catToEdit.description;
    await writeFile('cats', cats);
}


module.exports = {
    getAll,
    getCatById,
    removeCatById,
    searchCats,
    addBreed,
    addNewCat,
    editCat
}
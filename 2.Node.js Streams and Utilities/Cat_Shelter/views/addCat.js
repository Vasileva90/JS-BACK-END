module.exports = (breeds) => `
            <form action="/cats/add-cat" method="POST" class="cat-form" enctype="multipart/form-data">
            <h2>Add Cat</h2>
            <label for="name">Name</label>
            <input name="name" type="text" id="name">
            <label for="description">Description</label>
            <textarea name="description" id="description"></textarea>
            <label for="image">Image</label>
            <input type="file" id="image" name="image">
            <label for="group">Breed</label>
            <select name="breed" id="group">
                ${breeds.map((b) => `<option value="${b}">${b}</option>`).join('\n')}
            </select>
            <button type="submit">Add Cat</button>
        </form>`
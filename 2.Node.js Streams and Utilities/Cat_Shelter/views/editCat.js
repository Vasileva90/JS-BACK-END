module.exports = (cat, breeds) => `
<form action="/cats/edit?id=${cat.id}" method="POST" class="cat-form" enctype="multipart/form-data">
<h2>Edit Cat</h2>
<label for="name">Name</label>
<input type="text" id="name" value="${cat.name}" name="name">
<label for="description">Description</label>
<textarea id="description" name="description">${cat.description}</textarea>
<label for="image">Image</label>
<input type="file" id="image" name="image">
<label for="group">Breed</label>
<select id="group" name="breed">
    ${breeds.map((b) => `<option value="${b}" ${ cat.breed == b ? 'selected' : null }>${b}</option>`).join('\n')}
</select>
<button>Edit Cat</button>
</form>`
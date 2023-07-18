module.exports = (cat) => `
<li>
<img src="${cat.img}" alt="Black Cat">
<h3>${cat.name}</h3>
<p><span>Breed: </span>${cat.breed}</p>
<p><span>Description: </span>${cat.description}</p>
<ul class="buttons">
    <li class="btn edit"><a href="/cats/edit?id=${cat.id}">Change Info</a></li>
    <li class="btn delete"><a href="/cats/shelter?id=${cat.id}">New Home</a></li>
</ul>
</li>`
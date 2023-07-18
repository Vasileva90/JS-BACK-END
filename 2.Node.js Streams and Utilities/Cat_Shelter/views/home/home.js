module.exports = (data) => `
        <form method="GET">
            <input type="text" name="query">
            <button type="submit">Search</button>
        </form>
        <section class="cats">
            ${data}
        </section>`;

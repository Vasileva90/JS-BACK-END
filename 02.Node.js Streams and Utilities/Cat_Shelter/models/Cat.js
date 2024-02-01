class Cat {
    constructor(name, breed, img, description) {
        this.name = name;
        this.img = img;
        this.breed = breed;
        this.id = Cat.newId();
        this.description = description;
    }

    static newId() {
        return 'xxxxxxxx'.replace(/x/g, () =>
            Math.round(Math.random() * 9999).toString(16)
        );
    }
}

module.exports = Cat;
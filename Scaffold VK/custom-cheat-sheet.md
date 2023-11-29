node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

const EMAIL_PATTERN = /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/i; EMAIL_PATTERN.test(email) -- boolean

require npm validator if (!validator.isEmail(req.body.email)) { throw new Error('Invalid email address!') };

const IMAGE_PATTERN = /^https?://.+(.png|.jpg|.jpeg)$/i;

    validate: {
        validator(value) {
            return IMAGE_PATTERN.test(value);
        },
        message: 'Image must be of type JPG, JPEG or PNG'
    }
function levels(currentOption) { const availableOptions = [ { key: 'estate', label: 'Real Estate', selected: false }, { key: 'vehicles', label: 'Vehicles', selected: false }, { key: 'furniture', label: 'Furniture', selected: false }, { key: 'electronics', label: 'Electronics', selected: false }, { key: 'other', label: 'Other', selected: false }, ] const result = availableOptions.map(x => x.key == currentOption ? { ...x, selected: true } : x); return result; }

const selectOptions = levels(currentOption);

        {{#each selectOptions}}
            <option value="{{key}}"{{#if selected}}select{{/if}}>{{label}}</option>
          {{/each}}
function categories(cat) { let category; if (cat == 'estate') { category = 'Real Estate' } else if (cat == 'vehicles') { category = 'Vehiclese' } else if (cat == 'furniture') { category = 'Furniture' } else if (cat == 'electronics') { category = 'Electronics' } else if (cat == 'other') { category = 'Other' } return category; }

module.exports = { levels, categories };

async function searchStrings(criteria_1, criteria_2){ return await Model.find({Model.prop1: {$regex : criteria_1}, Model.prop2: {$regex: criteria_2}});

//case-insensitive
return await Model.find({ Model.prop: { $regex: criteria, $options: 'i' } })
}

Model.find().sort({ Model.prop: -1 });

Model.find().limit(3);

Model.findByIdAndUpdate(id, { $push: { Model.prop1: data }, $inc:{Model.prop2: -1} });

userSchema.virtual('fullName'). get(function() { return ${this.firstName} ${this.lastName}; }). set(function(value) { const firstName = value.substring(0, value.indexOf(' ')); const lastName = value.substring(value.indexOf(' ') + 1); this.set({ firstName, lastName }); });

validate: { validator: function(value){ return value.startsWith('http://') || value.startsWith('https://'); }, message: 'URL is Invalid!' }

match: [/^https?:///, 'Invalid URL!'],

    if (/(http(s?)):\/\//i.test(imageUrl) === false) {
        throw new Error('Invalid image URL!')
    }
validate: [/(http(s?)):///i, 'The photo image should start with http:// or https://']

validate: /^((http(s?))://).+(.jpg|.png|.jpeg)$/i

exports.getThree = () => Housing.find().sort({ _id: -1 }).limit(3)

Housing.find().sort({ _id: 1 }).limit(3)

Model.update; updateOne; findOneAnd Update; findByIdAndUpdate(id,{update:data},{runValidators: true})
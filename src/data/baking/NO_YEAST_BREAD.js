import { measurements, ingredients } from '../../constants';
import pic1 from '../../images/baking/no_yeast_bread.jpg';

const INGREDIENTS = [
    {
        sectionName: "bread",
        ingredients: [
            {
                name: ingredients.PLAIN_FLOUR,
                quantity: 400,
                measurement: measurements.GRAM
            },
            {
                name: ingredients.BAKING_POWDER,
                quantity: 1,
                measurement: measurements.TABLESPOON
            }, {
                name: ingredients.SALT,
                quantity: 1,
                measurement: measurements.TEASPOON
            }, {
                name: ingredients.OAT_MILK,
                quantity: 200,
                measurement: measurements.MILLILITRE
            }, {
                name: ingredients.SUNFLOWER_OIL,
                quantity: 45,
                measurement: measurements.MILLILITRE
            }
        ]
    }, {
        sectionName: "fillings",
        ingredients: [
            {
                name: ingredients.FETA,
                quantity: 60,
                measurement: measurements.GRAM
            }, {
                name: ingredients.GREEN_OLIVES,
                quantity: 35,
                measurement: measurements.GRAM
            }, {
                name: ingredients.JALAPENOS,
                quantity: 20,
                measurement: measurements.GRAM
            }
        ]
    }
]

const METHOD = [
    {
        sectionName: "making the dough",
        steps: [
            {
                step: 1,
                description: "Mix the flour, salt and baking powder together. Add the milk in 1 go and use your hands to shape the dough into a ball. It should have a sticky consistency."
            },{
                step: 2,
                description: "Separate the dough into 4 equal pieces, form into balls and place in an heat proof bowl."
            }, {
                step: 3,
                description: "To let the dough proove turn your oven on at the lowest temperature (I used 100 C) for 5 minutes. After the 5 minutes, turn the heat off, place the dough inside and leave it for 20/25 minutes."
            }
        ]
    }, {
        sectionName: "adding the filling",
        steps: [
            {
                step: 1,
                description: "Take the dough out of the oven. Use yout hands to stretch each ball out into a flat sheet. I also used a rolling pin to flatten it out."
            },{
                step: 2,
                description: "Put the filling on each of the rolled sheets and fold over to cover the filling. You can use lots of different ingredients for the fillings, and combine them as you wish! I made 4 different breads filled with: (1) feta, (2) olives, (3) jalapenos, (4) olives and feta - this one was my favorite. Feta works particularly well since it gives a lot of flavor and you could easily mix with something else."
            }
        ]
    }, {
        sectionName: "baking",
        steps: [
            {
                step: 1,
                description: "Pre-heat the oven to 180 C"
            }, {
                step: 2,
                description: "Generously oil a tray and place the breads on top. Brush the top of the bread with oil"
            }, {
                step: 3,
                description: "Bake for 35-45 minutes. Keep an eye on them - when they look crispy take them out! You can also poke a toothpick through to check they are done (it should come out dry)"
            }, {
                step: 4,
                description: "EAT! These breads are definitely best when eaten warm!"
            }
        ]
    }
]

export default {
    NO_YEAST_BREAD: {
        title: "yeast-free bread",
        ingredients: INGREDIENTS,
        method: METHOD,
        image: pic1,
        isSectioned: true
    }
}
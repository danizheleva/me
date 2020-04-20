import { measurements, ingredients } from '../../constants';
import pic1 from '../../images/baking/banana_bread_2.jpg';

const INGREDIENTS = [
    {
        sectionName: "All",
        ingredients: [
            {
                name: ingredients.PLAIN_FLOUR,
                quantity: 230,
                measurement: measurements.GRAM
            }, {
                name: ingredients.BUTTER_UNSALTED,
                quantity: 75,
                measurement: measurements.GRAM
            }, {
                name: ingredients.SUGAR_WHITE,
                quantity: 200,
                measurement: measurements.GRAM
            }, {
                name: ingredients.BANANA,
                quantity: 200,
                measurement: measurements.GRAM
            }, {
                name: ingredients.WALNUTS,
                quantity: 75,
                measurement: measurements.GRAM
            }, {
                name: ingredients.CHOCOLATE_70,
                quantity: 67,
                measurement: measurements.GRAM
            }, {
                name: ingredients.EGG,
                quantity: 3,
                measurement: measurements.IETM
            }, {
                name: ingredients.BAKING_POWDER,
                quantity: 0.5,
                measurement: measurements.TEASPOON
            }
            , {
                name: ingredients.VANILLA,
                quantity: 3,
                measurement: measurements.IETM
            }
        ]
    }
]

const METHOD = [
    {
        step: 1,
        description: "Let the butter soften to room temperature, add all of the sugar to it and mix " +
            "using an electric mixer on medium speed for 3-4 minutes."
    }, {
        step: 2,
        description: "Mash up the bananas using a fork until they have a liquid like consistency. " +
            "Beat the eggs in a seperate bowl and combine with the banana. " +
            "Add the vanilla"
    }, {
        step: 3,
        description: "Add the banana mixture into the butter and mix on low/medium speed until combined. "
    }, {
        step: 4,
        description: "Add the baking powder to the flour and slowly sift 1/3 of the dry ingredients " +
            "into the wet at a time."
    }, {
        step: 5,
        description: "Chop up the walnuts and chocolate into a size you like, and mix them in"
    }, {
        step: 6,
        description: "Transfer to a baking tin - I used a rectangular bread loaf tin - and bake at 180 " +
            "C for 55 minutes"
    }, {
        step: 7,
        description: "Turn the oven off and let the bread sit in the oven for 15 more minutes. After that, " +
            "take it out and let it cool COMPLETELY before cutting. (Unless you have impatient housemates like I do - " +
            "in which case cut into slices and enjoy!)"
    },
]

export default {
    BANANA_BREAD: {
        title: "chocolate and walnut banana bread",
        ingredients: INGREDIENTS,
        method: METHOD,
        image: pic1,
        isSectioned: false,
    }
}
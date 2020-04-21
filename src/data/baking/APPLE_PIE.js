import { measurements, ingredients } from '../../constants';
import pic1 from '../../images/baking/apple_pie.jpg';

const INGREDIENTS = [
    {
        sectionName: "pastry",
        ingredients: [
            {
                name: ingredients.PLAIN_FLOUR,
                quantity: 315,
                measurement: measurements.GRAM
            },
            {
                name: ingredients.BUTTER_UNSALTED,
                quantity: 140,
                measurement: measurements.GRAM
            }, {
                name: ingredients.SALT,
                quantity: 1,
                measurement: measurements.TEASPOON
            }, {
                name: ingredients.WATER,
                quantity: 120,
                measurement: measurements.MILLILITRE
            }
        ]
    }, {
        sectionName: "salted caramel",
        ingredients: [
            {
                name: ingredients.SUGAR_WHITE,
                quantity: 200,
                measurement: measurements.GRAM
            }, {
                name: ingredients.BUTTER_SALTED,
                quantity: 90,
                measurement: measurements.GRAM
            }, {
                name: ingredients.CREAM_HEAVY,
                quantity: 120,
                measurement: measurements.MILLILITRE
            }, {
                name: ingredients.SALT,
                quantity: 1,
                measurement: measurements.TEASPOON
            },
        ]
    }, {
        sectionName: "pie filling",
        ingredients: [
            {
                name: ingredients.APPLE,
                quantity: 6,
                measurement: measurements.IETM
            },
            {
                name: ingredients.LEMON_JUICE,
                quantity: 30,
                measurement: measurements.MILLILITRE
            },
            {
                name: ingredients.SUGAR_WHITE,
                quantity: 100,
                measurement: measurements.GRAM
            },
            {
                name: ingredients.PLAIN_FLOUR,
                quantity: 30,
                measurement: measurements.GRAM
            },
            {
                name: ingredients.CINNAMON,
                quantity: 1.5,
                measurement: measurements.TEASPOON
            },
            {
                name: ingredients.NUTMEG,
                quantity: 0.25,
                measurement: measurements.TEASPOON
            },
            {
                name: ingredients.CLOVES_GROUND,
                quantity: 0.25,
                measurement: measurements.TEASPOON
            },
            {
                name: ingredients.EGG,
                quantity: 1,
                measurement: measurements.IETM
            },
            {
                name: ingredients.SUGAR_BROWN,
                quantity: 10,
                measurement: measurements.GRAM
            }
        ]
    }
]

const METHOD = [
    {
        sectionName: "pastry",
        steps: [
            {
                step: 1,
                description: "Crumble the butter into the floru and salt mixture, using your hands to bring it to a breadcrumb consistency. "
            }, {
                step: 2,
                description: "Slowly add the cold water and mix using a wooden spoon, (eventually it becomes easier to use your hands) " +
                    "until the dough holds its shape into a ball. Leave some water out if it becomes too wet. "
            }, {
                step: 3,
                description: "Form the dough into a ball, cut it in half, tightly wrap each half in plastic wrap and leave in the fridge " +
                    "for a minimum of 2 hours. (I left it overnight)"
            }
        ]
    }, {
        sectionName: "salted caramel",
        steps: [
            {
                step: 1,
                description: "In a saucepan heat the caster sugar over medium heat, stirring consistently. " +
                    "The sugar will first turn brown and clump into crystals, continue stirring untill these crystal melt and you are " +
                    "left with a brown liquid (about 5 mins) - dont worry about sugar crystalising at the sides of the pan and you spoon. "
            }, {
                step: 2,
                description: "Add the salted butter (chopped into squares) in one go, and stirr consistently. To begin with the butter and suggar " +
                    "won't want to combine, but keep on the heat and stirring until they do (about 2-3 minutes). " 
            }, {
                step: 3,
                description: "Very slowly pour the heavy cream and continue stirring. Once all the cream is added let the caramel come to a gentle " +
                            "boil and leave it boiling for 1 minute."
            },{
                step: 4,
                description: "Take it off the heat and strain to remove any sugar lumps. Leave to cool. Refrigerate in a glass container for up to 1 month, or freeze for up to 3."
            }
        ]
    }, {
        sectionName: "pie filling",
        steps: [
            {
                step: 1,
                description: "Chop the apples into half moons and put them in a large bowl along with the juice of 1 lemon, 100g white sugar " +
                    "30g flour, the nutmeg, cloves and cinamon"
            }
        ]
    }, {
        sectionName: "the pie",
        steps: [
            {
                step: 1,
                description: "Take one of your chilled pastry balls out of the fridge and roll out to the size of your pie dish. Grease the dish with " +
                    "butter and put the pastry on, trimming any parts which hang over the top. "
            },{
                step: 2,
                description: "Tip the apples into the pie dish - don't worry if they go over the top of the dish. " 
            },{
                step: 3,
                description: "Roll the remaining pastry ball out into the same size as the first, cut out long rectanguls from it and use these to create " +
                    "the lace on top of the pie."
            }, {
                step: 4,
                description: "Bake for 20 minutes at 200C then turn the oven down to 180-190C and bake for another 40-50 minutes."
            }, {
                step: 5,
                description: "Let the pie cool for ~4 hours before cutting."
            }
        ]
    }
]

export default {
    APPLE_PIE: {
        title: "salted caramel apple pie",
        ingredients: INGREDIENTS,
        method: METHOD,
        image: pic1,
        isSectioned: true
    }
}
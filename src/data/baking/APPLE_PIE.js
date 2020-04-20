import {measurements, ingredients } from '../../constants';
import pic1 from '../../images/baking/apple_pie.jpg';

const INGREDIENTS = [
    {
        sectionName: "Pastry",
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
            }
            // {
            //     name: ingredients.SALT,
            //     quantity: 1,
            //     measurement: measurements.TEASPOON
            // },
        ]
    },{
        sectionName: "Caramel",
        ingredients: [
            {
                name: ingredients.SUGAR_WHITE,
                quantity: 200,
                measurement: measurements.GRAM
            },{
                name: ingredients.BUTTER_UNSALTED,
                quantity: 90,
                measurement: measurements.GRAM
            },
            // {
            //     name: ingredients.HEAVY_CREAM,
            //     quantity: 120,
            //     measurement: measurements.MILLILITRE
            // },
            // {
            //     name: ingredients.SALT,
            //     quantity: 1,
            //     measurement: measurements.TEASPOON
            // },
        ]
    }
]

const METHOD = [
    {
        step: 1,
        description: "The Pastry: Mix the 315g flour an 1 teaspoon of salt. Add 140g unsalted " +
                    "butter at room temperature and use your fingers to combine it into a breadcrumb consistency. Slowly add " +
                    "120 ml of cold water and mix using a wooden spoon and your hands. Form the dough into a ball, cut it in half, " +
                    "tightly wrap each half in plastic wrap and leave in the fridge for a minimum of 2 hours. (I left it overnight)"
    },{
        step: 2,
        description: "The Salted Caramel: In a saucepan heat 200g caster sugar over medium heat, stirring consistently. " +
                     "The sugar will first turn brown and clump into crystals, continue stirring untill these crystal melt and you are " +
                     "left with a brown liquid (about 5 mins) - dont worry about sugar crystalising at the sides of the pan and you spoon. " +
                     "Add 90g of salted butter (chopped into squares) in one go, and stirr consistently. To begin with the butter and suggar " +
                     "will not want to combine, but keep on the heat and stirring until they do (about 2-3 minutes). After this, very slowly pour " +
                     "120ml heavy cream and continue stirring. Once all the cream is added let the caramel come to a gentle boil and leave it boiling " +
                     "for 1 minute. Take it off the heat and strain to remove any sugar lumps." 
    },{
        step: 3,
        description: "The Filling: Chop the apples into half moons and put them in a large bowl along with the juice of 1 lemon, 100g white sugar " +
                    "30g flour, the nutmeg, cloves and cinamon" 
    },{
        step: 4,
        description: "The Pie: Take one of your chilled pastry balls out of the fridge and roll out to the size of your pie dish. Grease the dish with " +
                     "butter and put the pastry on, trimming any parts which hang over the top. Tip the apples into the pie dish - don't worry if they go over the " +
                     "top of the dish. Roll the remaining pastry ball out into the same size as the first, cut out long rectanguls from it and use these to create " +
                     "the lace on top of the pie."
    },{
        step: 5,
        description: "Bake for 20 minutes at 200C then turn the oven down to 180-190C and bake for another 40-50 minutes."
    },{
        step: 6,
        description: "Let the pie cool for ~4 hours before cutting."
    }
]

export default {
    APPLE_PIE : { 
        title: "salted caramel apple pie",
        ingredients: INGREDIENTS,
        method: METHOD,
        image: pic1,
        isSectioned: true
    }
}
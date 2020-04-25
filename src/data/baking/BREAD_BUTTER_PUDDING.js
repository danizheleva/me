import { measurements, ingredients } from '../../constants';
import pic1 from '../../images/baking/bread_butter_pudding_whole.jpg';

const INGREDIENTS = [

    {
        sectionName: "All",
        ingredients: [
            {
                name: ingredients.SUGAR_BROWN,
                quantity: 115,
                measurement: measurements.GRAM
            },
            {
                name: ingredients.RAISINS,
                quantity: 75,
                measurement: measurements.GRAM
            },
            {
                name: ingredients.APPLE,
                quantity: 350,
                measurement: measurements.GRAM
            },
            {
                name: ingredients.NUTMEG,
                quantity: 1,
                measurement: measurements.TEASPOON
            },
            {
                name: ingredients.CINNAMON,
                quantity: 2,
                measurement: measurements.TEASPOON
            },
            {
                name: ingredients.BUTTER_UNSALTED,
                quantity: 120,
                measurement: measurements.GRAM
            },
            {
                name: ingredients.SOYA_UNSWEETENED,
                quantity: 400,
                measurement: measurements.MILLILITRE
            },
            {
                name: ingredients.EGG,
                quantity: 3,
                measurement: measurements.IETM
            },
            {
                name: ingredients.WHITE_BLOOMER,
                quantity: 300,
                measurement: measurements.GRAM
            }]
    }
]

const METHOD = [
    {
        sectionName: "All",
        steps: [
            {
                step: 1,
                description: "Soak the raisins in cold tea. Peel and slice the apples and keep them in cold water " +
                    "with a squeeze of lemon to stay fresh"
            }, {
                step: 2,
                description: "Add butter and milk to a saucepan and gently heat until butter has melted. Set aside to cool."
            }, {
                step: 3,
                description: "Whisk the eggs, sugar, cinnamon, nutmeg and vanilla in a bowl until combined. Add in the milk and whisk some more."
            }, {
                step: 4,
                description: "Tear the bread into pieces and throw into a greased bakign dish. Strain the raisins and apples " +
                    "and scatter both on top of the bread. Pour the milk mixture on top and sprinkle with brown sugar"
            }, {
                step: 5,
                description: "Bake for 30 minutes on 200 C"
            }
        ]
    }
]

export default {
    BREAD_PUDDING: {
        title: "apple bread and butter pudding",
        ingredients: INGREDIENTS,
        method: METHOD,
        image: pic1,
        isSectioned: false
    }
}
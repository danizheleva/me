import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    TEA: {
        displayName: "cold tea",
        nutrition: {
            quantity: 100,
            measurement: measurements.MILLILITRE,
            macronutrients: [
                { amount: 0, macro: macros.ENERGY },
                { amount: 0, macro: macros.CALORIES },
                { amount: 0, macro: macros.FATS },
                { amount: 0, macro: macros.SATURATES },
                { amount: 0, macro: macros.SUGARS },
                { amount: 0, macro: macros.SALT }
            ]
        }
    },
    LEMON_JUICE: {
        displayName: "fresh lemon juice",
        nutrition: {
            quantity: 1,
            measurement: measurements.IETM,
            macronutrients: [
                { amount: 0, macro: macros.ENERGY },
                { amount: 12, macro: macros.CALORIES },
                { amount: 0, macro: macros.FATS },
                { amount: 4.06, macro: macros.CARBS },
                { amount: 0, macro: macros.SATURATES },
                { amount: 0.18, macro: macros.PROTEIN },
                { amount: 1.13, macro: macros.SUGARS },
                { amount: 0, macro: macros.SALT }
            ]
        }
    },
    SOYA_UNSWEETENED: {
        displayName: "unsweetened soya milk",
        link: "https://www.tesco.com/groceries/en-GB/products/251523947",
        nutrition: {
            quantity: 100,
            measurement: measurements.MILLILITRE,
            macronutrients: [
                { amount: 177, macro: macros.ENERGY },
                { amount: 42, macro: macros.CALORIES },
                { amount: 1.9, macro: macros.FATS },
                { amount: 2.7, macro: macros.CARBS },
                { amount: 0.3, macro: macros.SATURATES },
                { amount: 3.3, macro: macros.PROTEIN },
                { amount: 2.5, macro: macros.SUGARS },
                { amount: 0.1, macro: macros.SALT },
                { amount: 0.6, macro: macros.FIBRE }
            ]
        }
    },
    OAT_MILK: {
        displayName: "oat milk",
        link: "https://www.tesco.com/groceries/en-GB/products/261746812",
        nutrition: {
            quantity: 100,
            measurement: measurements.MILLILITRE,
            macronutrients: [
                { amount: 193, macro: macros.ENERGY },
                { amount: 46, macro: macros.CALORIES },
                { amount: 1.5, macro: macros.FATS },
                { amount: 6.7, macro: macros.CARBS },
                { amount: 0.2, macro: macros.SATURATES },
                { amount: 1.0, macro: macros.PROTEIN },
                { amount: 4.1, macro: macros.SUGARS },
                { amount: 0.1, macro: macros.SALT },
                { amount: 0.8, macro: macros.FIBRE }
            ]
        }
    },
    SUNFLOWER_OIL: {
        displayName: "sunflower oil",
        link: "https://www.tesco.com/groceries/en-GB/products/254918228",
        nutrition: {
            quantity: 15,
            measurement: measurements.MILLILITRE,
            macronutrients: [
                { amount: 555, macro: macros.ENERGY },
                { amount: 135, macro: macros.CALORIES },
                { amount: 15, macro: macros.FATS },
                { amount: 1.7, macro: macros.SATURATES },
            ]
        }
    },
    WATER: {
        displayName: "water",
    }
}
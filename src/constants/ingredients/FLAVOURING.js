import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    VANILLA: {
        displayName: "Vanilla"
    },
    SALT: {
        displayName: "salt"
    },
    SUGAR_BROWN: {
        displayName: "brown sugar",
        nutrition: {
            quantity: 100,
            measurement: measurements.GRAM,
            macronutrients: [
                { amount: 1670, macro: macros.ENERGY },
                { amount: 393, macro: macros.CALORIES },
                { amount: 97.7, macro: macros.CARBS },
                { amount: 0.1, macro: macros.PROTEIN },
                { amount: 0.2, macro: macros.FATS },
                { amount: 0.1, macro: macros.SATURATES },
                { amount: 97.7, macro: macros.SUGARS },
                { amount: 0.1, macro: macros.SALT },
                { amount: 0.2, macro: macros.FIBRE }
            ]
        }
    },
    SUGAR_WHITE: {
        displayName: "white sugar",
        nutrition: {
            quantity: 100,
            link: "https://www.tesco.com/groceries/en-GB/products/287206934",
            measurement: measurements.GRAM,
            macronutrients: [
                { amount: 1700, macro: macros.ENERGY },
                { amount: 400, macro: macros.CALORIES },
                { amount: 100, macro: macros.CARBS },
                { amount: 0, macro: macros.PROTEIN },
                { amount: 0, macro: macros.FATS },
                { amount: 0, macro: macros.SATURATES },
                { amount: 100, macro: macros.SUGARS },
                { amount: 0, macro: macros.SALT },
                { amount: 0, macro: macros.FIBRE }
            ]
        }
    }
}
import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    EGG: {
        displayName: "egg",
        nutrition: {
            quantity: 1,
            measurement: measurements.IETM,
            macronutrients: [
                { amount: 648, macro: macros.ENERGY },
                { amount: 154, macro: macros.CALORIES },
                { amount: 0.5, macro: macros.CARBS },
                { amount: 15, macro: macros.PROTEIN },
                { amount: 10.6, macro: macros.FATS },
                { amount: 3.0, macro: macros.SATURATES },
                { amount: 0.0, macro: macros.SUGARS },
                { amount: 0.46, macro: macros.SALT },
                { amount: 0.0, macro: macros.FIBRE }
            ]
        }
    },
    GREEN_OLIVES: {
        displayName: "green olives",
        link: "https://www.tesco.com/groceries/en-GB/products/258251520",
        nutrition: {
            quantity: 100,
            measurement: measurements.GRAM,
            macronutrients: [
                { amount: 593, macro: macros.ENERGY },
                { amount: 144, macro: macros.CALORIES },
                { amount: 0.9, macro: macros.PROTEIN },
                { amount: 15, macro: macros.FATS },
                { amount: 2, macro: macros.SATURATES },
                { amount: 4, macro: macros.SALT },
                { amount: 2.8, macro: macros.FIBRE }
            ]
        }
    },
    JALAPENOS: {
        displayName: "jalapenos",
        link: "https://www.tesco.com/groceries/en-GB/products/256090557",
        nutrition: {
            quantity: 100,
            measurement: measurements.GRAM,
            macronutrients: [
                { amount: 102, macro: macros.ENERGY },
                { amount: 24, macro: macros.CALORIES },
                { amount: 3.4, macro: macros.CARBS },
                { amount: 1.3, macro: macros.PROTEIN },
                { amount: 0.3, macro: macros.FATS },
                { amount: 1.3, macro: macros.SUGARS },
                { amount: 1.1, macro: macros.SALT },
                { amount: 1.4, macro: macros.FIBRE }
            ]
        }
    }
}
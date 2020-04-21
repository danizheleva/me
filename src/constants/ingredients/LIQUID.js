import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    TEA: {
        displayName: "cold tea",
        nutrition: {    quantity: 100, 
                        measurement: measurements.MILLILITRE, 
                        macronutrients: [
                            {amount: 0,   macro: macros.ENERGY},
                            {amount: 0,    macro: macros.CALORIES},
                            {amount: 0,   macro: macros.FATS},
                            {amount: 0,   macro: macros.SATURATES},
                            {amount: 0,  macro: macros.SUGARS},
                            {amount: 0,   macro: macros.SALT}
                        ]
                    }
    },
    LEMON_JUICE: {
        displayName: "fresh lemon juice",
        nutrition: {    quantity: 1, 
                        measurement: measurements.IETM, 
                        macronutrients: [
                            {amount: 0,     macro: macros.ENERGY},
                            {amount: 12,    macro: macros.CALORIES},
                            {amount: 0,     macro: macros.FATS},
                            {amount: 4.06,  macro: macros.CARBS},
                            {amount: 0,     macro: macros.SATURATES},
                            {amount: 0.18,  macro: macros.PROTEIN},
                            {amount: 1.13,  macro: macros.SUGARS},
                            {amount: 0,     macro: macros.SALT}
                        ]
                    }
    },
    SOYA_UNSWEETENED: {
        displayName: "unsweetened soya mill",
        link: "https://www.tesco.com/groceries/en-GB/products/251523947",
        nutrition: {    quantity: 100, 
                        measurement: measurements.MILLILITRE, 
                        macronutrients: [
                            {amount: 177,   macro: macros.ENERGY},
                            {amount: 42,    macro: macros.CALORIES},
                            {amount: 1.9,   macro: macros.FATS},
                            {amount: 2.7,   macro: macros.CARBS},
                            {amount: 0.3,   macro: macros.SATURATES},
                            {amount: 3.3,   macro: macros.PROTEIN},
                            {amount: 2.5,   macro: macros.SUGARS},
                            {amount: 0.1,   macro: macros.SALT},
                            {amount: 0.6,   macro: macros.FIBRE}
                        ]
                    }
    },
    WATER: {
        displayName: "water",
    },
}
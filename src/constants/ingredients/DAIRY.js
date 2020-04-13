import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    BUTTER_UNSALTED: {
        displayName: "unsalted butter",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 3062,  macro: macros.ENERGY},
                            {amount: 745,   macro: macros.CALORIES},
                            {amount: 0.6,   macro: macros.CARBS},
                            {amount: 0.6,   macro: macros.PROTEIN},
                            {amount: 82.2,  macro: macros.FATS},
                            {amount: 52.1,  macro: macros.SATURATES},
                            {amount: 0.6,   macro: macros.SUGARS},
                            {amount: 0.1,   macro: macros.SALT},
                            {amount: 0.0,   macro: macros.FIBRE}
                        ]
                    }
    },
    BUTTER_PEANUT: {
        displayName: "peanut butter",
        link: "https://www.tesco.com/groceries/en-GB/products/292894630",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 2645,  macro: macros.ENERGY},
                            {amount: 632,   macro: macros.CALORIES},
                            {amount: 22.2,  macro: macros.CARBS},
                            {amount: 24.4,  macro: macros.PROTEIN},
                            {amount: 49.5,  macro: macros.FATS},
                            {amount: 8.3,   macro: macros.SATURATES},
                            {amount: 10.7,  macro: macros.SUGARS},
                            {amount: 1.1,   macro: macros.SALT}
                        ]
                    }
    }
}
import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    CINNAMON: {
        displayName: "cinnamon",
        link: "https://www.tesco.com/groceries/en-GB/products/254920403",
        nutrition: {    quantity: 0.5, 
                        measurement: measurements.TEASPOON, 
                        macronutrients: [
                            {amount: 13,   macro: macros.ENERGY},
                            {amount: 3,    macro: macros.CALORIES},
                            {amount: 0.3,  macro: macros.CARBS},
                            {amount: 0.1,   macro: macros.PROTEIN},
                            {amount: 0.1,   macro: macros.FATS},
                            {amount: 0.1,     macro: macros.SATURATES},
                            {amount: 0.1,  macro: macros.SUGARS},
                            {amount: 0.0,     macro: macros.SALT},
                            {amount: 0.7,   macro: macros.FIBRE}
                        ]
                    }
    },
    NUTMEG: {
        displayName: "nutmeg",
        link: "https://www.tesco.com/groceries/en-GB/products/256149956",
        nutrition: {    quantity: 1, 
                        measurement: measurements.TEASPOON, 
                        macronutrients: [
                            {amount: 0,   macro: macros.ENERGY},
                            {amount: 12,    macro: macros.CALORIES},
                            {amount: 1.1,  macro: macros.CARBS},
                            {amount: 0.1,   macro: macros.PROTEIN},
                            {amount: 0.8,   macro: macros.FATS},
                            {amount: 0.6,     macro: macros.SATURATES},
                            {amount: 0.6,  macro: macros.SUGARS},
                            {amount: 0.0,     macro: macros.SALT},
                            {amount: 0.0,   macro: macros.FIBRE}
                        ]
                    }
    },
    CLOVES_GROUND: {
        displayName: "ground cloves",
        link: "https://www.tesco.com/groceries/en-GB/products/287841498",
        nutrition: {    quantity: 0.5, 
                        measurement: measurements.TEASPOON, 
                        macronutrients: [
                            {amount: 79,    macro: macros.ENERGY},
                            {amount: 20,    macro: macros.CALORIES},
                            {amount: 1.4,   macro: macros.CARBS},
                            {amount: 0.3,   macro: macros.PROTEIN},
                            {amount: 1.0,   macro: macros.FATS},
                            {amount: 0.3,   macro: macros.SATURATES},
                            {amount: 0.1,   macro: macros.SUGARS},
                            {amount: 0.1,   macro: macros.SALT},
                            {amount: 1.7,   macro: macros.FIBRE}
                        ]
                    }
    },

    
}
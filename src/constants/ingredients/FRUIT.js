import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    APPLE: {
        displayName: "apple",
        link: "https://www.tesco.com/groceries/en-GB/products/284477542",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 226,   macro: macros.ENERGY},
                            {amount: 53,    macro: macros.CALORIES},
                            {amount: 11.8,  macro: macros.CARBS},
                            {amount: 0.4,   macro: macros.PROTEIN},
                            {amount: 0.1,   macro: macros.FATS},
                            {amount: 0,     macro: macros.SATURATES},
                            {amount: 15.7,  macro: macros.SUGARS},
                            {amount: 0,     macro: macros.SALT},
                            {amount: 1.8,   macro: macros.FIBRE}
                        ]
                    }
    },
    BANANA: {
        displayName: "banana",
        link: "https://www.tesco.com/groceries/en-GB/products/275280804",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 380,   macro: macros.ENERGY},
                            {amount: 90,    macro: macros.CALORIES},
                            {amount: 20.3,  macro: macros.CARBS},
                            {amount: 1.2,   macro: macros.PROTEIN},
                            {amount: 0.1,   macro: macros.FATS},
                            {amount: 0,     macro: macros.SATURATES},
                            {amount: 18.1,  macro: macros.SUGARS},
                            {amount: 0,     macro: macros.SALT},
                            {amount: 1.4,   macro: macros.FIBRE}
                        ]
                    }
    }
}
import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    WALNUTS: {
        displayName: "walnuts",
        link: "https://www.tesco.com/groceries/en-GB/products/271667182",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 2805,   macro: macros.ENERGY},
                            {amount: 679,    macro: macros.CALORIES},
                            {amount: 9.90,   macro: macros.CARBS},
                            {amount: 18.2,   macro: macros.PROTEIN},
                            {amount: 61.9,   macro: macros.FATS},
                            {amount: 5.6,    macro: macros.SATURATES},
                            {amount: 1.8,    macro: macros.SUGARS},
                            {amount: 0.0,    macro: macros.SALT},
                            {amount: 4.6,    macro: macros.FIBRE}
                        ]
                    }
    }
}
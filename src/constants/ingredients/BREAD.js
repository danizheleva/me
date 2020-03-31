import measurements from '../measurements.js';
import macros from '../macros.js';

export default {
    WHITE_BLOOMER: {
        displayName: "white bloomer bread",
        link: "https://www.tesco.com/groceries/en-GB/products/250675630",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 1034,   macro: macros.ENERGY},
                            {amount: 244,    macro: macros.CALORIES},
                            {amount: 47.5,   macro: macros.CARBS},
                            {amount: 8.5,    macro: macros.PROTEIN},
                            {amount: 1.6,    macro: macros.FATS},
                            {amount: 0.9,    macro: macros.SATURATES},
                            {amount: 2.6,    macro: macros.SUGARS},
                            {amount: 0.8,    macro: macros.SALT},
                            {amount: 2.8,    macro: macros.FIBRE}
                        ]
                    }
    }
}
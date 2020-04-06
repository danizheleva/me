import measurements from '../measurements.js';
import macros from '../macros.js';

export default { 
    CHOCOLATE_70: {
        displayName: "70% chocolate",
        link: "https://www.tesco.com/groceries/en-GB/products/259301725",
        nutrition: {    quantity: 100, 
                        measurement: measurements.GRAM, 
                        macronutrients: [
                            {amount: 2350,   macro: macros.ENERGY},
                            {amount: 566,    macro: macros.CALORIES},
                            {amount: 34.0,   macro: macros.CARBS},
                            {amount: 9.5,    macro: macros.PROTEIN},
                            {amount: 41,     macro: macros.FATS},
                            {amount: 24,     macro: macros.SATURATES},
                            {amount: 29,     macro: macros.SUGARS},
                            {amount: 0.1,    macro: macros.SALT},
                            {amount: 0,      macro: macros.FIBRE}
                        ]
                    }
    } 

}
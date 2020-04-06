import {measurements, ingredients } from '../../constants';
import pic1 from '../../images/baking/banana_bread_2.jpg';

const INGREDIENTS = [
    {
        ingredient: ingredients.PLAIN_FLOUR,
        quantity: 230,
        measurement: measurements.GRAM
    },{
        ingredient: ingredients.BUTTER_UNSALTED,
        quantity: 75,
        measurement: measurements.GRAM
    },{
        ingredient: ingredients.SUGAR_WHITE,
        quantity: 200,
        measurement: measurements.GRAM
    },{
        ingredient: ingredients.BANANA,
        quantity: 200,
        measurement: measurements.GRAM
    },{
        ingredient: ingredients.WALNUTS,
        quantity: 75,
        measurement: measurements.GRAM
    },{
        ingredient: ingredients.CHOCOLATE_70,
        quantity: 67,
        measurement: measurements.GRAM
    },{
        ingredient: ingredients.EGG,
        quantity: 3,
        measurement: measurements.IETM
    }
]

export default {
    BANANA_BREAD : { 
        title: "chocolate and walnut banana bread",
        ingredients: INGREDIENTS,
        method: "TODO",
        image: pic1
    }
}
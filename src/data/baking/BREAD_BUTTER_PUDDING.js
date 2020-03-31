import {measurements, ingredients } from '../../constants';
import pic1 from '../../images/baking/bread_butter_pudding_whole.jpg';

const INGREDIENTS = [
    {
        ingredient: ingredients.SUGAR_BROWN,
        quantity: 115,
        measurement: measurements.GRAM
    },
    {
        ingredient: ingredients.RAISINS,
        quantity: 75,
        measurement: measurements.GRAM
    },
    {
        ingredient: ingredients.APPLE,
        quantity: 350,
        measurement: measurements.GRAM
    },
    {
        ingredient: ingredients.NUTMEG,
        quantity: 1,
        measurement: measurements.TEASPOON
    },
    {
        ingredient: ingredients.CINNAMON,
        quantity: 2,
        measurement: measurements.TEASPOON
    },
    {
        ingredient: ingredients.BUTTER_UNSALTED,
        quantity: 120,
        measurement: measurements.GRAM
    },
    {
        ingredient: ingredients.SOYA_UNSWEETENED,
        quantity: 400,
        measurement: measurements.MILLILITRE
    },
    {
        ingredient: ingredients.EGG,
        quantity: 3,
        measurement: measurements.IETM
    },
    {
        ingredient: ingredients.WHITE_BLOOMER,
        quantity: 300,
        measurement: measurements.GRAM
    },

]

export default {
    BREAD_PUDDING: { 
        title: "apple bread and butter pudding",
        ingredients: INGREDIENTS,
        method: "TODO",
        image: pic1
    }
}
require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Jackets', sortOrder: 10},
    {name: 'Pants', sortOrder: 20},
    {name: 'Skis', sortOrder: 30},
    {name: 'Snowboards', sortOrder: 40},
    {name: 'Ski Boots', sortOrder: 50},
    {name: 'Snowboard Boots', sortOrder: 60},
    {name: 'Misc Outerwear', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Burton AK Cyclic Jacket', image: 'https://www.burton.com/static/product/W24/10002107250_8.png?impolicy=bglt&imwidth=485', category: categories[0], price: 5.95},
    {name: 'Helly Hansen Ridge Infinity Jacket', image: 'https://www.hellyhansen.com/media/catalog/product/6/5/65809_658-1-onbody1.jpg?auto=webp&format=pjpg&fit=cover&height=640&width=640', category: categories[0], price: 6.95},
    {name: 'Oakley Tc Reduct Jacket', image: 'https://assets2.oakley.com/cdn-record-files-pi/453210d1-ef37-440e-8dbe-af180118c41a/d93656c5-f23a-41db-acc9-b0120090595e/FOA404724__9YF_omfr1.png?impolicy=OO_heroxl', category: categories[0], price: 3.95},
    {name: 'Burton AK Cyclic Pants', image: 'https://www.burton.com/static/product/W24/10000110963_7.png?impolicy=bglt&imwidth=382', category: categories[1], price: 14.95},
    {name: 'Fried Shrimp', image: '🍤', category: categories[1], price: 13.95},
    {name: 'Whole Lobster', image: '🦞', category: categories[1], price: 25.95},
    {name: 'Taco', image: '🌮', category: categories[2], price: 1.95},
    {name: 'Burrito', image: '🌯', category: categories[2], price: 4.95},
    {name: 'Pizza Slice', image: '🍕', category: categories[3], price: 3.95},
    {name: 'Spaghetti', image: '🍝', category: categories[3], price: 7.95},
    {name: 'Garlic Bread', image: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fries', image: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad', image: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', image: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake', image: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard', image: '🍮', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake', image: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk', image: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', image: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', image: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer', image: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine', image: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();
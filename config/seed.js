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
    {name: 'Burton AK Cyclic Jacket', image: 'https://www.balmoralboards.com.au/cdn/shop/files/100021-651-Alternate-2_1200x.jpg?v=1698632886', category: categories[0], price: 489.45},
    {name: 'Helly Hansen Ridge Infinity Jacket', image: 'https://www.hellyhansen.com/media/catalog/product/6/5/65809_658-1-onbody1.jpg?auto=webp&format=pjpg&fit=cover&height=640&width=640', category: categories[0], price: 691.95},
    {name: 'Oakley Tc Reduct Jacket', image: 'https://assets2.oakley.com/cdn-record-files-pi/453210d1-ef37-440e-8dbe-af180118c41a/d93656c5-f23a-41db-acc9-b0120090595e/FOA404724__9YF_omfr1.png?impolicy=OO_heroxl', category: categories[0], price: 395.80},
    {name: 'Burton AK Cyclic Pants', image: 'https://www.burton.com/static/product/W24/10000110963_7.png?impolicy=bglt&imwidth=382', category: categories[1], price: 14.95},
    {name: 'Burton Ballast Pants', image: 'https://www.burton.com/static/product/W24/14991108963_3.png?impolicy=bglt&imwidth=485', category: categories[1], price: 13.95},
    {name: 'Volcom 5-Pocket Pants', image: 'https://www.volcom.com/cdn/shop/files/G1352416_BLK_23_1188x1584_crop_center.jpg?v=1692735164', category: categories[1], price: 25.95},
    {name: 'Atomic Bent 120', image: 'https://www.atomic.com/en-us/shop/media/catalog/product/article_images/AA0030340_/AA0030340__4806f14152b636b9d6d2634dc88b6bd8.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400', category: categories[2], price: 1.95},
    {name: 'Armada Whitewalker 116', image: 'https://comorsports.com/cdn/shop/files/210000075657-Armada-Whitewalker-116-Skis-2024.png?v=1694560005', category: categories[2], price: 4.95},
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
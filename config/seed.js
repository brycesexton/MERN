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
    {name: 'Bindings', sortOrder: 40},
    {name: 'Ski Boots', sortOrder: 50},
    {name: 'Goggles', sortOrder: 60},
    {name: 'Misc Outerwear', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'North Face Chakal Jacket', image: 'https://curated-upload.imgix.net/AgAAAB0At2NeegGxPy2KXRcq_qvESQ.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[0], price: 249.45},
    {name: 'Helly Hansen Ridge Infinity Jacket', image: 'https://www.hellyhansen.com/media/catalog/product/6/5/65809_658-1-onbody1.jpg?auto=webp&format=pjpg&fit=cover&height=640&width=640', category: categories[0], price: 691.95},
    {name: 'Oakley Tc Reduct Jacket', image: 'https://assets2.oakley.com/cdn-record-files-pi/453210d1-ef37-440e-8dbe-af180118c41a/d93656c5-f23a-41db-acc9-b0120090595e/FOA404724__9YF_omfr1.png?impolicy=OO_heroxl', category: categories[0], price: 395.80},
    {name: 'Burton AK Cyclic Pants', image: 'https://www.burton.com/static/product/W24/10000110963_7.png?impolicy=bglt&imwidth=382', category: categories[1], price: 335.95},
    {name: 'Burton Ballast Pants', image: 'https://www.burton.com/static/product/W24/14991108963_3.png?impolicy=bglt&imwidth=485', category: categories[1], price: 432.13},
    {name: 'Volcom 5-Pocket Pants', image: 'https://www.volcom.com/cdn/shop/files/G1352416_BLK_23_1188x1584_crop_center.jpg?v=1692735164', category: categories[1], price: 135.95},
    {name: 'Atomic Bent 120', image: 'https://www.atomic.com/en-us/shop/media/catalog/product/article_images/AA0030340_/AA0030340__6ba96acaddff87ce0358d3c99a6f3d2a.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400', category: categories[2], price: 849.95},
    {name: 'Black Crows Anima 115', image: 'https://curated-upload.imgix.net/AgAAAB0AgmpLp0R1MUW38jwU_s3Vdg.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[2], price: 799.96},
    {name: 'K2 Mindbender 99TI', image: 'https://i1.adis.ws/i/k2/k2_2324_mindbender-99ti_S230300504_2?w=412&fmt=webp&fmt.interlaced=true&bg=white&dpi=144', category: categories[2], price: 599.95},
    {name: 'Look Pivot 15 GW B95', image: 'https://cdn.look-bindings.com/uploads/cache/1600x650_decreased/uploads/medias/fcja012_pivot15gw_b95_raw.jpg', category: categories[3], price: 429.95},
    {name: 'Marker Griffon 13 ID', image: 'https://images.evo.com/imgp/700/177484/977997/marker-griffon-13-id-ski-bindings-.jpg', category: categories[3], price: 231.95},
    {name: 'K2 Method Boots', image: 'https://curated-upload.imgix.net/AgAAAB0ANG-yHSBrMHG8DV2jDi8big.jpg?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[4], price: 359.95},
    {name: 'Rossignol Alltrack Elite 130 Boots', image: 'https://curated-upload.imgix.net/AgAAAB0Aji9C7uhgNm2xq5Djp4fPlg.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[4], price: 469.95},
    {name: 'Dragon RVX Mag', image: 'https://cdn.skimag.com/wp-content/uploads/2023/10/Dragon-RVX-mag-otg_h.jpg?width=768', category: categories[5], price: 290.00},
    {name: 'Scott Sphere', image: 'https://cdn.skimag.com/wp-content/uploads/2023/10/scott-sphere-otg-amp-pro_h.jpg?width=768', category: categories[5], price: 190.95},
    {name: 'Atomic Four Pro HD', image: 'https://cdn.skimag.com/wp-content/uploads/2023/10/atomic-four-pro-hd-photo_h.jpg?width=768', category: categories[5], price: 229.95},
    {name: 'Strawberry Shortcake', image: '🍰', category: categories[6], price: 3.95},
    {name: 'Milk', image: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', image: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', image: '🍹', category: categories[6], price: 8.95},
  ]);

  console.log(items)

  process.exit();

})();
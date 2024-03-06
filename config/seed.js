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
    {name: 'Poles', sortOrder: 70},
    {name: 'Gloves & Mittens', sortOrder: 80},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'DC Anorak Jacket', image: 'https://curated-uploads.imgix.net/AgAAAB0ANB6OYpurMDGNFDok7nlfDg.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[0], price: 277.45},
    {name: 'Quiksilver Sycamore Jacket', image: 'https://curated-upload.imgix.net/AgAAAB0Axm0hgRqtPxqe3GfsW-LGuw.jpg?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[0], price: 208.95},
    {name: 'Oakley TC Reduct Jacket', image: 'https://assets2.oakley.com/cdn-record-files-pi/453210d1-ef37-440e-8dbe-af180118c41a/d93656c5-f23a-41db-acc9-b0120090595e/FOA404724__9YF_omfr1.png?impolicy=OO_heroxl', category: categories[0], price: 395.80},
    {name: 'Helly Hansen Sogn Bib Pants', image: 'https://curated-upload.imgix.net/AgAAAB0AxyWgCL83P0KCzGq5utKpNw.webp?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[1], price: 375.95},
    {name: 'Rossignol SKPR Bib Pants', image: 'https://curated-uploads.imgix.net/AgAAAB0A8eUENJQ_MiuxAcfNjoJLAw.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[1], price: 432.13},
    {name: 'DC Docile Bib Pants', image: 'https://curated-upload.imgix.net/AgAAAB0AiREhZgUuN8OZALOejaZhgg.jpg?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[1], price: 135.95},
    {name: 'Atomic Bent 120', image: 'https://www.atomic.com/en-us/shop/media/catalog/product/article_images/AA0030340_/AA0030340__6ba96acaddff87ce0358d3c99a6f3d2a.png?dpr=2&fit=bounds&orient=1&quality=70&optimize=medium&format=jpg&auto=webp&enable=upscale&bg-color=ffffff&width=2400&height=2400', category: categories[2], price: 849.95},
    {name: 'Black Crows Anima 115', image: 'https://curated-upload.imgix.net/AgAAAB0AgmpLp0R1MUW38jwU_s3Vdg.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[2], price: 799.96},
    {name: 'Faction Prodigy 3', image: 'https://curated-upload.imgix.net/AgAAAB0A_qZhmEgaNqGLpHYfnrCpOw.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[2], price: 559.95},
    {name: 'Look Pivot 15 GW B95', image: 'https://curated-upload.imgix.net/AgAAAB0AoZqYi70KOna4u3j_6wvZ9w.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[3], price: 429.95},
    {name: 'Salomon Strive 14 GW', image: 'https://curated-upload.imgix.net/AgAAAB0A2szp22oJNjuNEpWbB1zOzQ.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[3], price: 231.95},
    {name: 'K2 Method Boots', image: 'https://curated-upload.imgix.net/AgAAAB0ANG-yHSBrMHG8DV2jDi8big.jpg?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[4], price: 359.95},
    {name: 'K2 Mindbender 120 BOA Boots', image: 'https://curated-upload.imgix.net/AgAAAB0AD-OTy4fcNeSSR6fPXS6WHQ.jpg?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[4], price: 639.95},
    {name: 'Dragon RVX Mag', image: 'https://cdn.skimag.com/wp-content/uploads/2023/10/Dragon-RVX-mag-otg_h.jpg?width=768', category: categories[5], price: 290.00},
    {name: 'Oakley Prizm Miner', image: 'https://curated-upload.imgix.net/AgAAAB0ADcUZgNr2P0aviSDtd5Q5Ig.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[5], price: 190.95},
    {name: 'Atomic Four Pro HD', image: 'https://cdn.skimag.com/wp-content/uploads/2023/10/atomic-four-pro-hd-photo_h.jpg?width=768', category: categories[5], price: 229.98},
    {name: 'Black Crows Meta Poles', image: 'https://curated-upload.imgix.net/AgAAAB0AMqiUrkoXPI-fWP5P22edHw.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[6], price: 59.95},
    {name: 'Salomon Hacker Poles', image: 'https://curated-upload.imgix.net/AgAAAB0AD3W2TVj4PCaK21nWGBLihQ.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[6], price: 49.95},
    {name: 'Dakine Scout Mittens', image: 'https://curated-upload.imgix.net/AgAAAB0ASsl0yHv0PeKYKTDPKtFSXQ.webp?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[7], price: 45.50},
    {name: 'DC Franchise Gloves', image: 'https://curated-upload.imgix.net/AgAAAB0AF25wsDtwP7y1oFRtH9L59g.jpg?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ixlib=react-9.4.0&w=2066', category: categories[7], price: 49.95},
  ]);

  console.log(items)

  process.exit();

})();
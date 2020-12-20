const fs = require ('fs');
const path = require ('path');

let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), { encoding: 'utf8'});
products = JSON.parse(products);

module.exports = {
    root: function(req, res) {
        const visitados = products.filter ( item => item.category === 'visited');
        const inSale = products.filter ( item => item.category === 'in-sale');
        res.render('index', { visitados, inSale });
      },
    detail: function(req, res, next) {
      const detalle = products.filter ( item =>  item.id == req.params.id )
      res.render('./products/products', { detalle });
    }
}
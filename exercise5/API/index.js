const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const productData = require('./data.json');

app.use(cors());


app.use(bodyParser.json());





  //get all products
app.get('/product', (req, res) => {
    res.json(productData);
  })


  //delete product by id
  app.get('/product/delete/:id', (req, res) => {

    const result = productData.items.findIndex(productData => productData.id === req.params.id)
    if (result !== -1) {
      productData.items.splice(result, 1);
      res.send("product deleted")
    } else {
      res.send("No product found. Check product ID")
    }
    })

  // add new product
  app.post('/product', (req, res) => {
    console.log("creating new product");
    productData.items.push({
        id:   productData.items.length + 1,
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        image: req.body.image,
        desc: req.body.desc
    })
    console.log(productData);
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const db = require("../../database/models");

const controller ={

    list: async function(req, res) {
        try{
          let products = await db.product.findAll();

          let categorys = await db.category.findAll()

          let destacado = await db.product.findAll({
            where: {category_id: 1}
          })
          let deporte = await db.product.findAll({
            where: { category_id: 2 }
          })
          let hombre = await db.product.findAll({
            where: { category_id: 3 }
          })
          let mujer = await db.product.findAll({
            where: { category_id: 4 }
          })
          let niño = await db.product.findAll({
            where: { category_id: 5 }
          })
          Promise.all([ products, categorys, destacado, deporte, hombre, mujer, niño])
          return  res.status(200).json({
            count: products.length,
            countByCategory:{
            categorys: categorys.length,
            destacado : destacado.length,
            deporte : deporte.length,
            hombre : hombre.length,
            mujer :mujer.length,
            niño : niño.length
          },
            data: products,
            status: 200 
          })
        }catch (error) {
          console.log(error);
        }
      },
    
      detail: (req, res) => {
        db.product
          .findByPk(req.params.id, {
            attributes:['product_id', 'product_name', 'product_description', 'product_price', 'product_image', 'image' ]
          })
            .then(product => {
              return res.status(200).json({
                data: product,
                status: 200
              })
            })
      },

      lastProduct: (req, res) => {
        db.product.findAll(
            {
                attributes: ['product_id', 'product_name', 'product_description', 'product_price', 'product_image', 'category_id','image']
            }
        )
            .then(product => {

                //console.log(product);
                let lastProduct = product.pop()
                //console.log(lastProduct);
                res
                    .status(200)
                    .json({
                        data: lastProduct
                    })
            })
    }
};

module.exports = controller;
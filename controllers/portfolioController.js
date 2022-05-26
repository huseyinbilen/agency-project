const Item = require('../models/Item');

exports.getPortfolio = async (req, res) => {
    try {
        const items = await Item.find();
        console.log(items);
        res.status(200).render('index', {
            items
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
  };

  exports.addNewItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        console.log(req.body);
        res.redirect('/');
        // res.status(200).render('index');
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
          });
    }
  };
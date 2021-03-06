const Stock = require('../models/Stock');


exports.showHome = async (req, res) => {
  const stock = await Stock.findOne({});
  const defaultStock = { companies: ['aapl'] };

  // companies property not empty
  const { companies } = stock.companies.length ? stock : defaultStock;

  res.render('index', {
    companyNames: companies,
    companyArray: JSON.stringify(companies)
  });
};


exports.addStock = async (req, res) => {
  const companyStock = req.params.company;
  let stock = await Stock.findOne({});

  // if no document; create new document
  if (!stock) {
    stock = new Stock();
  }

  // stock already exists
  if (stock.companies.includes(companyStock)) {
    res.send('Stock already exists');
    return;
  }

  stock.companies.push(companyStock);
  const updated = await stock.save();
  res.json(updated);
};


exports.removeStock = async (req, res) => {
  const companyStock = req.params.company;

  const stock = await Stock.findOneAndUpdate(
    {},
    {
      $pull: { companies: companyStock }
    },
    { new: true }
  );
  res.json(stock);
};

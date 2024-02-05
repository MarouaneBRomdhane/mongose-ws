const products = require("../Model/Model");
const stripe = require("stripe");
const stripeSecretKey= stripe("sk_test_51OcmN6E49GlEYmIXu8Z9TvtidtZZDasqLrVObzakkkbrrhHK0aK04OJOvt5JjcjjEx65amPturtoZLkvghidgmOX00wXGmcAa1")
exports.createproduct = async (req, res) => {
  try {
    const product = new products(req.body);
    await product.save();
    res.status(200).send({ message: "product has been created!", products });
  } catch (error) {
    res.status(500).send({ message: "product creation has failed!" });
  }
};
exports.getproduct = async (req, res) => {
  try {
    const product = await products.find();

    res
      .status(200)
      .send({ message: "products has been found!", all_product: products }); //res.data in the payload for from the action
  } catch (error) {
    res.status(500).send({ message: "products wasn't found!" });
  }
};
exports.updateproduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await products.findByIdAndUpdate(id, { $set: req.body });

    res
      .status(200)
      .send({ message: "product has been updated!", product_update: products });
  } catch (error) {
    res.status(500).send({ message: "product has failed to update!" });
  }
};
exports.payment = async (req, res) => {
  const items = req.body.cart.map((item) => ({
    price_data: {
      currency: "usd",
      unit_amount: item.product.price * 100,
      product_data: {
        title: item.product.title,
        description: item.product.description,
        image: item.product.image,
      },
      quantity: item.quantity,
    },
  }));
  const session = await stripeScretKey.checkout.sessions.create({
    items,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/rejected",

  });
  res.send({url:session.url})
};
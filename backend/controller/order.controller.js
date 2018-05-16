const Order = require('../models/order');
const Order2 = require('../models/order2');
/**
 * @module Order
 */
module.exports = {

  /**
   * Function to get all orders
   * @returns {Array} - List of orders
   */
  list: (req, res) => {
    Order.find({}, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },
  /**
   * Function to get specified order detalis
   * @returns {Array} - List of ordered products
   */
  detalis: (req, res) => {
    Order2.find({
      orderId: req.params.id,
    }, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  /**
   * Functioon to find an order
   * @param {Number} id - The id property of the order
   * @returns {Object} - The selected order
   */
  find: (req, res) => {
    Order.findById(req.params.id, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },


  /**
   * Function to create a new order
   * @returns {Object} - The created order
   */
  create: (req, res) => {
    Order.create(req.body, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },
  /**
   * Function to create a new order
   * @returns {Object} - The created order
   */
  createOne: (req, res) => {
    Order2.create(req.body, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  /**
   * Function to update an order
   * @param {Number} id - The id property of the order
   * @returns {Object} - The order before the update
   */
  update: (req, res) => {
    Order.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },
  /**
   * Function to update an order
   * @param {Number} id - The id property of the order
   * @returns {Object} - The order before the update
   */
  updateOne: (req, res) => {
    Order2.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  /**
   * Functiopn to delete on order
   * @param {String} id - The id property of the order
   * @returns {Object} - The deleted order
   */
  remove: (req, res) => {
    Order.findByIdAndRemove(req.params.id, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },
  /**
   * Functiopn to delete on order
   * @param {String} id - The id property of the order
   * @returns {Object} - The deleted order
   */
  removeOne: (req, res) => {
    Order2.findByIdAndRemove(req.params.id, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },
};
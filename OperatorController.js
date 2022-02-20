import slug from "slug";
import Operator from "./Operator.js";

class OperatorController {
  async create(req, res) {
    try {
      const {name, img, color, isUserCreated} = req.body;
      const operator = await Operator.create({name, img, color, slug: slug(name), isUserCreated})
      res.json(operator)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    res.json(await Operator.find({}, {_id: 0, __v: 0}))
  }

  async getOne(req, res) {
    const {slug} = req.params;
    const operator = await Operator.findOne({slug}, {_id: 0, __v: 0});
    if (operator) {
      res.json(operator)
    } else {
      res.sendStatus(404)
    }
  }
}

export default new OperatorController();
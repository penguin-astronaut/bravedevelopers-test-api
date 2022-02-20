import slug from "slug";
import Operator from "./Operator.js";

class OperatorController {
  async create(req, res) {
    try {
      const {name, img, color} = req.body;
      const operator = await Operator.create({name, img, color, slug: slug(name)})
      res.json(operator)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    res.json(await Operator.find())
  }

  async getOne(req, res) {
    const {slug} = req.params;
    const operator = await Operator.find({slug});
    if (operator.length !== 0) {
      res.json()
    } else {
      res.sendStatus(404)
    }
  }
}

export default new OperatorController();
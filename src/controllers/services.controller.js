import Service from "../models/service.model.js";

export const createService = async (req, res) => {
  try {
    //TODO: add authorized user to onlu create services
    const { name, date } = req.body;
    const newService = new Service({
      name,
      date,
    });
    const savedService = await newService.save();
    res.json(savedService);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrog" });
  }
};

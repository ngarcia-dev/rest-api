import Service from "../models/service.model.js";

export const createService = async (req, res) => {
  try {
    //TODO: add authorized user to onlu create services
    const { name } = req.body;
    const newService = new Service({
      name,
    });
    const savedService = await newService.save();
    res.json(savedService);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  } catch (error) {
    return res.status(404).json({ message: "Service not found" });
  }
};

export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  } catch (error) {
    return res.status(404).json({ message: "Service not found" });
  }
};

export const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Service not found" });
  }
};

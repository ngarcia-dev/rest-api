import Ticket from "../models/ticket.model.js";
import Dependency from "../models/dependency.model.js";

export const createTicket = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      dependency,
      service,
      receiver,
      priority,
      status,
    } = req.body;

    const dependencyExists = await Dependency.findById(dependency);

    const serviceBelongs = dependencyExists.services.some((servicio) =>
      servicio.equals(service)
    );

    if (!serviceBelongs)
      return res.status(404).json({
        message: "The service does not belong to the selected dependency",
      });

    const newTicket = new Ticket({
      title,
      description,
      date,
      dependency,
      service,
      receiver,
      priority,
      status,
      user: req.user.id,
    });
    const savedTicket = await newTicket.save();
    res.json(savedTicket);
  } catch (error) {
    return res.status(500).json({ message: "Dependency not found" });
  }
};

export const getTickets = async (req, res) => {
  try {
    const staff = await Dependency.findOne({
      staff: req.user.id,
    });
    const staffId = staff ? staff._id : null;

    const tickets = await Ticket.find({
      $or: [
        { user: req.user.id },
        { receiver: req.user.id },
        { dependency: staffId },
      ],
    }).populate("user receiver dependency service");
    res.json(tickets);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate(
      "user receiver dependency service"
    );
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.json(ticket);
  } catch (error) {
    return res.status(404).json({ message: "Ticket not found" });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const updateTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updateTicket)
      return res.status(404).json({ message: "Ticket not found" });
    res.json(updateTicket);
  } catch (error) {
    return res.status(404).json({ messege: "Ticket not found" });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
    if (!deletedTicket)
      return res.status(404).json({ message: "Ticket not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ messege: "Ticket not found" });
  }
};

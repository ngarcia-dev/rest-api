import Ticket from "../models/ticket.model.js";

export const createTicket = async (req, res) => {
  try {
    //* Receiver added for create ticket
    const { title, description, date, dependency, service, receiver } =
      req.body;
    const newTicket = new Ticket({
      title,
      description,
      date,
      dependency,
      service,
      receiver,
      user: req.user.id,
    });
    const savedTicket = await newTicket.save();
    res.json(savedTicket);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getTickets = async (req, res, next) => {
  try {
    const tickets = await Ticket.find({
      user: req.user.id,
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

import Role from "../models/role.model.js";
import Service from "../models/service.model.js";
import State from "../models/state.model.js";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

export const createServices = async () => {
  try {
    const count = await Service.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new Service({ name: "Software" }).save(),
      new Service({ name: "Hardware" }).save(),
      new Service({ name: "Networking" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

export const createState = async () => {
  try {
    const count = await State.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new State({ name: "Pending" }).save(),
      new State({ name: "Approved" }).save(),
      new State({ name: "Rejected" }).save(),
      new State({ name: "Returned" }).save(),
      new State({ name: "Finished" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
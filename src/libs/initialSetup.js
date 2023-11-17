import Role from "../models/role.model.js";
import Service from "../models/service.model.js";

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
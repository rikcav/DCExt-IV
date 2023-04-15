import { create, get, getId } from "../controllers/autism";
const autism = (app) => {
  //create
  app.post("/autism/create", create);
  //getAll
  app.get("/autism/get", get)
  //getById
  app.get("/autism/get/:id", getId)
};

export default autism;

import { create, get, getId } from "../controllers/disabled";
const disabled = (app) => {
  //create
  app.post("/disabled/create", create);
  //getAll
  app.get("/disabled/get", get)
  //getById
  app.get("/disabled/get/:id", getId)
};

export default disabled;

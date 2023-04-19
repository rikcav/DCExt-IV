import { create, get, getId } from "../controllers/elder";
const elder = (app) => {
  //create
  app.post("/elder/create", create);
  //getAll
  app.get("/elder/get", get)
  //getById
  app.get("/elder/get/:id", getId)
};

export default elder;

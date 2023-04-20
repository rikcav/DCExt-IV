import { create, get, getId, getCategory } from "../controllers/elder";
const elder = (app) => {
  //create
  app.post("/elder/create", create);
  //getAll
  app.get("/elder/get", get)
  //getById
  app.get("/elder/get/:id", getId)
  //betByCategory
  app.get("/elder/get/category/:category", getCategory)
};

export default elder;

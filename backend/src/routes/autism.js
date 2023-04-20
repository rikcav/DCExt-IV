import { create, get, getId, getCategory } from "../controllers/autism";
const autism = (app) => {
  //create
  app.post("/autism/create", create);
  //getAll
  app.get("/autism/get", get)
  //getById
  app.get("/autism/get/:id", getId)
  //betByCategory
  app.get("/autism/get/category/:category", getCategory)
};

export default autism;

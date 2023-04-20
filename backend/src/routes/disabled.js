import { create, get, getId, getCategory } from "../controllers/disabled";
const disabled = (app) => {
  //create
  app.post("/disabled/create", create);
  //getAll
  app.get("/disabled/get", get)
  //getById
  app.get("/disabled/get/:id", getId)
  //betByCategory
  app.get("/disabled/get/category/:category",getCategory)
};

export default disabled;

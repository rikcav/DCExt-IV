import { create, get, getId, getCategory } from "../controllers/adhd";
const adhd = (app) => {
  //create
  app.post("/adhd/create", create);
  //getAll
  app.get("/adhd/get", get)
  //getById
  app.get("/adhd/get/:id", getId)
  //betByCategory
  app.get("/adhd/get/category/:category", getCategory)
};

export default adhd;

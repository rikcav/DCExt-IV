import { create, get, getId } from "../controllers/adhd";
const adhd = (app) => {
  //create
  app.post("/adhd/create", create);
  //getAll
  app.get("/adhd/get", get)
  //getById
  app.get("/adhd/get/:id", getId)
};

export default adhd;

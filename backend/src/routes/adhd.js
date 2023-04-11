import { create } from "../controllers/adhd";
const adhd = (app) => {
  app.post("/adhd/create", create);
};

export default adhd;

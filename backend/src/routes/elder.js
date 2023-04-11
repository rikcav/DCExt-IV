import { create } from "../controllers/elder";
const elder = (app) => {
  app.post("/elder/create", create);
};

export default elder;

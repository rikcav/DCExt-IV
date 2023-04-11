import { create } from "../controllers/disabled";
const disabled = (app) => {
  app.post("/disabled/create", create);
};

export default disabled;

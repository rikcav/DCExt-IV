import { create } from "../controllers/autism";
const autism = (app) => {
  app.post("/autism/create", create);
};

export default autism;

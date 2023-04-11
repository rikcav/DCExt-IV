import adhd from "./adhd";
import autism from "./autism";
import elder from "./elder";
import disabled from "./disabled";

const routes = (app) => {
  adhd(app);
  autism(app);
  elder(app);
  disabled(app);
};

export default routes;

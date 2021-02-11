import React, { Suspense,lazy } from "react";
import { Redirect, Switch,Route} from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { DashboardPage } from "./pages/DashboardPage";
// import IndexPage from "./modules/Index/IndexPage"

const IndexPage = lazy(() =>
  import("./modules/Index/IndexPage")
);

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <Route path="/index" component={IndexPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}

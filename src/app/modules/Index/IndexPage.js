import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../../../_metronic/layout";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";

export default function IndexPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/index"
            to="index/section_1"
          />
        }
        <ContentRoute path="/index/section_1" component={Section1} />
        <ContentRoute path="/index/section_2" component={Section2} />
        <ContentRoute path="/index/section_3" component={Section3} />
        <ContentRoute path="/index/section_4" component={Section4} />
        <ContentRoute path="/index/section_5" component={Section5} />
      </Switch>
    </Suspense>
  );
}

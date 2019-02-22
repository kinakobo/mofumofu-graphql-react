import * as React from "react";
import { Query } from "react-apollo";
import allLinksQuery from "./queries/allLinksQuery";
import { AllLinksQuery_allLinks, AllLinksQuery as AllLinksQueryType } from "./queries/types/AllLinksQuery";

class AllLinksQuery extends Query<AllLinksQueryType, AllLinksQuery_allLinks> {}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>AllLinksQuery</h1>
        <AllLinksQuery query={allLinksQuery}>
          {({ loading, data }) => {
            if (loading) {
              return <div>Loading...</div>;
            }

            return (
              <React.Fragment>
                <code>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </code>
              </React.Fragment>
            );
          }}
        </AllLinksQuery>
      </div>
    );
  }
}

import * as React from "react";
import { Query, Mutation } from "react-apollo";
import allLinksQuery from "./queries/allLinksQuery";
import createLinkMutation from "./queries/createLinkMutation";
import { AllLinksQuery_allLinks, AllLinksQuery as AllLinksQueryType } from "./queries/types/AllLinksQuery";

class AllLinksQuery extends Query<AllLinksQueryType, AllLinksQuery_allLinks> {}

interface State {
  url: string;
  description: string;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {url: "", description: ""}

    this.handleUrl = this.handleUrl.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
  }

  handleUrl(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({url: e.target.value})
  }

  handleDescription(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({description: e.target.value})
  }

  render() {
    const { url, description} = this.state;

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

        <div>
          <input
            value={url}
            onChange={this.handleUrl}
            type="text"
            placeholder="The URL for the link"
          />
          <input
            value={description}
            onChange={this.handleDescription}
            type="text"
            placeholder="A description for the link"
          />
        </div>
        <Mutation mutation={createLinkMutation} variables={{ description, url }}>
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

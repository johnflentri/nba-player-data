import React from "react";
import LikeCounter from "./LikeCounter"
export default class Feed extends React.Component {
  // the initial state
  state = {
    loading: true,
    data: []
  };
  // ...
  componentDidMount() {
    return fetch("https://www.balldontlie.io/api/v1/players")
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          data
        });
      });
    // (1) fetch some data (hopefully, something resembling a list of articles)
    // (2) put it in component local state (as per the shape discussed above)
    // (3) ...and if the loading fails, set an error state like discussed above
  }
  render() {
    // remember there are three different states the
    //  component can be in: loading the todos,
    //  successfully loaded, or errored
    if (this.state.loading) {
      return <div>"Loading"</div>;
    } else if (this.state.error) {
      return <div>"Error</div>;
    } else {
      return (
        <div class="feed"><ul>
          {this.state.data.data.map(player => {
            return <li>{player.first_name + " " + player.last_name}<LikeCounter /><br></br></li>
          })}
        </ul></div>
      )
    }
  }
}
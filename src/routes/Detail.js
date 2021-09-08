import React from "react";
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie__detail">
          <div className="detail__background">
            <img src={location.state.poster}></img>
          </div>
          <h2>{location.state.title}</h2>
          <h4>{location.state.year}</h4>
          <p>{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;

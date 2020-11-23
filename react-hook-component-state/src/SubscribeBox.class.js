import React, { Component } from "react";

export default class SubscribeBox extends Component {
  state = {
    subscribe: false,
    like: 0,
    dislike: 0,
  };
  handleSubscribe = () => {
    this.setState({
      subscribe: !this.state.subscribe,
    });
  };

  handleLike = () => {
    this.setState({
      like: this.state.like + 1,
    });
  };
  handleDislike = () => {
    this.setState((state) => ({
      dislike: state.dislike + 1,
    }));
  };
}

//@flow
import { h, Component } from "preact";
import { connect } from "react-redux";
import { Actions as CounterActions } from "../../reducers/counter";
import style from "./style.css";
import * as React from "react";

type Props = {
  counter: number,
  increment: () => mixed
};

class Profile extends React.Component<Props> {
  render({ user }, { time, count }) {
    return (
      <div class={style.profile}>
        <h1>State - {this.props.counter}</h1>
        <div>This is our state.</div>
        <p>
          <button onClick={this.props.increment}>
            Click Me to dispatch INCREMENT action
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.getIn(["counter", "value"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(CounterActions.increment());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

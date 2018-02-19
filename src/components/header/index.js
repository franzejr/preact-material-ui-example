import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>Preact + MaterialUI</h1>
        <nav>
          <Link activeClassName={style.active} href="/">
            First
          </Link>
          <Link activeClassName={style.active} href="/profile">
            Second
          </Link>
        </nav>
      </header>
    );
  }
}

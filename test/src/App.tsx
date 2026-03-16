import { Link } from "react-router-dom";
import { LinkButton } from "./components/LinkButton";

export const App = () => {
  const title: string = "Hello World!";

  return (
    <div className="App">
      <h1>{title}</h1>
      <Link to='/test'>
        ボタン
      </Link>
      <LinkButton text="ボタン" link="/test" />
    </div>
  );
}

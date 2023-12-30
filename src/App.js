import "./styles/App.scss";

import { Header } from "./containers/Header/Header";
import { Body } from "./containers/Body/Body";
import { Footer } from "./containers/Footer/Footer";

export function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

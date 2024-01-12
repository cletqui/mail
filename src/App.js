import "./styles/App.scss";

import { Header } from "./containers/Header";
import { Body } from "./containers/Body";
import { Footer } from "./containers/Footer";

export function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

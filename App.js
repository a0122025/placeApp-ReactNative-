import React from "react";
import { Provider } from "react-redux";
import ConfigStore from "./src/store/config";
import MainComponent from "./src/components/main";

export default class App extends React.Component {
  render() {
    const myStore = ConfigStore();
    console.log("testing");
    return (
      <Provider store={myStore}>
        <MainComponent />
      </Provider>
    );
  }
}

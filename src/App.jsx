import "./App.css";
import React from "react";
import Body from "./Netflix-App/Body";
import {Provider} from 'react-redux'
import appStore from './utils/appStore'

function App() {
  return (
    <div>
      <Provider store={appStore}>
         <Body/>
      </Provider>
     
    </div>
  );
}

export default App;

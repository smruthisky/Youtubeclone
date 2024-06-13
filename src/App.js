import "../src/App.css";
import Head from "./components/head";
import {Provider} from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
          <div >
            <Head/>
            <Body/>
          </div>
    </Provider>
   
  );
}

export default App;

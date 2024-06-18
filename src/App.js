import "../src/App.css";
import Head from "./components/head";
import {Provider} from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children: [
         {
          path :"/",
          element : <Maincontainer/>
         },
         {
          path: "watch",
          element:<Watchpage/>
         }
    ]

    
  }
])
function App() {
  
  return (
    <Provider store={store}>
          <div >
            <Head/>
           <RouterProvider router={appRouter}></RouterProvider>
          </div>
    </Provider>
   
  );
}

export default App;

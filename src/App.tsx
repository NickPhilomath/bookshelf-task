import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppRouter from "@/router/AppRouter";
import store from "@/redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

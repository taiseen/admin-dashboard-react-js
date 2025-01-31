import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnalyticsPage from "./pages/AnalyticsPage";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import SettingsPage from "./pages/SettingsPage";
import OrdersPage from "./pages/OrdersPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import Layout from "./components/Layout";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<OverviewPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/sales' element={<SalesPage />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/settings' element={<SettingsPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

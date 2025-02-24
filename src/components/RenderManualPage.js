import PropTypes from "prop-types";
import HomePage from "../pages/manual/HomePage";
import CustomerRegistration from "../pages/manual/CustomerRegistration";
import CarrierRegistration from "../pages/manual/CarrierRegistration";
import SupplierRegistration from "../pages/manual/SupplierRegistration";
import ProductDevelopment from "../pages/manual/ProductDevelopment";
import RegisterProductA from "../pages/manual/RegisterProductA";
import RegisterMP from "../pages/manual/RegisterMP";
import RegisterSA from "../pages/manual/RegisterSA";
import RegisterOM from "../pages/manual/RegisterOM";
import { ManualRegisterPage } from "../enums/manual/ManualRegisterPage";
import { ManualPage } from "../enums/manual/ManualPage";
import RegisterOperations from "../pages/manual/RegisterOperation";
import OrderPurchase from "../pages/manual/OrderPurchase";
import OrderSales from "../pages/manual/OrderSales";
import { ManualMovementsPage } from "../enums/manual/ManualMovementsPage";
import ProductionOrder from "../pages/manual/ProductionOrder";

function RenderManualPage({ page }) {
  switch (page) {
    case ManualPage.HOME_PAGE:
      return <HomePage />;
    case ManualRegisterPage.CARRIER_REGISTRATION:
      return <CarrierRegistration />;
    case ManualRegisterPage.CUSTOMER_REGISTRATION:
      return <CustomerRegistration />;
    case ManualRegisterPage.SUPPLIER_REGISTRATION:
      return <SupplierRegistration />;
    case ManualRegisterPage.PRODUCT_DEVELOPMENT:
      return <ProductDevelopment />;
    case ManualRegisterPage.PRODUCT_REGISTRATION:
      return <RegisterProductA />;
    case ManualRegisterPage.MP_REGISTRATION:
      return <RegisterMP />;
    case ManualRegisterPage.SA_REGISTRATION:
      return <RegisterSA />;
    case ManualRegisterPage.OM_REGISTRATION:
      return <RegisterOM />;
    case ManualRegisterPage.OPERATIONS_REGISTRATION:
      return <RegisterOperations />;
    case ManualMovementsPage.PURCHASE_ORDER:
      return <OrderPurchase />;
    case ManualMovementsPage.SALE_ORDER:
      return <OrderSales />;
    case ManualMovementsPage.PRODUCTION_ORDER:
      return <ProductionOrder />;
    default:
      return <h1>Page not found</h1>;
  }
}

RenderManualPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default RenderManualPage;

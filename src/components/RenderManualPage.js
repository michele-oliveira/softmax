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
import ProductionMap from "../pages/manual/ProductionMap";
import InvoiceIssue from "../pages/manual/InvoiceIssue";
import FactoryLaunch from "../pages/manual/FactoryLaunch";
import ShippingCNAB from "../pages/manual/ShippingCNAB";
import CheckControl from "../pages/manual/CheckControl";
import BankingControl from "../pages/manual/BankingControl";
import { ManualAcronyms } from "../enums/manual/ManualAcronyms";
import Acronyms from "../pages/manual/Acronyms";

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
    case ManualMovementsPage.PRODUCTION_MAP:
      return <ProductionMap />;
    case ManualMovementsPage.ISSUE_INVOICE:
      return <InvoiceIssue />;
    case ManualMovementsPage.LAUNCH_FACTORY:
      return <FactoryLaunch />;
    case ManualMovementsPage.CNAB_SHIPPING:
      return <ShippingCNAB />;
    case ManualMovementsPage.CONTROL_CHECK:
      return <CheckControl />;
    case ManualMovementsPage.CONTROL_BANKING:
      return <BankingControl />;
    case ManualAcronyms.ACRONYMS:
      return <Acronyms />;
    default:
      return <h1>Page not found</h1>;
  }
}

RenderManualPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default RenderManualPage;

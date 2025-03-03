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
import RegisterOperations from "../pages/manual/RegisterOperation";
import OrderPurchase from "../pages/manual/OrderPurchase";
import OrderSales from "../pages/manual/OrderSales";
import ProductionOrder from "../pages/manual/ProductionOrder";
import ProductionMap from "../pages/manual/ProductionMap";
import InvoiceIssue from "../pages/manual/InvoiceIssue";
import FactoryLaunch from "../pages/manual/FactoryLaunch";
import ShippingCNAB from "../pages/manual/ShippingCNAB";
import CheckControl from "../pages/manual/CheckControl";
import BankingControl from "../pages/manual/BankingControl";
import Acronyms from "../pages/manual/Acronyms";
import Taxpayer from "../pages/manual/Taxpayer";
import TableCST from "../pages/manual/TableCST";
import { ManualPage } from "../enums/manual/ManualPage";
import { ManualRegisterPage } from "../enums/manual/ManualRegisterPage";
import { ManualMovementsPage } from "../enums/manual/ManualMovementsPage";
import { ManualTaxPage } from "../enums/manual/ManualTaxPage";
import AccountsPayable from "../pages/manual/AccountsPayable";
import AccountsReceivable from "../pages/manual/AccountsReceivable";
import TableConfins from "../pages/manual/TableConfins";
import SuspensionExemption from "../pages/manual/SuspensionExemption";
import TaxDepartment from "../pages/manual/TaxDepartment";

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
    case ManualMovementsPage.ACCOUNTS_PAYABLE:
      return <AccountsPayable />;
    case ManualMovementsPage.ACCOUNTS_RECEIVABLE:
      return <AccountsReceivable />;
    case ManualPage.ACRONYMS:
      return <Acronyms />;
    case ManualTaxPage.TAX_DEPARTMENT:
      return <Taxpayer />;
    case ManualTaxPage.TABLE_CST:
      return <TableCST />;
    case ManualTaxPage.TABLE_SOURCE:
      return <TableConfins />;
    case ManualTaxPage.SUSPENSION_EXEMPTION:
      return <SuspensionExemption />;
    case ManualTaxPage.FINANCE_DEPARTMENT:
      return <TaxDepartment />;
    default:
      return <h1>Page not found</h1>;
  }
}

RenderManualPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default RenderManualPage;

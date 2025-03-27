import { Route, Routes, useNavigate } from "react-router-dom";
import ManualSideBar from "../components/ManualSideBar";
import HomePage from "../pages/manual/HomePage";
import CarrierRegistration from "../pages/manual/CarrierRegistration";
import CustomerRegistration from "../pages/manual/CustomerRegistration";
import SupplierRegistration from "../pages/manual/SupplierRegistration";
import ProductDevelopment from "../pages/manual/ProductDevelopment";
import RegisterProductA from "../pages/manual/RegisterProductA";
import RegisterMP from "../pages/manual/RegisterMP";
import RegisterSA from "../pages/manual/RegisterSA";
import RegisterOM from "../pages/manual/RegisterOM";
import RegisterOperations from "./manual/RegisterOperations";
import OrderPurchase from "../pages/manual/OrderPurchase";
import OrderCollect from "../pages/manual/OrderCollect";
import OrderSales from "../pages/manual/OrderSales";
import ProductionOrder from "../pages/manual/ProductionOrder";
import ProductionMap from "../pages/manual/ProductionMap";
import InvoiceIssue from "../pages/manual/InvoiceIssue";
import FactoryLaunch from "../pages/manual/FactoryLaunch";
import ShippingCNAB from "../pages/manual/ShippingCNAB";
import CheckControl from "../pages/manual/CheckControl";
import BankingControl from "../pages/manual/BankingControl";
import AccountsPayable from "../pages/manual/AccountsPayable";
import AccountsReceivable from "../pages/manual/AccountsReceivable";
import RomaneioSale from "../pages/manual/RomaneioSale";
import Acronyms from "../pages/manual/Acronyms";
import Taxpayer from "../pages/manual/Taxpayer";
import TableCST from "../pages/manual/TableCST";
import TableConfins from "../pages/manual/TableConfins";
import SuspensionExemption from "../pages/manual/SuspensionExemption";
import TaxDepartment from "../pages/manual/TaxDepartment";
import Cnae from "../pages/manual/Cnae";
import { ManualPage } from "../enums/manual/ManualPage";
import { ManualRegisterPage } from "../enums/manual/ManualRegisterPage";
import { ManualMovementsPage } from "../enums/manual/ManualMovementsPage";
import { ManualTaxPage } from "../enums/manual/ManualTaxPage";

function Manual() {
  const navigate = useNavigate();

  const handleSelectPage = (page) => {
    navigate(`/manual${page}`);
  };

  return (
    <>
      <ManualSideBar selectPage={handleSelectPage} />
      <Routes>
        <Route path={ManualPage.HOME_PAGE} element={<HomePage />} />
        <Route
          path={ManualRegisterPage.CARRIER_REGISTRATION}
          element={<CarrierRegistration />}
        />
        <Route
          path={ManualRegisterPage.CUSTOMER_REGISTRATION}
          element={<CustomerRegistration />}
        />
        <Route
          path={ManualRegisterPage.SUPPLIER_REGISTRATION}
          element={<SupplierRegistration />}
        />
        <Route
          path={ManualRegisterPage.PRODUCT_DEVELOPMENT}
          element={<ProductDevelopment />}
        />
        <Route
          path={ManualRegisterPage.PRODUCT_REGISTRATION}
          element={<RegisterProductA />}
        />
        <Route
          path={ManualRegisterPage.MP_REGISTRATION}
          element={<RegisterMP />}
        />
        <Route
          path={ManualRegisterPage.SA_REGISTRATION}
          element={<RegisterSA />}
        />
        <Route
          path={ManualRegisterPage.OM_REGISTRATION}
          element={<RegisterOM />}
        />
        <Route
          path={ManualRegisterPage.OPERATIONS_REGISTRATION}
          element={<RegisterOperations />}
        />
        <Route
          path={ManualMovementsPage.PURCHASE_ORDER}
          element={<OrderPurchase />}
        />
        <Route
          path={ManualMovementsPage.COLLECT_ORDER}
          element={<OrderCollect />}
        />
        <Route path={ManualMovementsPage.SALE_ORDER} element={<OrderSales />} />
        <Route
          path={ManualMovementsPage.PRODUCTION_ORDER}
          element={<ProductionOrder />}
        />
        <Route
          path={ManualMovementsPage.PRODUCTION_MAP}
          element={<ProductionMap />}
        />
        <Route
          path={ManualMovementsPage.ISSUE_INVOICE}
          element={<InvoiceIssue />}
        />
        <Route
          path={ManualMovementsPage.LAUNCH_FACTORY}
          element={<FactoryLaunch />}
        />
        <Route
          path={ManualMovementsPage.CNAB_SHIPPING}
          element={<ShippingCNAB />}
        />
        <Route
          path={ManualMovementsPage.CONTROL_CHECK}
          element={<CheckControl />}
        />
        <Route
          path={ManualMovementsPage.CONTROL_BANKING}
          element={<BankingControl />}
        />
        <Route
          path={ManualMovementsPage.ACCOUNTS_PAYABLE}
          element={<AccountsPayable />}
        />
        <Route
          path={ManualMovementsPage.ACCOUNTS_RECEIVABLE}
          element={<AccountsReceivable />}
        />
        <Route
          path={ManualMovementsPage.ROMANEIO_SALE}
          element={<RomaneioSale />}
        />
        <Route path={ManualPage.ACRONYMS} element={<Acronyms />} />
        <Route path={ManualTaxPage.TAX_DEPARTMENT} element={<Taxpayer />} />
        <Route path={ManualTaxPage.TABLE_CST} element={<TableCST />} />
        <Route path={ManualTaxPage.TABLE_SOURCE} element={<TableConfins />} />
        <Route
          path={ManualTaxPage.SUSPENSION_EXEMPTION}
          element={<SuspensionExemption />}
        />
        <Route
          path={ManualTaxPage.FINANCE_DEPARTMENT}
          element={<TaxDepartment />}
        />
        <Route path={ManualTaxPage.CNAE} element={<Cnae />} />
      </Routes>
    </>
  );
}

export default Manual;

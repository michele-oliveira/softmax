import PropTypes from "prop-types";
import CustomerRegistration from "../pages/manual/CustomerRegistration";
import CarrierRegistration from "../pages/manual/CarrierRegistration";
import SupplierRegistration from "../pages/manual/SupplierRegistration";
import { ManualRegisterPage } from "../enums/manual/ManualRegisterPage";
import { ManualPage } from "../enums/manual/ManualPage";
import HomePage from "../pages/manual/HomePage";

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
    default:
      return <h1>Page not found</h1>;
  }
}

RenderManualPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default RenderManualPage;

import PropTypes from "prop-types";
import ManualSideBar from "./ManualSideBar";

function RenderManualPage({ page }) {
  const Page = page;

  return (
    <>
      <ManualSideBar />
      <Page />
    </>
  );
}

RenderManualPage.propTypes = {
  page: PropTypes.node.isRequired,
};

export default RenderManualPage;

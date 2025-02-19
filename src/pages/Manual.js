import { useState } from "react";
import ManualSideBar from "../components/ManualSideBar";
import RenderManualPage from "../components/RenderManualPage";
import { ManualRegisterPage } from "../enums/manual/ManualRegisterPage";

function Manual() {
  const [selectedPage, setSelectedPage] = useState(
    ManualRegisterPage.CUSTOMER_REGISTRATION
  );

  return (
    <>
      <ManualSideBar selectPage={setSelectedPage} />
      <RenderManualPage page={selectedPage} />
    </>
  );
}

export default Manual;

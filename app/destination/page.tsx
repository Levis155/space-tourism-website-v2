import { Suspense } from "react";
import DestinationPageContent from "./DestinationPageContent";

const DestinationPage = () => {
  return (
    <Suspense>
      <DestinationPageContent />
    </Suspense>
  );
};

export default DestinationPage;

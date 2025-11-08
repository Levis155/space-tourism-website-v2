import { Suspense } from "react";
import TechnologyPageContent from "./TechnologyPageContent";

const TechnologyPage = () => {
  return (
    <Suspense>
      <TechnologyPageContent />
    </Suspense>
  );
};

export default TechnologyPage;

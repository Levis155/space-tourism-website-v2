import { Suspense } from "react";
import CrewPageContent from "./CrewPageContent";

const CrewPage = () => {
  return (
    <Suspense>
      <CrewPageContent />
    </Suspense>
  );
};

export default CrewPage;

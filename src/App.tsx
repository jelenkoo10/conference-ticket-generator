import React, { useState, lazy, Suspense } from "react";
import DesignLines from "./components/DesignLines";
import TicketPage from "./pages/TicketPage";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";

const TicketForm = lazy(() => import("./pages/TicketForm"));

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [data, setData] = useState({});

  const submitForm = (formData) => {
    setIsFormSubmitted((prevFormSubmitted) => !prevFormSubmitted);
    setData(formData);
  };

  return (
    <main className="w-full min-h-screen">
      <DesignLines />
      {isFormSubmitted ? (
        <TicketPage data={data} />
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <TicketForm submitForm={submitForm} />
        </Suspense>
      )}
    </main>
  );
}

export default App;

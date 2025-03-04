import { useState } from "react";
import DesignLines from "./components/DesignLines";
import TicketForm from "./pages/TicketForm";
import TicketPage from "./pages/TicketPage";
import "./App.css";

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
        <TicketForm submitForm={submitForm} />
      )}
    </main>
  );
}

export default App;

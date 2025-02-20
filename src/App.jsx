import { useState } from "react";
import DesignLines from "./components/DesignLines";
import TicketForm from "./pages/TicketForm";
import Ticket from "./pages/Ticket";
import "./App.css";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <main className="w-full">
      <DesignLines />
      {isFormSubmitted ? <Ticket /> : <TicketForm />}
    </main>
  );
}

export default App;

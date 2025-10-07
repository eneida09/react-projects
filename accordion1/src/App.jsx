import { useState } from "react";
import Sidebar from "./Sidebar";

function App() {
  const [selected, setSelected] = useState("Gift Card");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar onSelect={setSelected} />

      {/* Content */}
      <div className="flex-1 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-4">{selected}</h1>
        <p>Këtu do të shfaqet përmbajtja e {selected}.</p>
      </div>
    </div>
  );
}

export default App;

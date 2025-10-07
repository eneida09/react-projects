import { useState } from "react";
import {
  FaMobileAlt,
  FaGamepad,
  FaCreditCard,
  FaMoneyBill,
  FaFileSignature,
  FaBitcoin,
  FaGift,
  FaFileAlt,
} from "react-icons/fa";

const menuItems = [
  { id: 1, name: "Ricariche", icon: <FaMobileAlt /> },
  { id: 2, name: "Console e Giochi", icon: <FaGamepad /> },
  { id: 3, name: "MrPay Card", icon: <FaCreditCard /> },
  { id: 4, name: "Pagamenti", icon: <FaMoneyBill /> },
  { id: 5, name: "Spid e Firma", icon: <FaFileSignature /> },
  { id: 6, name: "Crypto", icon: <FaBitcoin /> },
  { id: 7, name: "Gift Card", icon: <FaGift /> },
  { id: 8, name: "Visure", icon: <FaFileAlt /> },
];

function Sidebar({ onSelect }) {
  const [active, setActive] = useState(7); // default Gift Card

  return (
    <div className="w-60 min-h-screen bg-[#1a1a1a] text-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-6">Servizi</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setActive(item.id);
              onSelect(item.name);
            }}
            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition ${
              active === item.id
                ? "bg-green-500 text-black font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

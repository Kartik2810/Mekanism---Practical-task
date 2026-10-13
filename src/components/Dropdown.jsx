import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

function Dropdown() {
  const [dropmenu, setDropmenu] = useState(false);
  const handledropdown = (id) => {
    setDropmenu((dropmenu) => (dropmenu === id ? false : id));
  };

  const data = [
    {
      id: 1,
      subheading: "esim-what",
      content:
        " An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
    },
    {
      id: 2,
      subheading: "Which devices support eSIM?",
      content:
        "Many modern smartphones support eSIM, including recent iPhone models (iPhone XS and newer), Google Pixel phones, Samsung Galaxy devices, and select iPads.",
    },
    {
      id: 3,
      subheading: "Can I use both eSIM and physical SIM simultaneously?",
      content:
        "Yes, most eSIM-compatible devices support Dual SIM functionality, allowing you to use both an eSIM and a physical SIM card at the same time.",
    },
    {
      id: 4,
      subheading: "How do I activate an eSIM?",
      content:
        "To activate an eSIM, you typically scan a QR code provided by your carrier or enter the activation details manually in your device settings.",
    },
    {
      id: 5,
      subheading: "What are the advantages of using an eSIM?",
      content:
        "eSIMs offer several benefits: easy switching between carriers, no physical SIM card needed, ability to store multiple profiles, and environmentally friendly.",
    },
  ];

  return (
    <>
      {data.map((item) => (
        <section key={item.id} onClick={()=>handledropdown(item.id)} className="mb-2">
          <div className={`p-4 border rounded-lg ${dropmenu === item.id && "rounded-b-none bg-gray-200"} border-black hover:bg-gray-200 flex justify-between items-center cursor-pointer `}>
            <h2 className="text-base font-medium ">{item.subheading}</h2>
            <FaChevronRight className={`${dropmenu === item.id && "rotate-90 transition-all "} `} />
          </div>
          {dropmenu === item.id && (
            <div className="h-auto p-4 transition-all  border border-t-0 border-black rounded-b-lg text-gray-500">
              <p>{item.content}</p>
            </div>
          )}
        </section>
      ))}
    </>
  );
}

export default Dropdown;

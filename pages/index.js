import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [amountToSend, setAmountToSend] = useState(0); // in lamports so * LAMPORTS_PER_SOL to get SOL
  const [recipientAddress, setRecipientAddress] = useState("");

  useEffect(() => {
    // TODO: implement functionality
  }, []);

  const sendSol = async (event) => {
    event.preventDefault();
    // TODO: implement functionality
  };

  return (
    <main className={`bg-gray-200 h-screen w-full p-8`}>
      <Header />
      <div className="p-6">
        <p className="text-lg">Send SOL to anyone on the Solana blockchain.</p>
        <p className="text-lg">Connected: {}</p>
        <p className="text-lg">Balance: {} SOL</p>

        <div className="h-24"></div>

        {/* TODO: render this conditionally */}
        {false && (
          <div className="bg-blue-100 border border-blue-400 rounded-lg p-4">
            <p className="text-lg">
              Transaction complete!{" "}
              <a
                className="text-blue-500"
                href={`TODO: add solscan link here`}
                target="_blank"
                rel="noreferrer"
              >
                View on SolScan
              </a>
            </p>
          </div>
        )}

        {/* create a form with an amount of sol to send, address, and confirm button */}
        <form className="flex flex-col space-y-2">
          <label className="text-lg">Amount of SOL to send</label>
          <input
            className="border border-gray-400 rounded-lg p-2"
            type="number"
            placeholder="0.0"
            onChange={(e) => setAmountToSend(e.target.value)}
          />

          <label className="text-lg">Recipient Address</label>
          <input
            className="border border-gray-400 rounded-lg p-2"
            type="text"
            placeholder="Enter a Solana address"
            onChange={(e) => setRecipientAddress(e.target.value)}
          />

          <button
            onClick={(e) => sendSol(e)}
            className="bg-blue-500 text-white rounded-lg p-2 mt-4"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}

import React from "react";

const Header = () => {
  return (
    <div className="py-8 px-4 w-full bg-gray-200 border border-gray-400 flex justify-between rounded-lg">
      <h1 className="text-2xl font-bold">SolSend</h1>
      <div className="flex items-center">
        {/* TODO: make this connect a wallet */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Header;

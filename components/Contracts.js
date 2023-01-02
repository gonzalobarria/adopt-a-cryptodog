import Escrow from 'components/Escrow';
import { useContext, useEffect, useState } from 'react';
import { ContractContext } from './ContractContext';

export default function Contracts() {
  const { filteredContracts } = useContext(ContractContext);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    setContracts(filteredContracts);
  }, [filteredContracts]);

  return (
    <div className=" w-full p-5  text-sm px-3 text-gray-200 mt-10">
      <h1 className="sm:text-3xl font-bold pb-10 text-white text-center">
        Contracts
      </h1>

      {contracts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {contracts.map((escrow) => (
            <Escrow key={escrow.address} {...escrow} />
          ))}
        </div>
      ) : (
        <h3 className="sm:text-2xl font-semibold pb-10 text-white text-center">
          Nothing here!
        </h3>
      )}
    </div>
  );
}

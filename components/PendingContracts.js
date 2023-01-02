import Escrow from 'components/Escrow';
import { useContext, useEffect, useState } from 'react';
import { CONTRACT_STATUS } from 'utils/enums';
import { ContractContext } from './ContractContext';

export default function PendingContracts({ filter }) {
  const { escrows } = useContext(ContractContext);
  const { WAITING } = CONTRACT_STATUS;
  const [pendingContracts, setPendingContracts] = useState([]);

  useEffect(() => {
    if (escrows.length === 0) return;

    setPendingContracts(escrows.filter((e) => [WAITING].includes(e.status)));
  }, [escrows]);

  return (
    pendingContracts.length > 0 && (
      <div className=" w-full p-5 border rounded border-gray-400  shadow-lg-invert text-sm px-3 text-gray-200 mt-10">
        <h1 className="sm:text-xl font-bold pb-2 text-white text-center">
          Pending Contracts
        </h1>

        {pendingContracts.map((escrow) => (
          <Escrow key={escrow.address} {...escrow} />
        ))}
      </div>
    )
  );
}

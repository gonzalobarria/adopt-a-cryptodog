import { AppContext } from 'components/AppContext';
import { useContext } from 'react';
import { CONTRACT_STATUS } from 'utils/enums';
import { miniAddress } from 'utils/utils';

export default function Escrow(escrow) {
  const {
    address,
    arbiter,
    beneficiary,
    value,
    handleApprove,
    handleReject,
    status,
  } = escrow;
  const { WAITING, APPROVED } = CONTRACT_STATUS;

  const { account } = useContext(AppContext);

  const isArbiter = account.toLowerCase() === arbiter.toLowerCase();

  return (
    <div className=" bg-gray-800 p-4 border rounded border-gray-600 shadow-lg-invert mb-4">
      <ul className="pb-3">
        <li className="flex flex-row space-x-3">
          <div className="w-20">Arbiter</div>
          <div>{miniAddress(arbiter)}</div>
        </li>
        <li className="flex flex-row space-x-3">
          <div className="w-20">Beneficiary</div>
          <div>{miniAddress(beneficiary)}</div>
        </li>
        <li className="flex flex-row space-x-3">
          <div className="w-20">Value</div>
          <div>{value} ether</div>
        </li>
      </ul>
      {status === WAITING ? (
        isArbiter ? (
          <div className="flex justify-center">
            <button
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              id={`rej-${address}`}
              onClick={(e) => {
                e.preventDefault();

                handleReject();
              }}
            >
              Reject
            </button>
            <button
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              id={`app-${address}`}
              onClick={(e) => {
                e.preventDefault();

                handleApprove();
              }}
            >
              Approve
            </button>
          </div>
        ) : (
          <div className="text-lg font-bold text-center">
            Waiting for the Arbiter
          </div>
        )
      ) : status === APPROVED ? (
        <div className="text-lg font-bold text-center">Adoption Approved</div>
      ) : (
        <div className="text-lg font-bold text-center">Adoption Rejected</div>
      )}
    </div>
  );
}

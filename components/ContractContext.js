import { ethers, utils } from 'ethers';

import Escrow from 'pages/artifacts/contracts/Escrow.sol/Escrow';
import { createContext, useContext, useState } from 'react';
import { CONTRACT_STATUS } from 'utils/enums';
import { approve, reject, removeObjectWithAtt } from 'utils/utils';
import { AppContext } from './AppContext';
import { notify } from './Toaster';

export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  const { signer } = useContext(AppContext);
  const [escrows, setEscrows] = useState([]);
  const [arbiter, setArbiter] = useState('');
  const [beneficiary, setBeneficiary] = useState('');
  const [amount, setAmount] = useState('');
  const [idItem, setIdItem] = useState();
  const [items, setItems] = useState([]);
  const [filteredContracts, setFilteredContracts] = useState([]);

  const settingContract = (item) => {
    const { owner, price, id } = item;
    setBeneficiary(owner);
    setAmount(price);
    setIdItem(id);
  };

  const deploy = async (signer, arbiter, beneficiary, value) => {
    const factory = new ethers.ContractFactory(
      Escrow.abi,
      Escrow.bytecode,
      signer
    );
    return factory.deploy(arbiter, beneficiary, { value });
  };

  const clearForm = () => {
    setArbiter('0x0');
    setBeneficiary('');
    setAmount('');
  };

  const newContract = async () => {
    if (!arbiter || !beneficiary || !amount) return;

    const value = utils.parseEther(amount.toString());
    let escrowContract;

    try {
      escrowContract = await deploy(signer, arbiter, beneficiary, value);
      clearForm();

      const escrow = {
        address: escrowContract.address,
        arbiter,
        beneficiary,
        idItem,
        value: amount,
        status: CONTRACT_STATUS.WAITING,
        handleApprove: async () => {
          escrowContract.on('Approved', () => {
            notify({
              title: 'Contract Approved',
              msg: 'The operation was sended successfully',
              type: 'info',
            });
          });

          // const isApproved =
          await approve(escrowContract, signer);

          // if (!isApproved) return;

          removeObjectWithAtt(escrows, 'address', escrow.address);
          escrow.status = CONTRACT_STATUS.APPROVED;
          setEscrows([escrow, ...escrows]);
        },
        handleReject: async () => {
          escrowContract.on('Rejected', () => {
            notify({
              title: 'Contract Rejected',
              msg: 'The operation was sended successfully',
              type: 'info',
            });
          });

          // const isRejected =
          await reject(escrowContract, signer);
          removeObjectWithAtt(escrows, 'address', escrow.address);
          escrow.status = CONTRACT_STATUS.REJECTED;
          setEscrows([escrow, ...escrows]);
        },
      };

      setEscrows([...escrows, escrow]);
    } catch (error) {
      if (error.code === 'ACTION_REJECTED' || error.code === 4001) {
        notify({
          title: 'Contract Creation Cancelled',
          msg: 'The operation was cancelled by the user',
          type: 'error',
        });
      } else console.log('error creating contract', error);
    }
  };

  return (
    <ContractContext.Provider
      value={{
        settingContract,
        beneficiary,
        amount,
        setArbiter,
        arbiter,
        escrows,
        newContract,
        clearForm,
        setItems,
        items,
        filteredContracts,
        setFilteredContracts,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

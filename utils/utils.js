import { ethers } from 'ethers';
import { notify } from 'components/Toaster';

export const miniAddress = (add) => `${add.slice(0, 5)}...${add.slice(-4)}`;

export const approve = async (escrowContract, signer) => {
  try {
    const approveTxn = await escrowContract.connect(signer).approve();
    await approveTxn.wait();
    return true;
  } catch (error) {
    if (error.code === 'ACTION_REJECTED') {
      notify({
        title: 'Contract Approve Cancelled',
        msg: 'The operation was cancelled by the user',
        type: 'error',
      });
    }

    return false;
  }
};

export const reject = async (escrowContract, signer) => {
  try {
    const rejectTxn = await escrowContract.connect(signer).reject();
    await rejectTxn.wait();

    return true;
  } catch (error) {
    if (error.code === 'ACTION_REJECTED') {
      notify({
        title: 'Contract Reject Cancelled',
        msg: 'The operation was cancelled by the user',
        type: 'error',
      });
    }

    return false;
  }
};

export const getAccounts = async (method) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const acc = await provider.send(method, []);

  return { acc, provider };
};

export const removeObjectWithAtt = (arr, att, id) => {
  const arrCopy = Array.from(arr);

  const objWithIdIndex = arrCopy.findIndex((obj) => obj[att] === id);
  arrCopy.splice(objWithIdIndex, 1);
  return arrCopy;
};

import { dogs } from 'mocks/dogs';
import { useContext, useEffect } from 'react';
import { CONTRACT_STATUS } from 'utils/enums';
import { ContractContext } from './ContractContext';
import Item from './Item';

const Gallery = () => {
  const { settingContract, escrows, items, setItems } =
    useContext(ContractContext);
  const { REJECTED } = CONTRACT_STATUS;

  useEffect(() => {
    if (items.length > 0) return;

    setItems(dogs);
  }, []);

  useEffect(() => {
    if (!escrows.length) return;
    const newItems = items.map((i) => {
      const esc = escrows.find((e) => e.idItem === i.id);
      i.isShown = true;

      if (esc) {
        i.isShown = [REJECTED, undefined].includes(esc.status);
        i.status = esc.status;
      }
      return i;
    });

    setItems(newItems);
  }, [escrows]);

  const filtra = (item) => {
    settingContract(item);
    const modItems = items.map((i) => {
      i.isAvailableToBuy = true;
      if (i.id === item.id) {
        i.isAvailableToBuy = false;
      }

      return i;
    });
    setItems(modItems);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {items.map((d) => (
        <Item key={d.id} {...d} filtra={filtra} />
      ))}
    </div>
  );
};

export default Gallery;

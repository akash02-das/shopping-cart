import StoreItem from '../components/store/StoreItem';
import storeItems from '../data/items.json';

const Store = () => {
  return (
    <>
      <h1>Store</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Store;

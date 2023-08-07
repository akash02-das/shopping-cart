import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utils/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className='max-w-sm h-full rounded overflow-hidden shadow-lg'>
      <img className='w-full h-[200px] object-cover' src={imgUrl} alt='Image' />
      <div className='flex justify-between items-center px-4 py-4'>
        <p className='font-bold text-xl text-gray-900'>{name}</p>
        <span className='font-bold text-lg text-gray-700'>
          {formatCurrency(price)}
        </span>
      </div>
      <div className='px-4 pt-2 pb-2 mt-auto mb-2'>
        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantity(id)}
            className='bg-blue-600 hover:bg-blue-700 text-white w-full rounded p-1'
          >
            + Add To Cart
          </button>
        ) : (
          <div className='flex items-center flex-col gap-2'>
            <div className='flex items-center justify-center gap-2'>
              <button
                onClick={() => decreaseCartQuantity(id)}
                className='bg-blue-600 hover:bg-blue-700 text-white rounded flex justify-center items-center w-8 h-8 text-2xl'
              >
                -
              </button>
              <div>
                <span className='text-xl'>{quantity} </span>
                in cart
              </div>
              <button
                onClick={() => increaseCartQuantity(id)}
                className='bg-blue-600 hover:bg-blue-700 text-white rounded flex justify-center items-center w-8 h-8 text-2xl'
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(id)}
              className='bg-red-600 hover:bg-red-700 text-white rounded text-md px-2 py-1'
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;

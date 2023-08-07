import closeIcon from '../../assets/close-icon.png';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import storeItems from '../../data/items.json';
import { formatCurrency } from '../../utils/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <div className='flex items-center justify-between my-5'>
      <div className='flex items-center'>
        <img
          src={item.imgUrl}
          alt='Image'
          className='w-16 md:w-32 h-12 md:h-20 object-cover'
        />
        <div className='text-gray-900 ml-3'>
          <div className='text-sm md:text-xl'>
            {item.name}{' '}
            {quantity > 1 && (
              <span className='text-sm text-gray-500'>{quantity}x</span>
            )}
          </div>
          <div className='text-sm md:text-md text-slate-600'>
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        <div className='text-slate-600 text-sm md:text-xl mr-3'>
          {formatCurrency(item.price * quantity)}
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className='border-2 p-1'
        >
          <img src={closeIcon} alt='close' className='w-3 md:w-4' />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

import closeIcon from '../../assets/close-icon.png';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import storeItems from '../../data/items.json';
import { formatCurrency } from '../../utils/formatCurrency';
import CartItem from './CartItem';

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((item) => item.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white w-[350px] md:w-[560px] h-screen top-0 right-0 p-4 shadow-lg absolute z-50'>
            <div className='flex justify-between items-center mb-10'>
              <h1 className='text-xl text-gray-700 font-bold'>Cart</h1>
              <button onClick={closeCart}>
                <img src={closeIcon} alt='Close Icon' className='w-8' />
              </button>
            </div>

            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <div className='flex justify-end text-xl md:text-2xl text-gray-800 font-medium my-10'>
              Total:
              <span className='ml-3'>{formatCurrency(totalPrice)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;

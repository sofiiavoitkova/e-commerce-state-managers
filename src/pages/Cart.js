import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { closeSidebar } from "../redux/slices/sidebarSlice";
import { clearCart } from "../redux/slices/cartSlice";
import { selectIsSidebarOpen } from "../redux/selectors/sidebarSelectors";
import {
  selectCartItems,
  selectCartTotal,
  selectItemAmount,
} from "../redux/selectors/cartSelectors";

const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsSidebarOpen);
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const itemAmount = useSelector(selectItemAmount);

  useEffect(() => {
    if (isOpen) dispatch(closeSidebar());
  }, [isOpen, dispatch]);

  return (
    <section className="py-20 px-[50px] min-h-screen">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shopping Bag ({itemAmount})
          </div>
        </div>
        <div className="flex flex-col gap-y-2 border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        {!!total && (
          <div className="flex flex-col gap-y-3  mt-4 items-center">
            <div className="flex w-full justify-between items-center">
              <div className="font-semibold">
                <span className="mr-2">Subtotal:</span> ${" "}
                {parseFloat(total).toFixed(2)}
              </div>
              <div
                onClick={() => dispatch(clearCart())}
                className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
              >
                <FiTrash2 />
              </div>
            </div>
            <Link
              to={"/"}
              className="bg-primary flex p-3 justify-center items-center text-white w-full max-w-[300px] font-medium"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

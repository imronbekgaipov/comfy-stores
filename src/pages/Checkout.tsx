import { useSelector } from "react-redux";
import FormInput from "../components/FormInput";
import { RootState } from "../redux/store";
import { FormEvent } from "react";
import { formatPrice } from "../utils/utils";

function Checkout() {
  const { subtotal, orderTotal, shipping, tax, selectData } = useSelector(
    (store: RootState) => store.cart
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const address = formData.get("address");

    const newOrder = {
      address,
      cartItems: [{ amount: selectData.length }],
      name,
      orderTotal: formatPrice(orderTotal),
    };
    console.log(newOrder);
  };

  return (
    <div className="mt-9">
      <>
        <p className="my-8 tracking-wide opacity-90 capitalize text-3xl">
          place your order
        </p>
        <hr />
      </>
      <div className="grid grid-cols-2 mt-8 items-center gap-x-8 justify-between">
        <div className="grid gap-y-5">
          <p className="text-xl">Shipping Information</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormInput
              label="First name"
              name="name"
              placeholder="Type here"
              type="text"
            />
            <FormInput
              label="Address"
              name="address"
              placeholder="Type here"
              type="text"
            />
            <button className="btn btn-neutral w-full uppercase text-base-100 mt-4">
              {" "}
              place your order
            </button>
          </form>
        </div>
        <div className="bg-primary-content h-[180px] text-base-content text-opacity-75 pt-5 w-full px-5 rounded-lg">
          <p className="flex border-b-[1px] border-base-content border-opacity-25 pb-2 text-xs justify-between mb-3">
            Subtotal
            <span>${subtotal.toLocaleString("en-US")}</span>
          </p>
          <p className="flex border-b-[1px] border-base-content border-opacity-25 pb-2 text-xs justify-between mb-3">
            Shipping
            <span>${shipping.toFixed(2)}</span>
          </p>
          <p className="flex border-b-[1px] border-base-content border-opacity-25 pb-2 text-xs justify-between mb-3">
            Tax
            <span>${tax.toFixed(2)}</span>
          </p>
          <p className="flex text-base-content my-5 text-sm justify-between">
            Order Total
            <span>${orderTotal.toLocaleString("en-US")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Checkout;

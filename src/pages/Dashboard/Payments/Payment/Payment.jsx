
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedClass from "../../../../Hooks/useSelectedClass";
import { loadStripe } from "@stripe/stripe-js";


// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Payment = () => {

    const [selectedClass] = useSelectedClass()
    const total = selectedClass.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="w-full">


            <Elements stripe={stripePromise} >
                <CheckoutForm
                   selectedClass={selectedClass}
                    price={price}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;






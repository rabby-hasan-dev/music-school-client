
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedClass from "../../../../Hooks/useSelectedClass";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";


// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Payment = () => {
    const { id } = useParams();
    const [selectedClass] = useSelectedClass();
    const selectClass = selectedClass.filter(data => data._id == id);
    const priceValue = selectClass[0]?.price;
    const price = parseFloat(priceValue);
   
   

    return (
        <div className="w-full">


            <Elements stripe={stripePromise} >
                <CheckoutForm
                    selectClass={selectClass}
                    price={price}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;






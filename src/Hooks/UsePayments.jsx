import { useEffect, useState } from "react";
import useAuth from "./UseAuth";




const UsePayments = () => {
    const { user } = useAuth()
    const [payments, setPayments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [])


    return payments;
};

export default UsePayments;
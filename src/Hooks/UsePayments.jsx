// import { useEffect, useState } from "react";
import useAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure ";




const UsePayments = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (!user) {
                return [];
            }
            const res = await axiosSecure(`payments?email=${user?.email}`)
            return res.data;
        },
    })

    return [payments, refetch]

};

export default UsePayments;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure ";
import useAuth from "./UseAuth";



const useAdmin = () => {
    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            if (!user) {
                return false;
            }
            const res = await axiosSecure.get(`allUsers/admin/${user?.email}`);
            // console.log('isAdmin response', res);
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminLoading]

};

export default useAdmin;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure ";
import useAuth from "./UseAuth";



const useAdmin = () => {
    const { user,loading } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
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
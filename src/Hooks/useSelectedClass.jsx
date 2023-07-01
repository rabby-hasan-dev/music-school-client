
import { useQuery } from '@tanstack/react-query'
import useAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure ';


const useSelectedClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClass?email=${user?.email}`)
            return res.data;
        },
    })

    return [selectedClass, refetch]
};

export default useSelectedClass;
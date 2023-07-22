import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure ";



const useInstructor = () => {
    const { user ,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            if(!user){
                return false;
            }
            const res = await axiosSecure.get(`allUsers/instructor/${user?.email}`);
            // console.log('isInstructor response', res);
            return res.data.instructor;
        }
    })

    return [isInstructor, isInstructorLoading]

};

export default useInstructor;
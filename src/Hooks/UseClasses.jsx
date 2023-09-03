import { useQuery } from "@tanstack/react-query";


const UseClasses = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://music-shool-server.vercel.app/allClasses');
            return res.json();
        }
    })



    return [classes,loading ,refetch]

};

export default UseClasses;
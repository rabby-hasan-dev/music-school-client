import { useQuery } from "@tanstack/react-query";


const UseAllInstructors = () => {


    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://music-shool-server.vercel.app/allinstructors');
            return res.json();
        }
    })



    return [instructors, loading, refetch]

};

export default UseAllInstructors;
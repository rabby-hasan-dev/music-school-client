import { useQuery } from "@tanstack/react-query";


const UseClasses = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allClasses');
            return res.json();
        }
    })



    return [classes,loading ]

};

export default UseClasses;
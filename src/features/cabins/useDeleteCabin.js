import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {deleteCabin as deleteCabinApi} from "../../services/apiCabins";
import {useNavigate} from "react-router-dom";

export function useDeleteCabin(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: (id) => deleteCabinApi(id),
        onSuccess: () => {
            toast.success('Cabin successfully deleted')
            queryClient.invalidateQueries({
                queryKey: ['cabins'],
            });
        },
        onError: (err) => toast.error(err.message),
    })

    return {isDeleting, deleteCabin}
}

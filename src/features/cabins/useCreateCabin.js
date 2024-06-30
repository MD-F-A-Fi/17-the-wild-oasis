import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";



export function useCreateCabinHook(){
    const queryClient = useQueryClient();


    const {reset} = useForm();

    const {mutate: createCabin, isLoading: isCreating} = useMutation({
        mutationFn: (newCabin) => createEditCabin(newCabin),
        onSuccess: () => {
            toast.success('New cabin has been created successfully');
            queryClient.invalidateQueries({queryKey: ['cabins']});
        },
        onError: err => toast.error(err.message)
    });

    return ({isCreating, createCabin})
}

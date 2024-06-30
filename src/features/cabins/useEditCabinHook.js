import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins";
import toast from "react-hot-toast";
import {useForm} from 'react-hook-form'



export function useEditCabinHook(){

    const queryClient = useQueryClient();

    const {reset} = useForm();

    const {mutate: editCabin, isLoading: isEditing} = useMutation({
        mutationFn: ({newCabin, id}) => createEditCabin(newCabin, id),
        onSuccess: () => {
            toast.success('Cabin has been edited successfully');
            queryClient.invalidateQueries({queryKey: ['cabins']});
            reset();
        },
        onError: err => toast.error(err.message)
    });

    return ({editCabin, isEditing})

}

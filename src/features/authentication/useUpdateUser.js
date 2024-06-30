import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateCurrentUser} from "../../services/apiAuth";
import toast from "react-hot-toast";


export function useUpdateUser() {
    const queryClient = useQueryClient();
    const {mutate: updateUser, isLoading: isUpdatingUser} = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({data}) => {
            console.log(data, 'hi');
            toast.success('user has been updated successfully');
            queryClient.setQueryData(['user'], data);
        },
        onError: (err) => toast.error(err.message)
    })

    return {updateUser, isUpdatingUser}
}

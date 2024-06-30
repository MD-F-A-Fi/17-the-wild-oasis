import {useMutation, useQueryClient} from "@tanstack/react-query"

import {updateSetting as updateSettingApi} from '../../services/apiSettings'
import toast from "react-hot-toast";

export function useUpdateSettingHook(){
    const queryClient = useQueryClient();

    const {mutate: updateSetting, isLoading: isUpdating} = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success('setting has been updated successfully')
            queryClient.invalidateQueries( {queryKey: ['settings']} )
        },
        onError: (err) => toast.error(err.message)
    })

    return ({updateSetting, isUpdating})
}

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login as loginApi} from "../../services/apiAuth";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin(){

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: login, isLoading: isLoggingIn} = useMutation({
        mutationFn: ({email, password}) => loginApi({email, password}),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user)
            toast.success(`Logged in successfully`)
            navigate('/dashboard', {replace: true})
        },
        onError: (error) => {
            console.log('Error', error)
            toast.error(`The provided email or password are incorrect. Please try again!`)
        }
    });

    return({login, isLoggingIn})
}

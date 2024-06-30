import {useMutation} from "@tanstack/react-query";
import {signup as signupApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup(){
    const {mutate: signup, isLoading: isSigningup} = useMutation({
        mutationFn: signupApi,
        onSuccess: (data) => {
            console.log(data);
            toast.success(`Account has been created successfully! Please verify the new account from the user's email address.`);
        }
    })

    return {signup, isSigningup}
}

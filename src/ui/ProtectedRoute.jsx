import {useUser} from "../features/authentication/useUser"
import styled from 'styled-components'
import Spinner from "./Spinner";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display:flex;
    align-items: center;
    justify-content: center;
    `


const ProtectedRoute = ({children}) => {

    const navigate = useNavigate();
    
    //1. load the authenticated user
    const { isLoading, isAuthenticated } = useUser();
    //3. if there is no authenticated user redirect to login page
    useEffect(function(){
        if(!isAuthenticated && !isLoading) navigate('/login')
    }, [isAuthenticated, isLoading, navigate])
    //2. while loading show spinner
    if(isLoading){
        return <FullPage>
            <Spinner/>
        </FullPage>
    }
    //4. if there is a user, render the app
    if (isAuthenticated) {
        return children
    }
}

export default ProtectedRoute

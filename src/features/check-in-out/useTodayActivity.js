import {useQuery} from "@tanstack/react-query"
import {getStaysTodayActivity} from "../../services/apiBookings"

const useTodayActivity = () => {

    const {isLoading, data: stays} = useQuery({
        queryKey: ['TodayActivity'],
        queryFn: getStaysTodayActivity
    })

    return ({
        stays, isLoading
    })
}

export default useTodayActivity

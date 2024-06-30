import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar, HiOutlineChartBarSquare} from 'react-icons/hi2';
import Stat from './Stat'
import {formatCurrency} from '../../utils/helpers';



const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {

    //1. calculate number of bookings
    const numBookings = bookings.length;

    //2.
    const sales = bookings.reduce((acc, cur) => {
        return acc = acc + cur.totalPrice;
    }, 0)

    //3.
    const checkins = confirmedStays.length;

    //4. occupancy rate
    const occupation = (confirmedStays.reduce( (acc, cur) => acc+cur.numNights, 0 ) / (numDays * cabinCount))


    return (
        <>
            <Stat title='bookings' color='blue' icon={ <HiOutlineBriefcase/> } value={numBookings}/>
            <Stat title='sales' color='green' icon={ <HiOutlineBanknotes/> } value={formatCurrency(sales)}/>
            <Stat title='check-ins' color='indigo' icon={ <HiOutlineCalendarDays/> } value={checkins}/>
            <Stat title='occupancy-rate' color='yellow' icon={ <HiOutlineChartBar/> } value={Math.round(occupation*100)+'%'}/>
        </>
    )
}

export default Stats

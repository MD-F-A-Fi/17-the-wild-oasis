import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

import Menus from "../../ui/Menus";
import {HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash} from "react-icons/hi2";
import {Navigate, useNavigate} from "react-router-dom";
import {useCheckout} from "./useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import {useDeleteBooking} from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
font-family: "Sono";
font-weight: 500;
`;

function BookingRow({
    booking: {
        id: bookingId,
        created_at,
        startDate,
        endDate,
        numNights,
        numGuests,
        totalPrice,
        status,
        guests: { fullName: guestName, email },
        cabins: { name: cabinName },
    },
}) {



    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };

    const navigate = useNavigate()
    const {checkout, isCheckingOut} = useCheckout();
    const {deleteBooking, isDeletingBooking} = useDeleteBooking();

    return (
        <Modal >
            <Table.Row>
                <Cabin>{cabinName}</Cabin>

                <Stacked>
                    <span>{guestName}</span>
                    <span>{email}</span>
                </Stacked>

                <Stacked>
                    <span>
                        {isToday(new Date(startDate))
                            ? "Today"
                            : formatDistanceFromNow(startDate)}{" "}
                        &rarr; {numNights} night stay
                    </span>
                    <span>
                        {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
                        {format(new Date(endDate), "MMM dd yyyy")}
                    </span>
                </Stacked>

                <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

                <Amount>{formatCurrency(totalPrice)}</Amount>

                <Menus.Menu >
                    <Menus.Toggle id={bookingId}/>
                    <Menus.List id={bookingId}>
                        <Menus.Button onClick={ () => navigate(`/bookings/${bookingId}`)}>
                            <HiEye/> See details
                        </Menus.Button>

                        {
                            status === 'unconfirmed' &&
                                <Menus.Button onClick={ () => navigate(`/checkin/${bookingId}`) }>
                                    <HiArrowDownOnSquare/> Check In
                                </Menus.Button>
                        }
                        {
                            status === 'checked-in' &&
                                <Menus.Button onClick={ () => checkout(bookingId)} disabled={isCheckingOut}>
                                    <HiArrowUpOnSquare/> Check out
                                </Menus.Button>
                        }

                        <Modal.Open opens='delete'>
                            <Menus.Button>
                                <HiTrash/> Delete
                            </Menus.Button>
                        </Modal.Open>

                    </Menus.List>
                    <Modal.Window name='delete'>
                        <ConfirmDelete resourceName='booking' disabled={isDeletingBooking} onConfirm={() => {
                            deleteBooking(bookingId)
                        }}/>
                    </Modal.Window>
                </Menus.Menu>


            </Table.Row>
        </Modal>
    );
}

export default BookingRow;

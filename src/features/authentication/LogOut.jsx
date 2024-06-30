import {HiArrowRightOnRectangle} from "react-icons/hi2"
import ButtonIcon from "../../ui/ButtonIcon"
import {useLogout} from "./useLogout"
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const LogOut = () => {

    const {logout, isLoggingOut} = useLogout();

    return (
        <Modal>
            <Modal.Open opens='logout-modal' >
                <ButtonIcon>
                    <HiArrowRightOnRectangle/>
                </ButtonIcon>
            </Modal.Open >
            <Modal.Window name='logout-modal'>
                <ConfirmDelete resourceName='logut' onConfirm={logout} />
            </Modal.Window>
        </Modal>
    )
}

export default LogOut

import {useState} from "react"
import CreateCabinForm from "./CreateCabinForm"
import Button from "../../ui/Button"
import Modal from "../../ui/Modal"
import CabinTable from "./CabinTable"

const AddCabin = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    function handleModalClose(){
        setIsOpenModal(false);
    }

    return (
        <>
            <div>
                <Modal>
                    <Modal.Open opens='cabin-form'>
                        <Button>Add new cabin</Button>
                    </Modal.Open>
                    <Modal.Window name='cabin-form'>
                        <CreateCabinForm/>
                    </Modal.Window>
                </Modal>
            </div>

            {/*
            <Modal>
                <Modal.Open opens='table'>
                    <Button>Show table</Button>
                </Modal.Open>
                <Modal.Window name='table'>
                    <CabinTable/>
                </Modal.Window>
            </Modal>
            */}
        </>
    )
}

export default AddCabin

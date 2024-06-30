
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import {useForm} from "react-hook-form";

import FormRow from "../../ui/FormRow";

import { useCreateCabinHook } from "./useCreateCabin";


function CreateCabinForm({ cabinToEdit={}, onCloseModal  }) {

    const {id: editId, ...editValues} = cabinToEdit;
    const isEditSesstion = Boolean(editId);
    const {register, handleSubmit, reset, getValues, formState} = useForm({ defaultValues: isEditSesstion ? editValues : {} });

    const {errors} = formState;

    //console.log(errors);

    const {isCreating, createCabin} = useCreateCabinHook();
    const {isEditing, editCabin} = useEditCabinHook()

    
    const isWorking = isCreating || isEditing;


    function onSubmit(data) {
        const image = typeof(data.image) === 'string' ? data.image : data.image['0'];
        if (isEditSesstion){
            console.log('working in editing')
            editCabin({newCabin: {...data, image}, id: editId});
            onCloseModal?.()
        }
        else{
            console.log('working in creating')
            createCabin({...data, image}, { onSuccess: () => reset() } )
            onCloseModal?.()
        }
    }

    function onError(errors) {
        //console.log(errors)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? 'modal' : 'regular'}>
            <FormRow label='Cabin name' error={errors?.name?.message}>
                <Input type="text" id="name" {...register('name', {
                    required: 'Cabin name is required',
                })}/>
            </FormRow>

            <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
                <Input type="number" id="maxCapacity" disabled={isCreating} {...register('maxCapacity', {
                    required: 'Maximum capacity is required',
                    min: {value: 1, message: 'Capacity should be atleast 1'}
                })} />
            </FormRow>

            <FormRow label='Regular price' error={errors?.regularPrice?.message}>
                <Input type="number" id="regularPrice" disabled={isCreating} {...register('regularPrice', {required: 'Price is required'})} />
            </FormRow>

            <FormRow label='Discount' error={errors?.discount?.message}>
                <Input type="number" id="discount" disabled={isCreating} defaultValue={0} {...register('discount', {
                    required: 'discount is required',
                    validate: value => Number(value) <= getValues().regularPrice || 'Discount should be less than actual cabin price'
                })}/>
            </FormRow>

            <FormRow label='Description for website' error={errors?.description?.message}>
                <Textarea type="number" id="description" disabled={isCreating} defaultValue="" {...register('description', {required: 'description is required'})}/>
            </FormRow>

            <FormRow label='Cabin photo'>
                <FileInput id="image" accept="image/*" type='file' {...register('image', {
                    required: isEditSesstion ? false : "This field is required",
                })} />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
                    Cancel
                </Button>
                <Button disabled={isCreating} >{isEditSesstion ? 'Edit Cabin' : 'Create new Cabin'}</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;


import PropTypes from 'prop-types'
import {useEditCabinHook} from "./useEditCabinHook";

CreateCabinForm.propTypes = {
    cabinToEdit: PropTypes.object,
    onCloseModal: PropTypes.func,
}

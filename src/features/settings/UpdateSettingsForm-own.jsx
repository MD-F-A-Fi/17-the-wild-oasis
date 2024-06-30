import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import useSettingsHook from './useSettingsHook';

import {useUpdateSettingHook} from './useUpdateSettingHook'

function UpdateSettingsForm() {

    const {isLoading, settings: {minBookingLength, maxBookingLength, maxNumberGeustsPerBooking, breakfastPrice} = {} } = useSettingsHook();

    const {isUpdating, updateSetting} = useUpdateSettingHook();

    function handleUpdate(e, field) {
        const {value} = e.target;

        if(!value) return

        console.log({[field]: value});
        
        updateSetting({[field]: value});
    }

    if(isLoading) return <Spinner/>;

    return (
        <Form>
            <FormRow label='Minimum nights/booking'>
                <Input type='number' id='min-nights' defaultValue={minBookingLength} disabled={isUpdating} onBlur={e => handleUpdate(e, 'minBookingLength')} />
            </FormRow>
            <FormRow label='Maximum nights/booking'>
                <Input type='number' id='max-nights' defaultValue={maxBookingLength} disabled={isUpdating} onBlur={e => handleUpdate(e, 'maxBookingLength')} />
            </FormRow>
            <FormRow label='Maximum guests/booking'>
                <Input type='number' id='max-guests' defaultValue={maxNumberGeustsPerBooking} disabled={isUpdating} onBlur={e => handleUpdate(e, 'maxNumberGeustsPerBooking')} />
            </FormRow>
            <FormRow label='Breakfast price'>
                <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} disabled={isUpdating} onBlur={e => handleUpdate(e, 'breakfastPrice')} />
            </FormRow>
        </Form>
    );
}

export default UpdateSettingsForm;

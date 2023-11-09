import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'

function PhoneNumberValidation() {
    const [phoneNumber, setPhoneNumber] = useState();
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatPhoneNumber(value))
    }
    const validatPhoneNumber = () => {
        const patternPhoneNumber = /^(\+\d{1,3}[- ]?)?\d{}$/;
        return patternPhoneNumber.test(phoneNumber)
    }
    return (
        <>
            <div className='container'>
                <h1 style={{ textAlign: 'center', marginBottom: '200px' }}>Vaidation Phone number</h1>
                <label >
                    <span style={{ paddingBottom: '20px' }}>
                        Create a phone number :
                    </span>
                    <PhoneInput
                        style={{ marginTop: '20px' }}
                        isValid={valid}
                        country={'uz'}
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handleChange}
                        inputProps={{ required: true }} />
                </label>
            </div>
        </>
    )
}
export default PhoneNumberValidation
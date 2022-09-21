import * as Yup from 'yup';

const LandlordInfoSchema = Yup.object().shape(
    {
        landlordFirstName: Yup.string().max(20, 'Too Long').required('Required field'),
        landlordMiddleName: Yup.string().max(20, 'Too Long'),
        landlordLastName: Yup.string().max(20, 'Too Long').required('Required field'),
        identificationNo: Yup.string().min(6, 'Id incomplete').required('Identification Number required'),
        email: Yup.string().email('Enter a valid email').required('Email required'),
        address: Yup.string().required('Address Required'),
        mobileNo: Yup.number('Enter a valid number').required('Mobile number required'),
        tin: Yup.string().required('TIN required'),
        kinFirstName: Yup.string().min(2, 'Enter a valid name').required('Name required'),
        kinMiddleName: Yup.string().min(2, 'Enter a valid name'),
        kinLastName: Yup.string().min(2, 'Enter a valid name').required('Last name required'),
        kinAddress: Yup.string().min(4, 'Enter a valid address'),
        kinMobileNo: Yup.string().min(12, 'Enter a complete number').required('Mobile Number required'),
        kinEmail: Yup.string().email('Enter a valid email address'),
        accountNo: Yup.number().min(5, 'Enter a valid acccount number').required('Account Number is required'),
        propertyName: Yup.string().required('Property Name required'),
        address: Yup.string().required('Address required'),
        propertyIdentity: Yup.string().required('Property Identity Number'),
        road: Yup.string().required('Road name required'),
        landlordRequest: Yup.string().required('Enter a valid amount')
    }
)

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateName(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

export {LandlordInfoSchema, validateEmail, validateName}
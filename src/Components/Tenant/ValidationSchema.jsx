import * as Yup from 'yup';

const TenantInfoSchema = Yup.object().shape(
    {
        tenantFirstName: Yup.string().max(20, 'Too Long').required('Required field'),
        tenantMiddleName: Yup.string().max(20, 'Too Long'),
        tenantLastName: Yup.string().max(20, 'Too Long').required('Required field'),
        identificationNo: Yup.string().min(6, 'Id incomplete').required('Identification Number required'),
        // email: Yup.string().email('Enter a valid email').required('Email required'),
        address: Yup.string().required('Address Required'),
        mobileNo: Yup.number('Enter a valid number').required('Mobile number required'),
        tin: Yup.string().required('TIN required'),
        kinFirstName: Yup.string().min(2, 'Enter a valid name').required('Name required'),
        kinMiddleName: Yup.string().min(2, 'Enter a valid name'),
        kinLastName: Yup.string().min(2, 'Enter a valid name').required('Last name required'),
        kinAddress: Yup.string().min(4, 'Enter a valid address'),
        kinMobileNo: Yup.string().min(12, 'Enter a complete number').required('Mobile Number required'),
        kinEmail: Yup.string().email('Enter a valid email address'),
        accountNumber: Yup.number().min(5, 'Enter a valid acccount number').required('Account Number is required')
       
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

export {TenantInfoSchema, validateEmail, validateName}
import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
    money: Yup.number()
        .min(1, 'Must be positive!')     
        .required('Required'),
    percent: Yup.number()
        .min(1, 'Must be postive!')
        .required('Required'),
    minDate: Yup.date().required('Start date is required'),
    maxDate: Yup.date().required('End date is required'),
});
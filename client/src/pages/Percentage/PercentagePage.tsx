import { useCallback, useRef, useState } from 'react';
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from 'formik';
import { ValidationSchema } from './PercentagePage.const';
import { calcReturn, IIncomeResult } from './Percentage.utils/calcReturn';
import { downloadFile } from './Percentage.utils/downloadFile';
import { PercentageFormField } from './PercentagePage.typings';

import './PercentagePage.scss';

const defaultResult: IIncomeResult = {income: '0', details: [], incomePercentMultiplier: 0};

export function PercentagePage() {
    const onFormSubmit = useCallback(() => {}, []);
    const [result, setResult] = useState<IIncomeResult>(defaultResult);
    const [formValues, setFormValues] = useState<(string | number)[]>([]);
    const minDateRef = useRef<HTMLInputElement | null>(null);
    const maxDateRef = useRef<HTMLInputElement | null>(null);
    const interestRef = useRef<HTMLSelectElement | null>(null);

    const validateForm = useCallback((values: Record<PercentageFormField, string | number>) => {
        return validateYupSchema(values, ValidationSchema)
            .then(() => {
                const {money, percent, minDate, maxDate} = values;
                if (!minDate || !maxDate || !interestRef?.current?.value) {
                    return;
                }

                const interest = calcReturn(
                    Number(money),
                    interestRef.current.value,
                    [`${minDate}`, `${maxDate}`],
                    Number(percent),
                );

                setResult(interest);
                setFormValues([
                    money,
                    percent,
                    interestRef.current.value,
                    minDate,
                    maxDate,
                    interest.income
                ]);
            })
            .catch((err) => {
                setResult(prev => ({...prev, income: 'Invalid Form'}));
                setFormValues([]);
                return err;
            })
    }, []);

    const onReportSave = useCallback(() => {
        if (formValues.length) {
            downloadFile(result.details.map(([incomeTick, tickDate]) => {
                return [
                    ...formValues.slice(0, formValues.length - 2),
                    tickDate,
                    incomeTick
                ].join(',');
            }));
        }
    }, [formValues, result.details]);

    return (
        <div className="Page Page__Percentage">
            <Formik
                onSubmit={onFormSubmit}
                initialValues={{
                    [PercentageFormField.MIN_DATE]: '',
                    [PercentageFormField.MAX_DATE]: '',
                    [PercentageFormField.MONEY]: '',
                    [PercentageFormField.PERCENT]: '',
                    [PercentageFormField.INTEREST]: 'month',
                }}
                validationSchema={ValidationSchema}
                validate={validateForm}
                validateOnChange
            >
                <Form className="Percentage-Form">
                    <div className="Percentage-Form-Dates">
                        <div>
                            <div className='Percentage-Form-Field'>
                                <label htmlFor={PercentageFormField.MONEY}>Amount of money</label>
                                <Field
                                    name={PercentageFormField.MONEY}
                                    type="number"
                                    required
                                    placeholder="1000"
                                    min="1"
                                />
                                <ErrorMessage name={PercentageFormField.MONEY}>
                                    {msg => <div className='Percentage-Form-Error'>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className='Percentage-Form-Field'>
                                <label htmlFor={PercentageFormField.PERCENT}>Percent</label>
                                <Field
                                    name={PercentageFormField.PERCENT}
                                    type="number"
                                    placeholder="%"
                                    min="1"
                                />
                                <ErrorMessage name={PercentageFormField.PERCENT}>
                                    {msg => <div className='Percentage-Form-Error'>{msg}</div>}
                                </ErrorMessage>
                                <Field as="select" name="interest" innerRef={interestRef}>
                                    <option value="day">Daily</option>
                                    <option value="month">Monthly</option>
                                    <option value="year">Yearly</option>
                                </Field>
                            </div>
                        </div>
                        <div>
                            <div className="Percentage-Form-Field ">
                                <label htmlFor={PercentageFormField.MIN_DATE}>Date start</label>
                                <Field
                                    name={PercentageFormField.MIN_DATE}
                                    type="date"
                                    required
                                    placeholder="Date start"
                                    innerRef={minDateRef}
                                    max={maxDateRef?.current?.value}
                                />
                            </div>
                            <div className="Percentage-Form-Field">
                                <label htmlFor={PercentageFormField.MAX_DATE}>Date end</label>
                                <Field
                                    name={PercentageFormField.MAX_DATE}
                                    type="date"
                                    required
                                    placeholder="Date end"
                                    innerRef={maxDateRef}
                                    min={minDateRef?.current?.value}
                                />
                            </div>
                            <ErrorMessage name={PercentageFormField.MIN_DATE}>
                                {msg => <div className='Percentage-Form-Error'>{msg}</div>}
                            </ErrorMessage>
                            <ErrorMessage name={PercentageFormField.MAX_DATE}>
                                {msg => <div className='Percentage-Form-Error'>{msg}</div>}
                            </ErrorMessage>
                        </div>
                    </div>
                    <p><strong>Result: {result.income}</strong></p>
                    <details>
                        <summary><strong>Income percent multiplier {result.incomePercentMultiplier}</strong></summary>
                        <p>1/30 from <strong>percent</strong> for monthly income</p>
                        <p>1/12 from <strong>percent</strong> for yearly</p>
                    </details>
                    <button
                        type="submit"
                        onClick={onReportSave}
                        className={'Percentage-Form-Button'}
                    >
                        Save report
                    </button>

                    <details className="Percentage-Form-Howto">
                        <summary><strong>How it works</strong></summary>
                        <p><strong>For monthly range</strong>: Calculate how many months between end date and start date, then multiply initial number by percentage that much times</p>
                        <p><strong>Example</strong> - 1000$, 5% monthly for 1 year and 3 months (15 months in total):</p>
                        <p><code>1000 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 * 1,05 = 2079$</code></p>
                        <hr />
                        <p><strong>For yearly range</strong>: </p>
                        <ol>
                            <li>Count 1/12 from yearly interest (for example 12% yearly means 1% monthly)</li>
                            <li>Calculate how many months between end date and start date</li>
                            <li>Multiply initial amount by 1/12 from interest that much times</li>
                        </ol>
                        <p><strong>Example:</strong> - 1000$, 10% yearly, for 1 year and 3 months (15 months in total):</p>
                        <ol>
                            <li>Monthly interest - <code>10 / 12 / 100 (~0,083%)</code></li>
                            <li><code>1000 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 * 1,0083 = 1132$</code></li>
                        </ol>
                    </details>
                </Form>
            </Formik>
        </div>
    )
}
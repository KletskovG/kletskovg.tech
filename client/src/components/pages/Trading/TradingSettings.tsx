import { css } from '@emotion/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'wouter';
import { RootState } from '../../../store';
import Page from '../../layout/Page';
import arrowLeft from '../../../assets/icons/arrow-left.svg';

export default function TradingSettings() {
  const theme = useSelector((state: RootState) => state.theme);
  const [location, setLocation] = useLocation();
  const formStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form {
      input {
        padding: 5px;
      }

      &-button {
        ${theme.button}
      }
    }
  `;

  return (
    <Page>
      <div className={"page-menu"}>
        <div
          onClick={() => setLocation('/trading')}
          className={'navigation'}
          style={{
            display: 'inline-flex',
          }}
        >
          <span
            className={'element'}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <img src={arrowLeft} alt="Back to Home page" />
          </span>
          <span className={'link'}> Back to Trading </span>
        </div>
      </div>

      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          console.log(values)
        }}

      >
        {props => (
          <Form
            className={"form"}
            css={formStyles}
          >
            <div>
              <p> Ticker </p>
              <Field type="text" name="ticker" />
            </div>
            <div>
              <p> Account ID </p>
              <Field type="text" name="accountId" />
            </div>
            <div>
              <p> Token </p>
              <Field type="text" name="token" />
            </div>
            <div>
              <p> Percent </p>
              <Field type="number" name="percent" />
            </div>

            <button type={"submit"} className={"form-button"}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Page>
  )
}

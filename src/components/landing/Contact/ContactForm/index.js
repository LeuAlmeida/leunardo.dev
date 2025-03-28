import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, withFormik, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Input } from 'components/common';
import { toast } from 'react-toastify';
import { Error, Center, InputField } from './styles';

let captcha;

function ContactForm({ setFieldValue, isSubmitting, values, errors, touched, language }) {
  const [lang, setLang] = useState('english');

  useEffect(() => {
    setLang(language || lang);
  }, [lang, language]);

  return (
    <Form name="portfolio-dev" method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <InputField>
        <Input
          as={FastField}
          type="text"
          name="name"
          component="input"
          aria-label="name"
          placeholder={
            (lang === 'english' && 'Full name*') ||
            (lang === 'portuguese' && 'Nome completo*') ||
            (lang === 'german' && 'Vollständiger Name')
          }
          error={touched.name && errors.name}
        />
        <ErrorMessage component={Error} name="name" />
      </InputField>
      <InputField>
        <Input
          id="email"
          aria-label="email"
          component="input"
          as={FastField}
          type="email"
          name="email"
          placeholder={((lang === 'english' || lang === 'german') && 'Email*') || (lang === 'portuguese' && 'E-mail*')}
          error={touched.email && errors.email}
        />
        <ErrorMessage component={Error} name="email" />
      </InputField>
      <InputField>
        <Input
          as={FastField}
          component="textarea"
          aria-label="message"
          id="message"
          rows="8"
          type="text"
          name="message"
          placeholder={
            (lang === 'english' && 'Message*') ||
            (lang === 'portuguese' && 'Mensagem*') ||
            (lang === 'german' && 'Botschaft*')
          }
          error={touched.message && errors.message}
        />
        <ErrorMessage component={Error} name="message" />
      </InputField>
      <ReCAPTCHA
        sitekey="6LcaQrIZAAAAAOAo1aDXTTcTzAqyjwhup0pjiYQl"
        onChange={value => {
          captcha = value;
        }}
      />
      {values.success && (
        <InputField>
          <Center>
            <h4 style={{ fontSize: 14, marginTop: 10 }}>
              {lang === 'english' && 'Your message has been successfully sent, thank you!'}
              {lang === 'portuguese' && 'Sua mensagem foi enviada com sucesso, obrigado!'}
              {lang === 'german' && 'Ihre Nachricht wurde erfolgreich gesendet, danke!'}
            </h4>
          </Center>
        </InputField>
      )}
      <Center>
        <Button secondary type="submit" disabled={isSubmitting}>
          {lang === 'english' && 'Submit'}
          {lang === 'portuguese' && 'Enviar'}
          {lang === 'german' && 'Einreichen'}
        </Button>
      </Center>
    </Form>
  );
}

const formikForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
    }),
  handleSubmit: async ({ name, email, message }, { setSubmitting, resetForm, setFieldValue }) => {
    try {
      const encode = data =>
        Object.keys(data)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
          .join('&');
      if (captcha !== null && captcha !== undefined && captcha.length > 1) {
        await fetch('https://leunardo.dev/form.php?no-cache=1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'portfolio-dev',
            name,
            email,
            message,
          }),
        });
        await setSubmitting(false);
        await setFieldValue('success', true);
        setTimeout(() => resetForm(), 2000);
      } else {
        await setSubmitting(false);
        await setFieldValue('errro', false);
        return toast.error('Erro. ReCaptcha inválido.');
      }
    } catch (err) {
      setSubmitting(false);
      setFieldValue('success', false);
      alert('Something went wrong, please try again!') // eslint-disable-line
    }
  },
})(ContactForm);

export default connect(state => ({
  language: state.portuguese,
}))(formikForm);

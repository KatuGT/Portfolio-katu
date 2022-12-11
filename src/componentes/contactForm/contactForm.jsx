import { useRef } from 'react';
import {
  Button,
  ContactoTitulo,
  ErrorMessage,
  Form,
  Input,
  Label,
  Span,
  TextArea,
  WrapperContact,
  WrapperInput,
} from './ContactForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import Divisor from '../divisor/Divisor';

const ContactForm = () => {
  const schema = yup
    .object({
      name: yup.string().required('Required field').max(20),
      email: yup.string().email().required(),
      message: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formulario = useRef();

  const { t } = useTranslation(['contactForm'], { useSuspense: false });
  const mensajeToast = t('toast');

  const onSubmit = () => {
    emailjs
      .sendForm(
        'service_4kvvj65',
        'template_rxhsvpf',
        formulario.current,
        'Vtothha2vQZzdv3Dk'
      )
      .then(({ status }) => status === 200 && toast(mensajeToast))
      .catch((error) => console.error(error));
    reset();
  };

  return (
    <>
      <Divisor />
      <WrapperContact id='contacto'>
        <ContactoTitulo>{t('contact')}</ContactoTitulo>
        <Form onSubmit={handleSubmit(onSubmit)} ref={formulario}>
          <WrapperInput>
            <Label>
              <Input type='text' placeholder=' ' {...register('name')} />
              <Span>{t('name')}</Span>
            </Label>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </WrapperInput>
          <WrapperInput>
            <Label>
              <Input type='email' placeholder=' ' {...register('email')} />
              <Span>E-mail</Span>
            </Label>
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </WrapperInput>
          <WrapperInput>
            <Label>
              <TextArea placeholder=' ' rows='15' {...register('message')} />
              <Span>{t('message')}</Span>
            </Label>
            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
          </WrapperInput>
          <Button type='submit'>{t('send')}</Button>
        </Form>
        <Toaster
          position='bottom-center'
          toastOptions={{
            className: '',
            style: {
              padding: '16px',
              backgroundColor: 'var(--main-clr)',
              color: '#000',
            },
          }}
        />
      </WrapperContact>
    </>
  );
};

export default ContactForm;

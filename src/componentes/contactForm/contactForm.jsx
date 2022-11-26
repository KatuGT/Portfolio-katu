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

  const onSubmit = () => {
    emailjs
      .sendForm(
        'service_4kvvj65',
        'template_rxhsvpf',
        formulario.current,
        'Vtothha2vQZzdv3Dk'
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    reset();
  };
  return (
    <WrapperContact>
      <ContactoTitulo>Contact</ContactoTitulo>
      <Form onSubmit={handleSubmit(onSubmit)} ref={formulario}>
        <WrapperInput>
          <Label>
            <Input type='text' placeholder=' ' {...register('name')} />
            <Span>Nombre</Span>
          </Label>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </WrapperInput>
        <WrapperInput>
          <Label>
            <Input type='email' placeholder=' ' {...register('email')} />
            <Span>E-mail</Span>
          </Label>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </WrapperInput>
        <WrapperInput>
          <Label>
            <TextArea placeholder=' ' rows='15' {...register('message')} />
            <Span>Mensaje</Span>
          </Label>
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </WrapperInput>
        <Button type='submit'>Enviar</Button>
      </Form>
    </WrapperContact>
  );
};

export default ContactForm;

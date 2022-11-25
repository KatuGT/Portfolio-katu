import { Button, Form, Input, Label, Span, TextArea } from './ContactForm.styled'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const ContactForm = () => {
  const schema = yup.object({
    name: yup.string().required('Required field').max(20),
    email: yup.string().email().required(),
    message: yup.string().required(),
  }).required();
  
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input type="text"  placeholder=' ' {...register('name')}/>
        <Span>Nombre</Span>
      </Label>
      <Label>
        <Input type="email" placeholder=' '  {...register('email')}/>
        <Span>E-mail</Span>
      </Label>
      <Label>
        <TextArea placeholder=' ' rows="15"  {...register('message')}/>
        <Span>Mensaje</Span>
      </Label>
      <Button type='submit'>Enviar</Button>
    </Form>
  )
}

export default ContactForm
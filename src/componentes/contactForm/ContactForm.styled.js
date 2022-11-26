import styled from 'styled-components';

export const ContactoTitulo = styled.h3`
    margin: 0 auto;
    text-align: center;
`

export const WrapperContact = styled.section`

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: min(500px, 100%);
    margin: 4rem auto;
    color: #fff;
    gap: 2rem;
`

export const WrapperInput = styled.div``
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ErrorMessage = styled.p`
    color: red;
    font-weight: lighter;
`

export const Input = styled.input`
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    border-bottom: 1px solid var(--main-clr);
    background-color: transparent;
    color: #fff;
    &:focus{
        outline: none;
    }
`
export const TextArea = styled.textarea`
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    border-bottom: 1px solid var(--main-clr);
    background-color: transparent;
    color: #fff;
    resize: none;
    &:focus{
        outline: none;
    }
`
export const Span = styled.span`
    position: absolute;
    color: var(--main-clr);
    top: 8px;
    left: 10px;
    font-size: 18px;
    transition: all ease-in-out .2s;
    ${Input}:focus + &&,
    ${Input}:not(:placeholder-shown) + &&{
        font-size: 15px;
        top: -15px;
    }

    ${TextArea}:focus + &&,
    ${TextArea}:not(:placeholder-shown) + &&{
        font-size: 15px;
        top: -15px;
    }
`
export const Button = styled.button`
    all: unset;
    background-color: var(--main-clr);
    color: #000;
    text-align: center;
    padding: 0.5rem;
    border-radius: 5px;
    &:hover{
        background-color: #fff ;
        cursor: pointer;
        color: var(--main-clr-dark);
    }
`
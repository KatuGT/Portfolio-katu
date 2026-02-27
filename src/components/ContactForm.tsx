import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    t: {
        contact: string;
        name: string;
        message: string;
        send: string;
        toast: string;
    };
}

const ContactForm: React.FC<Props> = ({ t }) => {
    const schema = yup.object({
        name: yup.string().required('Campo requerido').max(20),
        email: yup.string().email('Email inválido').required('Campo requerido'),
        message: yup.string().required('Campo requerido'),
    }).required();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = () => {
        if (!formRef.current) return;

        emailjs.sendForm(
            'service_4kvvj65',
            'template_rxhsvpf',
            formRef.current,
            'Vtothha2vQZzdv3Dk'
        )
            .then(({ status }) => {
                if (status === 200) {
                    toast.success(t.toast, {
                        style: {
                            background: '#1f2937',
                            color: '#fff',
                            border: '1px solid rgba(139, 92, 246, 0.5)',
                        }
                    });
                    reset();
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <section id="contacto" className="py-24 px-6 max-w-4xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
                <h2 className="text-4xl md:text-6xl font-black neon-text-gradient uppercase tracking-tighter">
                    {t.contact}
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-neon-violet to-neon-cyan mx-auto rounded-full"></div>
            </div>

            <div className="glass-card p-8 md:p-12 shadow-2xl shadow-neon-violet/10">
                <form onSubmit={handleSubmit(onSubmit)} ref={formRef} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t.name}</label>
                            <input
                                {...register('name')}
                                placeholder="Tu nombre"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                            />
                            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">E-mail</label>
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
                            />
                            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t.message}</label>
                        <textarea
                            {...register('message')}
                            rows={5}
                            placeholder="¿En qué puedo ayudarte?"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                        />
                        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-neon-violet to-neon-cyan rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-neon-violet/20"
                    >
                        {t.send}
                    </button>
                </form>
            </div>

            <Toaster position="bottom-center" />
        </section>
    );
};

export default ContactForm;

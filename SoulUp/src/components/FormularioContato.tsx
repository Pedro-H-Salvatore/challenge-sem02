import { useState } from "react";
import { useForm } from "react-hook-form";
import CampoContato from "./CampoContato";

interface DadosContato {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const assuntos = ["Dúvida", "Sugestão", "Problema técnico", "Recompensas", "Parcerias", "Outro"];
const estiloCampo = "w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 aria-invalid:border-red-500";

export default function FormularioContato() {
  const [aviso, setAviso] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DadosContato>({
    mode: "onBlur",
    defaultValues: { nome: "", email: "", assunto: "", mensagem: "" },
  });

  const validarMensagem = () => {
    setAviso("Mensagem validada. O envio ainda não está disponível nesta demonstração; nenhum dado foi enviado.");
  };

  return (
    <section aria-labelledby="titulo-formulario" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <h2 id="titulo-formulario" className="mb-8 text-3xl font-bold text-slate-900">Envie uma Mensagem</h2>
      <form noValidate onSubmit={handleSubmit(validarMensagem, () => setAviso(""))} onChange={() => setAviso("")} className="space-y-7">
        <CampoContato id="contato-nome" titulo="Nome completo" erro={errors.nome?.message}>
          <input id="contato-nome" autoComplete="name" placeholder="Seu nome" maxLength={100} className={estiloCampo}
            aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "contato-nome-erro" : undefined}
            {...register("nome", {
              required: "Informe seu nome completo.",
              validate: (valor) => valor.trim().split(/\s+/).length >= 2 || "Informe nome e sobrenome.",
              maxLength: { value: 100, message: "Use até 100 caracteres." },
            })} />
        </CampoContato>

        <CampoContato id="contato-email" titulo="E-mail" erro={errors.email?.message}>
          <input id="contato-email" type="email" autoComplete="email" placeholder="seu@email.com" maxLength={254} className={estiloCampo}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "contato-email-erro" : undefined}
            {...register("email", {
              required: "Informe seu e-mail.",
              setValueAs: (valor: string) => valor.trim(),
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Informe um e-mail válido." },
              maxLength: { value: 254, message: "Use até 254 caracteres." },
            })} />
        </CampoContato>

        <CampoContato id="contato-assunto" titulo="Assunto" erro={errors.assunto?.message}>
          <select id="contato-assunto" className={estiloCampo} aria-invalid={!!errors.assunto}
            aria-describedby={errors.assunto ? "contato-assunto-erro" : undefined}
            {...register("assunto", { required: "Selecione um assunto." })}>
            <option value="">Selecione um assunto</option>
            {assuntos.map((assunto) => <option key={assunto} value={assunto}>{assunto}</option>)}
          </select>
        </CampoContato>

        <CampoContato id="contato-mensagem" titulo="Mensagem" erro={errors.mensagem?.message}>
          <textarea id="contato-mensagem" rows={6} maxLength={2000} placeholder="Escreva sua mensagem aqui..."
            className={`${estiloCampo} min-h-44 resize-y`} aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? "contato-mensagem-erro" : undefined}
            {...register("mensagem", {
              required: "Escreva sua mensagem.",
              validate: (valor) => valor.trim().length >= 10 || "Escreva pelo menos 10 caracteres.",
              maxLength: { value: 2000, message: "Use até 2.000 caracteres." },
            })} />
        </CampoContato>

        <p className="text-sm text-slate-500">Formulário demonstrativo: o envio de mensagens ainda não está conectado.</p>
        <button type="submit" disabled={isSubmitting}
          className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#2ECC71] to-[#3498DB] px-6 py-4 text-lg font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 disabled:cursor-wait disabled:opacity-60">
          {isSubmitting ? "Validando..." : "Enviar Mensagem →"}
        </button>
        {aviso && <p role="status" className="rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">{aviso}</p>}
      </form>
    </section>
  );
}
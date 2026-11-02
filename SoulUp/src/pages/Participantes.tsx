import { useState } from "react";
import { Link } from "react-router";
import { Carregando, ListaVazia, MensagemErro } from "../../components/EstadoTela";
import { useRequisicao } from "../../hooks/useRequisicao";
import { usuarioService } from "../../services/usuarioService";
import type { Usuario, UsuarioForm } from "../../types/api";

const formularioVazio: UsuarioForm = { nome: "", email: "" };
type Mensagem = { tipo: "sucesso" | "erro"; texto: string };

export default function Participantes() {
  const { estado, recarregar } = useRequisicao(() => usuarioService.listar(), []);
  const [form, setForm] = useState<UsuarioForm>(formularioVazio);
  const [emEdicao, setEmEdicao] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState<Mensagem | null>(null);
  const [salvando, setSalvando] = useState(false);

  function validar(): string | null {
    if (!/^[\p{L} ]{3,80}$/u.test(form.nome.trim())) return "Nome deve ter de 3 a 80 letras.";
    if (form.email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Informe um e-mail válido.";
    return null;
  }

  async function salvar() {
    const erro = validar();
    if (erro) {
      setMensagem({ tipo: "erro", texto: erro });
      return;
    }
    setSalvando(true);
    try {
      if (emEdicao === null) {
        const novo = await usuarioService.criar(form);
        setMensagem({ tipo: "sucesso", texto: `${novo.nome} cadastrado com sucesso!` });
      } else {
        await usuarioService.atualizar(emEdicao, form);
        setMensagem({ tipo: "sucesso", texto: "Participante atualizado!" });
      }
      setForm(formularioVazio);
      setEmEdicao(null);
      recarregar();
    } catch (e) {
      setMensagem({ tipo: "erro", texto: e instanceof Error ? e.message : "Erro ao salvar." });
    } finally {
      setSalvando(false);
    }
  }

  function editar(usuario: Usuario) {
    setEmEdicao(usuario.id);
    setForm({ nome: usuario.nome, email: usuario.email });
    setMensagem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelar() {
    setEmEdicao(null);
    setForm(formularioVazio);
    setMensagem(null);
  }

  async function excluir(usuario: Usuario) {
    if (!window.confirm(`Excluir ${usuario.nome}?`)) return;
    try {
      await usuarioService.excluir(usuario.id);
      setMensagem({ tipo: "sucesso", texto: `${usuario.nome} excluído.` });
      recarregar();
    } catch (e) {
      setMensagem({ tipo: "erro", texto: e instanceof Error ? e.message : "Erro ao excluir." });
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold text-[#1A1A2E] sm:text-5xl">Participantes</h1>
          <p className="mt-3 text-slate-500">Cadastre, edite ou remova participantes do SoulUp.</p>
        </header>

        <form onSubmit={(e) => { e.preventDefault(); void salvar(); }}
          className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            Nome
            <input value={form.nome} maxLength={80} required onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="rounded-xl border border-slate-300 px-4 py-3 font-normal" />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            E-mail
            <input type="email" value={form.email} maxLength={120} required onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border border-slate-300 px-4 py-3 font-normal" />
          </label>
          <div className="flex flex-wrap gap-3 md:col-span-2 lg:col-span-1">
            <button type="submit" disabled={salvando}
              className="cursor-pointer rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800 disabled:opacity-50">
              {salvando ? "Salvando..." : emEdicao === null ? "Cadastrar" : "Salvar alterações"}
            </button>
            {emEdicao !== null && (
              <button type="button" onClick={cancelar} className="cursor-pointer rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700">
                Cancelar
              </button>
            )}
          </div>
        </form>

        {mensagem && (
          <p role={mensagem.tipo === "erro" ? "alert" : "status"}
            className={`rounded-xl p-4 text-sm font-medium ${mensagem.tipo === "erro" ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-800"}`}>
            {mensagem.texto}
          </p>
        )}

        {estado.status === "carregando" && <Carregando texto="Carregando participantes..." />}
        {estado.status === "erro" && <MensagemErro mensagem={estado.mensagem} aoTentarNovamente={recarregar} />}
        {estado.status === "sucesso" && (estado.dados.length === 0 ? (
          <ListaVazia texto="Nenhum participante cadastrado ainda." />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {estado.dados.map((usuario) => (
              <li key={usuario.id} className="flex flex-col rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-lg font-bold text-slate-900">{usuario.nome}</p>
                <p className="break-all text-sm text-slate-500">{usuario.email}</p>
                <p className="mt-3 text-sm text-emerald-700">{usuario.nivel} · {usuario.pontos} pts · {usuario.totalAcoes} ações</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
                  <Link to={`/ranking/${usuario.id}`} className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200">Ver perfil</Link>
                  <button type="button" onClick={() => editar(usuario)} className="cursor-pointer rounded-full bg-sky-100 px-4 py-2 text-sky-800 hover:bg-sky-200">Editar</button>
                  <button type="button" onClick={() => void excluir(usuario)} className="cursor-pointer rounded-full bg-rose-100 px-4 py-2 text-rose-700 hover:bg-rose-200">Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </main>
  );
}

import { useState } from "react";
import BarraLateralDashboard from "../../components/BarraLateralDashboard";
import IndicadoresDashboard from "../../components/IndicadoresDashboard";
import ProgressoNivel from "../../components/ProgressoNivel";
import AcoesRapidas from "../../components/AcoesRapidas";
import AtividadesRecentes from "../../components/AtividadesRecentes";
import ConquistasDashboard from "../../components/ConquistasDashboard";
import { Carregando, ListaVazia, MensagemErro } from "../../components/EstadoTela";
import { useRequisicao } from "../../hooks/useRequisicao";
import { usuarioService } from "../../services/usuarioService";
import { acaoService } from "../../services/acaoService";
import { registroService } from "../../services/registroService";
import { formatarData } from "../../utils/formatarData";
import { iconePorCategoria } from "./DadosDashboard";
import type { Atividade } from "./DadosDashboard";
import type { Acao, RegistroAcao, Usuario } from "../../types/api";
export default function Dashboard() {
  const inicial = useRequisicao(() => Promise.all([usuarioService.listar(), acaoService.listar()]), []);
  const [idEscolhido, setIdEscolhido] = useState<number | null>(null);
  const [aviso, setAviso] = useState("");
  const [salvando, setSalvando] = useState(false);

  const usuarios = inicial.estado.status === "sucesso" ? inicial.estado.dados[0] : [];
  const acoes = inicial.estado.status === "sucesso" ? inicial.estado.dados[1] : [];
  const idAtual = idEscolhido ?? usuarios[0]?.id ?? null;

  const perfil = useRequisicao<[Usuario, RegistroAcao[]] | null>(
    () => (idAtual === null ? Promise.resolve(null) : Promise.all([usuarioService.buscar(idAtual), usuarioService.registros(idAtual)])),
    [idAtual],
  );

  async function registrar(acao: Acao) {
    if (idAtual === null) return;
    setSalvando(true);
    try {
      await registroService.criar({ idUsuario: idAtual, idAcao: acao.id });
      setAviso(${acao.nome} registrada: +${acao.pontos} pontos!);
      perfil.recarregar();
    } catch (erro) {
      setAviso(erro instanceof Error ? erro.message : "Não foi possível registrar a ação.");
    } finally {
      setSalvando(false);
    }
  }

  async function desfazer(idRegistro: string) {
    setSalvando(true);
    try {
      await registroService.excluir(Number(idRegistro));
      setAviso("Registro desfeito.");
      perfil.recarregar();
    } catch (erro) {
      setAviso(erro instanceof Error ? erro.message : "Não foi possível desfazer.");
    } finally {
      setSalvando(false);
    }
  }

  if (inicial.estado.status === "carregando") {
    return <main className="min-h-screen bg-slate-100 p-8"><Carregando texto="Carregando dashboard..." /></main>;
  }
  if (inicial.estado.status === "erro") {
    return <main className="min-h-screen bg-slate-100 p-8"><MensagemErro mensagem={inicial.estado.mensagem} aoTentarNovamente={inicial.recarregar} /></main>;
  }
  if (usuarios.length === 0) {
    return <main className="min-h-screen bg-slate-100 p-8"><ListaVazia texto="Nenhum participante cadastrado. Cadastre um na página Participantes." /></main>;
  }

  const dados = perfil.estado.status === "sucesso" ? perfil.estado.dados : null;
  const usuario = dados?.[0];
  const registros = dados?.[1] ?? [];
  const pontos = usuario?.pontos ?? 0;
  const atividades: Atividade[] = [...registros].reverse().slice(0, 5).map((registro) => ({
    id: String(registro.id),
    icone: iconePorCategoria[acoes.find((acao) => acao.id === registro.idAcao)?.categoria ?? "ENGAJAMENTO"],
    descricao: registro.nomeAcao,
    quando: formatarData(registro.dataRegistro),
    pontos: registro.pontos,
  }));

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <BarraLateralDashboard pontos={pontos} evoluiu={pontos >= 80} />
      <main className="min-w-0 flex-1 p-4 sm:p-8 xl:p-10">
        <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Olá, {usuario ? usuario.nome.split(" ")[0] : "participante"}! 🌱</h1>
            <p className="mt-3 text-slate-500">{usuario ? Nível atual: ${usuario.nivel} : "Escolha um participante."}</p>
          </div>
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            Participante
            <select value={idAtual ?? ""} onChange={(e) => { setIdEscolhido(Number(e.target.value)); setAviso(""); }}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 font-normal">
              {usuarios.map((u) => <option key={u.id} value={u.id}>{u.nome}</option>)}
            </select>
          </label>
        </header>

        {perfil.estado.status === "carregando" && <Carregando texto="Carregando dados do participante..." />}
        {perfil.estado.status === "erro" && <MensagemErro mensagem={perfil.estado.mensagem} aoTentarNovamente={perfil.recarregar} />}

        {usuario && (
          <>
            <IndicadoresDashboard pontos={usuario.pontos} acoes={usuario.totalAcoes} />
            <p role="status" className="my-4 min-h-6 text-sm text-emerald-700">{aviso}</p>
            <div className="grid gap-6 xl:grid-cols-2">
              <ProgressoNivel pontos={usuario.pontos} />
              <AcoesRapidas acoes={acoes} idsRegistrados={registros.map((r) => r.idAcao)} desabilitado={salvando} aoRegistrar={registrar} />
              <AtividadesRecentes atividades={atividades} aoDesfazer={desfazer} desabilitado={salvando} />
              <ConquistasDashboard pontos={usuario.pontos} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

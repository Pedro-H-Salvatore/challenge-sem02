import { Link, useNavigate, useParams } from "react-router";
import { Carregando, ListaVazia, MensagemErro } from "../../components/EstadoTela";
import { useRequisicao } from "../../hooks/useRequisicao";
import { ApiError } from "../../services/api";
import { usuarioService } from "../../services/usuarioService";
import { formatarData } from "../../utils/formatarData";
import type { UsuarioComRegistros } from "../../types/api";

async function buscarPerfil(id: number): Promise<UsuarioComRegistros> {
  const [usuario, registros] = await Promise.all([usuarioService.buscar(id), usuarioService.registros(id)]);
  return { ...usuario, registros };
}

export default function DetalheRanking() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const idValido = id !== undefined && /^[1-9]\d*$/.test(id);

  const { estado, recarregar } = useRequisicao(
    () => (idValido ? buscarPerfil(Number(id)) : Promise.reject(new ApiError(404, "Participante não encontrado"))),
    [id],
  );
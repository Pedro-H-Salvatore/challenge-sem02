// "2026-10-29" (formato da API) -> "29/10/2026"
export function formatarData(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR");
}

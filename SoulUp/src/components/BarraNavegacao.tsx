import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router";

const BarraNavegacao = () => {
  const { pathname, hash } = useLocation();
  const estiloLink = ({
    isActive,
  }: {
    isActive: boolean;
  }) => {
    const estiloBase =
      "inline-flex min-h-11 items-center justify-center px-3 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400";

    const estiloAtivo =
      "bg-white/15 text-white";

    const estiloInativo =
      "text-white/75 hover:text-white hover:bg-white/10";

    return `${estiloBase} ${
      isActive ? estiloAtivo : estiloInativo
    }`;
  };

  const navigate = useNavigate();

  const botaoDashboard = () => {
    navigate("/dashboard");
  };

  const botaoSoul = () => {
    navigate("/");
  };

  return (
    <header className="bg-[#1A1A2E] px-4 py-4 text-gray-300 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-xl font-bold sm:text-2xl">
          <button
            type="button"
            onClick={botaoSoul}
            className="cursor-pointer text-white"
          >
            🌿 SoulUp
          </button>
        </div>

        {/* Links */}
        <nav aria-label="Navegação principal" className="order-3 grid w-full grid-cols-2 gap-1 sm:flex sm:flex-wrap sm:justify-center sm:gap-2 xl:order-none xl:w-auto">
          <NavLink
            to="/"
            end
            className={({ isActive }) => estiloLink({ isActive: isActive && !hash })}
          >
            Início
          </NavLink>

          <Link
            to="/#como-funciona"
            className={estiloLink({ isActive: pathname === "/" && hash === "#como-funciona" })}
            aria-current={pathname === "/" && hash === "#como-funciona" ? "location" : undefined}
          >
            Como funciona
          </Link>

          <Link
            to="/#recompensas"
            className={estiloLink({ isActive: pathname === "/" && hash === "#recompensas" })}
            aria-current={pathname === "/" && hash === "#recompensas" ? "location" : undefined}
          >
            Recompensas
          </Link>

          <NavLink
            to="/ranking"
            className={estiloLink}
          >
            Ranking
          </NavLink>

          <NavLink
            to="/faq"
            className={estiloLink}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contato"
            className={estiloLink}
          >
            Contato
          </NavLink>
        </nav>

        {/* Botão */}
        <button
          type="button"
          onClick={botaoDashboard}
          className="min-h-11 shrink-0 px-4 py-2 text-sm sm:w-40 sm:text-base cursor-pointer rounded-full bg-linear-to-br from-[#2ECC71] to-[#3498DB] font-semibold text-white"
        >
          Começar agora
        </button>
      </div>
    </header>
  );
};

export default BarraNavegacao;

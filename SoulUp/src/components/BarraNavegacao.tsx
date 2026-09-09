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
      "px-3 py-2 rounded-full font-semibold transition-colors duration-300";

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
    <header className="bg-[#1A1A2E] px-8 py-4 text-gray-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <button
            type="button"
            onClick={botaoSoul}
            className="cursor-pointer text-white"
          >
            🌿 SoulUp
          </button>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-3">
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
          className="h-10 w-40 cursor-pointer rounded-full bg-linear-to-br from-[#2ECC71] to-[#3498DB] font-semibold text-white"
        >
          Começar agora
        </button>
      </div>
    </header>
  );
};

export default BarraNavegacao;

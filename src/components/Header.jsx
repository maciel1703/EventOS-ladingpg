function Header({ onCriarConta, onEntrar, logado }) {
  function criar(event) {
    event.preventDefault()
    onCriarConta()
  }

  function entrar(event) {
    event.preventDefault()
    onEntrar()
  }

  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top">
          <span className="mark" aria-hidden="true"></span>Event<span className="accent">OS</span>
        </a>

        {!logado && (
          <>
            <nav className="navlinks">
              <a href="#recursos">Recursos</a>
              <a href="#quem-usa">Quem usa</a>
              <a href="#numeros">Números</a>
              <a href="#planos">Planos</a>
            </nav>
            <div className="nav-actions">
              <a className="btn ghost" href="#" onClick={entrar}>Entrar</a>
              <a className="btn" href="#" onClick={criar}>Criar meu evento</a>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header

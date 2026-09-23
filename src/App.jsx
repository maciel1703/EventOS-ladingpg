import { useState, useEffect } from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import './App.css'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [contaCriada, setContaCriada] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [mostrarLogin, setMostrarLogin] = useState(false)
  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')

  const [logado, setLogado] = useState(false)

  useEffect(() => {
    const emailSalvo = localStorage.getItem('emailSave')

    if (emailSalvo) {
      setContaCriada(true)
    }
  }, [])

  function criarConta() {
    setMostrarFormulario(true)
  }

  function entrarConta() {
    setMostrarLogin(true)
  }

  function fecharFormularios() {
    setMostrarFormulario(false)
    setMostrarLogin(false)
  }

  function cadastrar(event) {
    event.preventDefault()

    if (nome === '' || email === '' || senha === '') {
      alert('Preencha todos os campos')
      return
    }

    localStorage.setItem('nameSave', nome)
    localStorage.setItem('emailSave', email)
    localStorage.setItem('senhaSave', senha)

    alert('Conta criada com sucesso!')

    setMostrarFormulario(false)
    setContaCriada(true)
  }

  function login(event) {
    event.preventDefault()

    const emailSalvo = localStorage.getItem('emailSave')
    const senhaSalva = localStorage.getItem('senhaSave')

    if (emailLogin === emailSalvo && senhaLogin === senhaSalva) {
      alert('Login realizado com sucesso!')
      setLogado(true)
      setMostrarLogin(false)
    } else {
      alert('E-mail ou senha incorretos')
    }
  }

  function sair() {
    setLogado(false)
  }

  return (
    <>
      <Header onCriarConta={criarConta} onEntrar={entrarConta} logado={logado} />

      {!logado && <Landing onCriarConta={criarConta} />}

      {(mostrarFormulario || mostrarLogin) && (
        <div className="auth-overlay" onClick={fecharFormularios}>
          <div className="auth-modal" onClick={(evento) => evento.stopPropagation()}>
            <button
              type="button"
              className="auth-close"
              aria-label="Fechar"
              onClick={fecharFormularios}
            >
              ×
            </button>

            {contaCriada && !logado && (
              <p className="login-notice">Você já possui uma conta!</p>
            )}

            {mostrarFormulario && (
              <div className="auth-card">
                <h2>Criar sua conta</h2>
                <p className="auth-subtitle">Cadastre-se para gerenciar seus eventos</p>

                <form className="auth-form" onSubmit={cadastrar}>
                  <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                      id="nome"
                      type="text"
                      placeholder="Seu nome"
                      value={nome}
                      onChange={(evento) => setNome(evento.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Seu e-mail"
                      value={email}
                      onChange={(evento) => setEmail(evento.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="senha">Senha</label>
                    <input
                      id="senha"
                      type="password"
                      placeholder="Sua senha"
                      value={senha}
                      onChange={(evento) => setSenha(evento.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn">Cadastrar</button>
                </form>
              </div>
            )}

            {mostrarLogin && (
              <div className="auth-card">
                <h2>Entrar na conta</h2>
                <p className="auth-subtitle">Acesse seu painel do EventOS</p>

                <form className="auth-form" onSubmit={login}>
                  <div>
                    <label htmlFor="email-login">E-mail</label>
                    <input
                      id="email-login"
                      type="email"
                      placeholder="Seu e-mail"
                      value={emailLogin}
                      onChange={(evento) => setEmailLogin(evento.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="senha-login">Senha</label>
                    <input
                      id="senha-login"
                      type="password"
                      placeholder="Sua senha"
                      value={senhaLogin}
                      onChange={(evento) => setSenhaLogin(evento.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn">Entrar</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {logado && (
        <div className="login-page">
          <div className="welcome-card">
            <span className="brand-mark">EO</span>
            <h2>Bem-vindo ao sistema!</h2>
            <button className="btn btn-logout" onClick={sair}>Sair</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App

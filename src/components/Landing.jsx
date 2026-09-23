function Landing({ onCriarConta }) {
  function criar(event) {
    event.preventDefault()
    onCriarConta()
  }

  const barras = [28, 41, 35, 52, 48, 63, 57, 71, 66, 82, 74, 91, 86, 100]

  return (
    <>
      <main id="top">

        <section className="hero">
          <div className="wrap">
            <span className="tag"><i></i> Gestão de eventos de ponta a ponta</span>
            <h1>Venda ingressos, faça o check-in e acompanhe tudo <span className="accent">em tempo real.</span></h1>
            <p className="sub">O EventOS reúne inscrições, pagamentos, portaria e relatórios num painel só. Você monta o evento em minutos e passa o dia olhando para o público, não para planilhas.</p>
            <div className="cta-row">
              <a className="btn lg" href="#" onClick={criar}>Criar meu evento</a>
              <a className="btn ghost lg" href="#recursos">Ver como funciona</a>
            </div>
            <p className="note"><b>Grátis até 50 inscrições.</b> Sem cartão de crédito, sem mensalidade para eventos gratuitos.</p>

            <div className="app" role="img" aria-label="Painel do EventOS mostrando ingressos vendidos, receita e check-ins em tempo real">
              <div className="app-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="path">app.eventos.com.br / Festival de Inverno 2026 / painel</span>
              </div>
              <div className="app-body">
                <aside className="side">
                  <h4>Evento</h4>
                  <a className="on" href="#recursos"><span className="sq"></span> Painel</a>
                  <a href="#recursos"><span className="sq"></span> Ingressos</a>
                  <a href="#recursos"><span className="sq"></span> Participantes</a>
                  <a href="#recursos"><span className="sq"></span> Check-in</a>
                  <a href="#recursos"><span className="sq"></span> Financeiro</a>
                  <a href="#recursos"><span className="sq"></span> Equipe</a>
                </aside>
                <div className="main">
                  <div className="kpis">
                    <div className="kpi"><span>Ingressos vendidos</span><b>1.842</b></div>
                    <div className="kpi up"><span>Receita líquida</span><b>R$ 96.410</b></div>
                    <div className="kpi"><span>Check-ins hoje</span><b>1.207</b></div>
                  </div>
                  <div className="chart">
                    <div className="chart-h"><span>Vendas por dia · últimos 14 dias</span><span>+38%</span></div>
                    <div className="bars" aria-hidden="true">
                      {barras.map((altura, i) => (
                        <i key={i} style={{ height: `${altura}%` }}></i>
                      ))}
                    </div>
                  </div>
                  <div className="rows">
                    <div className="row"><span>Últimas inscrições</span><span>Lote</span><span>Status</span></div>
                    <div className="row"><span>Ana Ribeiro</span><span>Pista 2º lote</span><span className="pill">Pago</span></div>
                    <div className="row"><span>Caio Menezes</span><span>Camarote</span><span className="pill">Pago</span></div>
                    <div className="row"><span>Júlia Tavares</span><span>Pista 2º lote</span><span className="pill gray">Pix pendente</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="strip">
          <div className="wrap">
            <small>Usado por quem produz</small>
            <ul>
              <li>Festival Serrano</li><li>Congresso Meridiano</li><li>Arena Norte</li><li>Casa Tapera</li><li>Sesc Cultural</li>
            </ul>
          </div>
        </div>

        <section id="recursos">
          <div className="wrap">
            <div className="sec-head">
              <span className="tag"><i></i> Recursos</span>
              <h2>Tudo que o seu evento precisa, <span className="accent">sem cinco sistemas diferentes.</span></h2>
              <p>Da página de vendas ao relatório final, cada etapa conversa com a anterior. O que entra na bilheteria já aparece na portaria e no financeiro.</p>
            </div>

            <article className="feature">
              <div className="ftext">
                <h3>Ingressos e lotes do seu jeito</h3>
                <p>Crie lotes, cupons, meia-entrada e cortesias em minutos. O Pix cai na hora e o cartão é repassado em D+2.</p>
                <ul>
                  <li>Pix, cartão e boleto com taxa única</li>
                  <li>Virada de lote automática por data ou quantidade</li>
                  <li>Página de vendas pronta com o seu domínio</li>
                </ul>
              </div>
              <div className="shot">
                <h5>Bilheteria</h5>
                <div className="ticket">
                  <div className="l">
                    <b>Festival de Inverno</b>
                    <span>18 jul · 20h · Teatro Municipal</span>
                    <div className="tiers">
                      <div className="tier"><span>Pista — 2º lote</span><b>R$ 90</b></div>
                    </div>
                  </div>
                  <div className="r"><span className="qr" aria-hidden="true"></span></div>
                </div>
                <div className="tiers">
                  <div className="tier"><div style={{ flex: 1 }}><span>1º lote — esgotado</span><div className="bar"><i style={{ width: '100%' }}></i></div></div></div>
                  <div className="tier"><div style={{ flex: 1 }}><span>2º lote — 612 de 800</span><div className="bar"><i style={{ width: '76%' }}></i></div></div></div>
                </div>
              </div>
            </article>

            <article className="feature flip">
              <div className="ftext">
                <h3>Check-in em menos de um segundo</h3>
                <p>A portaria lê o QR code pelo celular, mesmo sem internet. Quando a conexão volta, tudo sincroniza sozinho.</p>
                <ul>
                  <li>Funciona offline em qualquer celular</li>
                  <li>Bloqueia ingresso repetido na hora</li>
                  <li>Vários portões contando no mesmo painel</li>
                </ul>
              </div>
              <div className="shot">
                <h5>Portaria · Portão A</h5>
                <div className="scan"><span className="frame"></span><span className="laser"></span></div>
                <div className="checks">
                  <div className="check"><span className="ok">✓</span> Ana Ribeiro · Pista <small>19:42</small></div>
                  <div className="check"><span className="ok">✓</span> Caio Menezes · Camarote <small>19:42</small></div>
                </div>
              </div>
            </article>

            <article className="feature">
              <div className="ftext">
                <h3>O financeiro fechado antes de você chegar em casa</h3>
                <p>Receita, taxas, reembolsos e repasses de parceiros calculados a cada venda. Exporte em CSV ou mande direto para o contador.</p>
                <ul>
                  <li>Repasse automático para sócios e produtores</li>
                  <li>Relatório de público por lote, cidade e canal</li>
                  <li>Exportação em CSV e integração com ERPs</li>
                </ul>
              </div>
              <div className="shot">
                <h5>Fechamento</h5>
                <div className="rows" style={{ marginTop: 0 }}>
                  <div className="row"><span>Linha</span><span>Valor</span><span></span></div>
                  <div className="row"><span>Vendas brutas</span><span>R$ 104.780</span><span className="pill gray">1.842</span></div>
                  <div className="row"><span>Taxas EventOS</span><span>− R$ 6.286</span><span className="pill gray">6%</span></div>
                  <div className="row"><span>Reembolsos</span><span>− R$ 2.084</span><span className="pill gray">23</span></div>
                  <div className="row"><span><b>Repasse a receber</b></span><span><b>R$ 96.410</b></span><span className="pill">D+2</span></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="quem-usa" style={{ background: '#0B0910', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="tag"><i></i> Quem usa</span>
              <h2>Feito para quem enche a casa toda semana.</h2>
            </div>
            <div className="grid3">
              <div className="card">
                <span className="num">Shows e festivais</span>
                <h3>Bilheteria que aguenta a fila</h3>
                <p>Lotes que viram sozinhos, camarotes com mapa de mesas e portaria com vários acessos ao mesmo tempo.</p>
              </div>
              <div className="card">
                <span className="num">Congressos</span>
                <h3>Crachá, trilhas e certificado</h3>
                <p>Inscrição por trilha, controle de presença por palestra e certificado enviado automaticamente no fim.</p>
              </div>
              <div className="card">
                <span className="num">Cursos e workshops</span>
                <h3>Turmas pequenas, zero atrito</h3>
                <p>Vagas limitadas, lista de espera automática e lembrete no WhatsApp um dia antes de começar.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="numeros">
          <div className="wrap">
            <div className="sec-head">
              <span className="tag"><i></i> Números</span>
              <h2>Produtores já rodam o dia inteiro no EventOS.</h2>
            </div>
            <div className="stats">
              <div className="stat"><b>4.200</b><span>eventos publicados</span></div>
              <div className="stat"><b>1,3 M</b><span>ingressos emitidos</span></div>
              <div className="stat"><b>0,4 s</b><span>tempo médio de check-in</span></div>
              <div className="stat"><b>99,9%</b><span>disponibilidade na bilheteria</span></div>
            </div>
          </div>
        </section>

        <section id="planos" style={{ background: '#0B0910', borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="tag"><i></i> Planos</span>
              <h2>Você só paga quando vende.</h2>
              <p>Evento gratuito não tem custo nenhum. Evento pago tem taxa única, sem mensalidade e sem contrato de fidelidade.</p>
            </div>
            <div className="plans">
              <div className="plan">
                <h3>Start</h3>
                <div className="price">Grátis <small>para sempre</small></div>
                <ul>
                  <li>Até 50 inscrições por evento</li>
                  <li>Página de vendas e check-in por QR</li>
                  <li>Relatório básico de público</li>
                </ul>
                <a className="btn ghost" href="#" onClick={criar}>Começar agora</a>
              </div>
              <div className="plan best">
                <span className="badge">Mais usado</span>
                <h3>Pro</h3>
                <div className="price">6% <small>por ingresso vendido</small></div>
                <ul>
                  <li>Inscrições ilimitadas</li>
                  <li>Pix na hora e cartão em D+2</li>
                  <li>Portaria offline com vários portões</li>
                  <li>Repasse automático para parceiros</li>
                </ul>
                <a className="btn" href="#" onClick={criar}>Criar meu evento</a>
              </div>
              <div className="plan">
                <h3>Arena</h3>
                <div className="price">Sob medida <small>acima de 10 mil pessoas</small></div>
                <ul>
                  <li>Taxa negociada por volume</li>
                  <li>Gerente de conta no dia do evento</li>
                  <li>Integração com ERP e catracas</li>
                </ul>
                <a className="btn ghost" href="#top">Falar com vendas</a>
              </div>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <h2>Seu próximo evento abre <span className="accent">as vendas hoje.</span></h2>
            <p>Monte a página, escolha os lotes e comece a vender em menos de dez minutos.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <a className="btn lg" href="#" onClick={criar}>Criar meu evento</a>
              <a className="btn ghost lg" href="#recursos">Agendar uma demonstração</a>
            </div>
            <p className="note">Grátis até 50 inscrições · Sem cartão de crédito</p>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap">
          <a className="logo" href="#top" style={{ fontSize: '18px' }}><span className="mark" aria-hidden="true"></span>Event<span className="accent">OS</span></a>
          <nav>
            <a href="#recursos">Recursos</a>
            <a href="#planos">Planos</a>
            <a href="#numeros">Números</a>
            <a href="#top">Suporte</a>
          </nav>
          <span className="author">maciel <em>//</em> dev</span>
        </div>
      </footer>
    </>
  )
}

export default Landing

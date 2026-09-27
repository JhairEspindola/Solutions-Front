import Text from "../../components/text/text";
import Header from "../../components/encabezado/encabezado";
import Footer from "../../components/pie_de_pagina/pie_de_pagina";
import {Link} from "react-router-dom";
import "./principal.css";

function Welcome() {
  return (
    <>
      <Header/>
      <main className="welcome-page">
        <section className="welcome-hero">
          <div className="hero-content">
            <Text/>
            <div className="hero-actions">
              <Link className="button button-primary" to="/descripcion">Explorar funcionalidades</Link>
              <a className="button button-secondary" href="#beneficios">Conoce más</a>
            </div>
          </div>
        </section>
        <section className="welcome-content" id="beneficios">
          <div className="section-heading">
            <h2>Todo lo que necesitas para trabajar mejor</h2>
            <p>Menos tiempo buscando información y más tiempo atendiendo a tus clientes.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">✓</div>
              <h3>Inventario actualizado</h3>
              <p>Agrega, edita y elimina productos desde un espacio organizado y fácil de entender.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">!</div>
              <h3>Más control del stock</h3>
              <p>Identifica rápidamente los productos que necesitan atención antes de que se agoten.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">↗</div>
              <h3>Decisiones más claras</h3>
              <p>Consulta la información de tu negocio de forma simple para planificar tus compras.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer/>
    </>
    
  );
}
export default Welcome;
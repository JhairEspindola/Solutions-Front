import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../encabezado/encabezado";
import Footer from "../pie_de_pagina/pie_de_pagina";
import "./inventario_registrar.css";

function Hijo({ onContinue }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleContinue = (values) => {
    onContinue({
      nombre: values.nombre.trim(),
      tipo: values.tipo,
      marca: values.marca.trim(),
      precio: Number(values.precio),
      peso: values.peso.trim(),
      descripcion: values.descripcion.trim(),
    });
    navigate("/inventario_modificar");
  };

  return (
    <>
      <Header />
      <main className="hijo-page">
        <section className="hijo-shell">
          <div className="hijo-heading">
            <p className="hijo-kicker">INVENTARIO / NUEVO PRODUCTO</p>
            <h1>Registrar producto</h1>
            <p>Agrega los datos del producto. En el siguiente paso podrás indicar cuántas unidades ingresan al inventario.</p>
          </div>

          <form className="hijo-form" onSubmit={handleSubmit(handleContinue)}>
            <div className="hijo-fields">
              <div className="hijo-field hijo-field-full">
                <label htmlFor="nombre">Nombre del producto *</label>
                <input id="nombre" type="text" minLength="2" placeholder="Ej. Manzana roja" required {...register("nombre", { required: true, minLength: 2 })} />
              </div>
              <div className="hijo-field">
                <label htmlFor="tipo">Tipo de producto *</label>
                <input id="tipo" type="text" placeholder="Ej. Fruta" required {...register("tipo", { required: true })} />
              </div>
              <div className="hijo-field">
                <label htmlFor="marca">Marca o proveedor *</label>
                <input id="marca" type="text" placeholder="Ej. Productores locales" required {...register("marca", { required: true })} />
              </div>
              <div className="hijo-field">
                <label htmlFor="precio">Precio por unidad *</label>
                <input id="precio" type="number" min="0" step="0.01" placeholder="0.00" required {...register("precio", { required: true, min: 0 })} />
              </div>
              <div className="hijo-field">
                <label htmlFor="peso">Peso o presentación *</label>
                <input id="peso" type="text" placeholder="Ej. 1 kg" required {...register("peso", { required: true })} />
              </div>
              <div className="hijo-field hijo-field-full">
                <label htmlFor="descripcion">Descripción</label>
                <textarea id="descripcion" placeholder="Detalles adicionales del producto" {...register("descripcion")} />
              </div>
            </div>
            <div className="hijo-actions">
              <button className="hijo-submit" type="submit">Continuar a unidades</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Hijo;
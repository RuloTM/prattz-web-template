"use client";

import { useState } from "react";
export default function Home() {
    const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");
const [empresa, setEmpresa] = useState("");
const [mensaje, setMensaje] = useState("");

const businessName = "Prattz Labs";
const whatsappNumber = "525524949232";
const enviarWhatsApp = () => {
  const texto = ` Nueva solicitud de cotización

Nombre: ${nombre}
Teléfono: ${telefono}
Empresa: ${empresa}

Mensaje:
${mensaje}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
};
  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 flex justify-between items-center px-8 py-5">
  <h2 className="text-2xl font-bold">
    Prattz Labs
  </h2>

  <div className="hidden md:flex gap-8 font-medium">
    <a href="#inicio" className="hover:text-green-600">Inicio</a>
    <a href="#servicios" className="hover:text-green-600">Servicios</a>
    <a href="#trabajos" className="hover:text-green-600">Portafolio</a>
    <a href="#contacto" className="hover:text-green-600">Contacto</a>
  </div>

  <a
    href="https://wa.me/525524949232?text=Hola,%20me%20interesa%20una%20cotización"
    target="_blank"
    className="bg-black text-white px-5 py-2 rounded-lg"
  >
    Contactar
  </a>
</nav>
<section
  id="inicio"
  className="relative min-h-[700px] flex flex-col items-center justify-center text-center bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2')",
  }}
>
  <div className="absolute inset-0 bg-black/55"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Consigue más clientes con una página web profesional
        </h1>

        <p className="text-xl text-white max-w-3xl mx-auto mb-10">
          Creamos sitios web modernos, rápidos y optimizados para ayudar a tu
          negocio a conseguir más clientes.
        </p>

        <div className="flex justify-center gap-4">
         <a
  href="https://wa.me/52124949232?text=Hola,%20me%20interesa%20una%20cotización"
  target="_blank"
  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700"
>
  WhatsApp
</a>

          <a
  href="#contacto"
  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black"
>
  Solicitar Cotización
</a>
        </div>  
        </div>      
      </section>
      <section className="py-28 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      ¿Qué incluye tu página web?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-3">🌐 Dominio Profesional</h3>
        <p>Tu empresa tendrá una dirección web profesional.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-3">📱 WhatsApp Integrado</h3>
        <p>Los clientes podrán contactarte en un clic.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-xl font-bold mb-3">⚡ Sitio Rápido</h3>
        <p>Carga rápida para mejorar la experiencia del usuario.</p>
      </div>
    </div>
  </div>
</section>
      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      ¿Por qué elegirnos?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="border rounded-xl p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-3">
          Más clientes
        </h3>
        <p className="text-gray-600">
          Tu negocio estará disponible para nuevos clientes las 24 horas.
        </p>
      </div>

      <div className="border rounded-xl p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-3">
          Mayor confianza
        </h3>
        <p className="text-gray-600">
          Una página profesional transmite seriedad y confianza.
        </p>
      </div>

      <div className="border rounded-xl p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-3">
          Atención inmediata
        </h3>
        <p className="text-gray-600">
          Integramos WhatsApp para que tus clientes te contacten fácilmente.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-14">
      Nuestro Proceso
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="text-5xl mb-4">1️⃣</div>
        <h3 className="text-xl font-bold mb-3">
          Nos Contactas
        </h3>
        <p className="text-gray-600">
          Cuéntanos sobre tu negocio y lo que necesitas.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="text-5xl mb-4">2️⃣</div>
        <h3 className="text-xl font-bold mb-3">
          Diseñamos tu Sitio
        </h3>
        <p className="text-gray-600">
          Creamos una propuesta profesional adaptada a tu empresa.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="text-5xl mb-4">3️⃣</div>
        <h3 className="text-xl font-bold mb-3">
          Revisas y Apruebas
        </h3>
        <p className="text-gray-600">
          Realizamos los cambios necesarios hasta tu aprobación.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="text-5xl mb-4">4️⃣</div>
        <h3 className="text-xl font-bold mb-3">
          Publicamos tu Página
        </h3>
        <p className="text-gray-600">
          Tu negocio queda visible en internet para atraer clientes.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-4">
      Soluciones por Tipo de Negocio
    </h2>

    <p className="text-center text-gray-600 mb-14 text-lg">
      Diseñamos páginas web adaptadas a las necesidades de cada empresa.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200"
  alt="Clínica Dental"
  className="w-full h-56 object-cover"
/>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            🏥 Clínica Dental
          </h3>

          <p className="text-gray-600">
            Agenda de citas, servicios, ubicación y contacto por WhatsApp.
          </p>
        </div>
      </div>

      <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
          alt="Seguros"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            🛡️ Agencia de Seguros
          </h3>

          <p className="text-gray-600">
            Cotizaciones rápidas, formularios y atención inmediata.
          </p>
        </div>
      </div>

      <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Transporte"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            🚛 Transporte
          </h3>

          <p className="text-gray-600">
            Muestra servicios, cobertura, unidades y contacto.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
<section id="servicios" className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-10">
      Sobre Nosotros
    </h2>

    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
      En Prattz Labs ayudamos a negocios locales a tener una presencia
      profesional en internet mediante páginas web modernas, rápidas y
      enfocadas en generar clientes.
    </p>

  </div>
</section>
<section className="py-20">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    <div>
      <h2 className="text-4xl font-bold mb-6">
        Diseñamos páginas que generan clientes
      </h2>

      <p className="text-lg text-gray-600 mb-4">
        Creamos sitios modernos, rápidos y optimizados para que tu negocio
        destaque frente a la competencia.
      </p>

      <p className="text-lg text-gray-600">
        Integramos WhatsApp, formularios de contacto y herramientas para
        ayudarte a vender más.
      </p>
    </div>

    <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
      <span className="text-gray-500 text-xl">
        Imagen del negocio
      </span>
    </div>

  </div>
</section>
<section id="servicios" className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Nuestros Servicios
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="border rounded-xl p-6 bg-white">
        <h3 className="text-2xl font-bold mb-3">🦷 Dentistas</h3>
        <p className="text-gray-600">
          Sitios web para captar pacientes y agendar citas.
        </p>
      </div>

      <div className="border rounded-xl p-6 bg-white">
        <h3 className="text-2xl font-bold mb-3">🛡️ Seguros</h3>
        <p className="text-gray-600">
          Cotizaciones rápidas y contacto inmediato por WhatsApp.
        </p>
      </div>

      <div className="border rounded-xl p-6 bg-white">
        <h3 className="text-2xl font-bold mb-3">🚛 Transportistas</h3>
        <p className="text-gray-600">
          Presenta tus servicios y recibe solicitudes de transporte.
        </p>
      </div>

      <div className="border rounded-xl p-6 bg-white">
        <h3 className="text-2xl font-bold mb-3">💇 Salones</h3>
        <p className="text-gray-600">
          Agenda citas y muestra tus servicios profesionales.
        </p>
      </div>

      <div className="border rounded-xl p-6 bg-white">
        <h3 className="text-2xl font-bold mb-3">🔧 Refaccionarias</h3>
        <p className="text-gray-600">
          Catálogo de productos y contacto inmediato.
        </p>
      </div>

      <div className="border rounded-xl p-6 bg-white">
        <h3 className="text-2xl font-bold mb-3">🏢 Empresas</h3>
        <p className="text-gray-600">
          Presencia profesional para cualquier negocio local.
        </p>
      </div>

    </div>

  </div>
</section>
<section id="trabajos" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Nuestros Trabajos
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="border rounded-xl overflow-hidden shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img
  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
  alt="Clinica Dental"
  className="w-full h-48 object-cover transition duration-300 hover:scale-110"
/>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Clínica Dental Sonrisa
          </h3>
          <p className="text-gray-600 mb-4">
            Página web para captar pacientes y recibir citas por WhatsApp.
          </p>
          <button className="font-semibold text-green-600">
            Ver proyecto →
          </button>
        </div>
      </div>

      <div className="border rounded-xl overflow-hidden shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img
  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
  alt="Asesor de seguros"
  className="w-full h-48 object-cover transition duration-300 hover:scale-110"
/>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Seguros Martínez
          </h3>
          <p className="text-gray-600 mb-4">
            Sitio web para generar cotizaciones rápidas de seguros.
          </p>
          <button className="font-semibold text-green-600">
            Ver proyecto →
          </button>
        </div>
      </div>

      <div className="border rounded-xl overflow-hidden shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img
  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
  alt="Transporte de carga"
  className="w-full h-48 object-cover transition duration-300 hover:scale-110"
/>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Transportes Veracruz
          </h3>
          <p className="text-gray-600 mb-4">
            Página profesional para mostrar rutas, servicios y contacto.
          </p>
          <button className="font-semibold text-green-600">
            Ver proyecto →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="testimonios" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Lo que dicen nuestros clientes
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-xl shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <p className="text-yellow-500 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </p>
        <p className="text-gray-600">
          Gracias a nuestra nueva página web recibimos más citas desde la primera semana.
        </p>
        <h4 className="font-bold mt-4">
          Clínica Dental Sonrisa
        </h4>
      </div>

      <div className="bg-white p-6 rounded-xl shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <p className="text-yellow-500 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </p>
        <p className="text-gray-600">
          Ahora nuestros clientes pueden solicitar cotizaciones por WhatsApp en segundos.
        </p>
        <h4 className="font-bold mt-4">
          Seguros Martínez
        </h4>
      </div>

      <div className="bg-white p-6 rounded-xl shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <p className="text-yellow-500 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </p>
        <p className="text-gray-600">
          Incrementamos nuestras solicitudes de transporte gracias al sitio web.
        </p>
        <h4 className="font-bold mt-4">
          Transportes Veracruz
        </h4>
      </div>

    </div>
  </div>
</section>
<section id="contacto" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Solicita una Cotización
    </h2>

    <div className="space-y-4">

      <input
  type="text"
  placeholder="Nombre"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
  className="w-full border rounded-lg p-4"
/>
      <input
  type="text"
  placeholder="Teléfono"
  value={telefono}
  onChange={(e) => setTelefono(e.target.value)}
  className="w-full border rounded-lg p-4"
/>
      <input
  type="text"
  placeholder="Empresa o negocio"
  value={empresa}
  onChange={(e) => setEmpresa(e.target.value)}
  className="w-full border rounded-lg p-4"
/>
     <textarea
  placeholder="Cuéntanos qué necesitas"
  value={mensaje}
  onChange={(e) => setMensaje(e.target.value)}
  className="w-full border rounded-lg p-4 h-40"
/>
     <button
     type="button"
  onClick={enviarWhatsApp}
  className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
>
  Enviar Solicitud
</button>

    </div>
  </div>
</section>
<section className="bg-black text-white py-20">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold mb-6">
      ¿Listo para conseguir más clientes?
    </h2>

    <p className="text-xl mb-8">
      Solicita una cotización gratuita y descubre cómo una página web profesional puede ayudar a crecer tu negocio.
    </p>

    <a
      href="https://wa.me/52124949232?text=Hola,%20me%20interesa%20una%20página%20web"
      target="_blank"
      className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold"
    >
      Contactar por WhatsApp
    </a>
  </div>
</section>
<footer className="bg-gray-900 text-white py-10">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-2xl font-bold mb-4">
      Prattz Labs
    </h3>

    <p className="mb-2">
      Desarrollo de páginas web para negocios locales.
    </p>

    <p className="mb-2">
      Veracruz, México
    </p>

    <p className="mb-2">
      WhatsApp: 249 492 3232
    </p>

    <p className="text-gray-400 mt-6">
      © 2026 Prattz Labs. Todos los derechos reservados.
    </p>
  </div>
</footer>
    </main>
  );
}
<footer className="bg-black text-white py-12">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-2xl font-bold mb-4">
      Prattz Labs
    </h3>

    <p className="text-gray-400">
      Desarrollo de páginas web para negocios locales.
    </p>

    <p className="mt-4">
      WhatsApp: +52 55 2494 9232
    </p>
  </div>
</footer>
"use client";

import { useState } from "react";
export default function Home() {
    const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");
const [empresa, setEmpresa] = useState("");
const [mensaje, setMensaje] = useState("");
const [mensajeAgregado, setMensajeAgregado] = useState("");
const [mensajeExito, setMensajeExito] = useState("");
const [clienteNombre, setClienteNombre] = useState("");
const [clienteTelefono, setClienteTelefono] = useState("");
const [clienteCiudad, setClienteCiudad] = useState("");
const [tipoDemo, setTipoDemo] = useState("tienda");

const [carrito, setCarrito] = useState<any[]>([]);

const productosDemo = [
 {
  id: 1,
  nombre: "Funda iPhone 14",
  precio: 299,
  descripcion: "Protección resistente para tu smartphone.",
  imagen: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb",
},
{
  id: 2,
  nombre: "Audífonos Bluetooth",
  precio: 799,
  descripcion: "Conexión inalámbrica y sonido premium.",
  imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
},
{
  id: 3,
  nombre: "Smartwatch Deportivo",
  precio: 1299,
  descripcion: "Monitorea actividad física y salud.",
  imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
},
];
const serviciosDemo = [
  {
    id: 101,
    nombre: "Página Web Profesional",
    precio: 4999,
    descripcion: "Diseño moderno, dominio y formulario de contacto.",
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: 102,
    nombre: "Catálogo + WhatsApp",
    precio: 7999,
    descripcion: "Muestra productos y recibe pedidos directamente.",
    imagen: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
  },
  {
    id: 103,
    nombre: "Automatización con IA",
    precio: 14999,
    descripcion: "Automatiza respuestas y atención a clientes.",
    imagen: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
];
const productosActuales = tipoDemo === "tienda" ? productosDemo : serviciosDemo;
const agregarAlCarrito = (producto: any) => {
  const productoExiste = carrito.find((item) => item.id === producto.id);

  if (productoExiste) {
    setCarrito(
      carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  } else {
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  }

  setMensajeAgregado(`✅ ${producto.nombre} agregado`);

  setTimeout(() => {
    setMensajeAgregado("");
  }, 2000);
};
const totalCarrito = carrito.reduce(
  (total, producto) => total + producto.precio * producto.cantidad,
  0
);
const businessName = "Prattz Labs";
const whatsappNumber = "525524949232";
const enviarCarritoWhatsApp = () => {
    if (!clienteNombre || !clienteTelefono || !clienteCiudad) {
  alert("Por favor completa nombre, teléfono y ciudad antes de enviar el pedido.");
  return;
}
  const mensaje = `
Hola.

Datos del cliente:

Nombre: ${clienteNombre}
Teléfono: ${clienteTelefono}
Ciudad: ${clienteCiudad}

Productos solicitados:

${carrito
  .map(
    (producto) =>
      `- ${producto.nombre} x${producto.cantidad} = $${producto.precio * producto.cantidad}`
  )
  .join("\n")}

Total estimado: $${totalCarrito}
`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    mensaje
  )}`;

  window.open(url, "_blank");

setMensajeExito("✅ Pedido enviado correctamente");

setCarrito([]);
setClienteNombre("");
setClienteTelefono("");
setClienteCiudad("");

setTimeout(() => {
  setMensajeExito("");
}, 3000);
};

const vaciarCarrito = () => {
  setCarrito([]);
};
const eliminarProducto = (id: number) => {
  setCarrito(carrito.filter((producto) => producto.id !== id));
};
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
    <a href="#trabajos" className="hover:text-green-600">Proyectos</a>
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
  href="https://wa.me/525524949232?text=Hola,%20me%20interesa%20una%20cotización"
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
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-14">
       ¿Cómo trabajamos?
    </h2>
<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
  Un proceso simple y transparente para lanzar tu proyecto rápidamente.
</p>
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
  {/* Clínica Dental */}
  <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
    <img
      src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200"
      alt="Clínica Dental"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">🏥 Clínica Dental</h3>
      <p className="text-gray-600">
        Agenda de citas, servicios, ubicación y contacto por WhatsApp.
      </p>
    </div>
  </div>

  {/* Agencia de Seguros */}
  <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
    <img
      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
      alt="Seguros"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">🛡️ Agencia de Seguros</h3>
      <p className="text-gray-600">
        Cotizaciones rápidas, formularios y atención inmediata.
      </p>
    </div>
  </div>

  {/* Transporte */}
  <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
    <img
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
      alt="Transporte"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">🚛 Transporte</h3>
      <p className="text-gray-600">
        Muestra servicios, cobertura, unidades y contacto.
      </p>
    </div>
  </div>

  {/* Salón de Belleza */}
  <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
    <img
      src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
      alt="Salón de Belleza"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">💇 Salón de Belleza</h3>
      <p className="text-gray-600">
        Agenda citas, muestra servicios y recibe clientes por WhatsApp.
      </p>
    </div>
  </div>

  {/* Refaccionaria */}
  <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
    <img
      src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
      alt="Refaccionaria"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">🔧 Refaccionaria</h3>
      <p className="text-gray-600">
        Catálogo de productos, promociones y pedidos por WhatsApp.
      </p>
    </div>
  </div>

  {/* Empresa */}
  <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
    <img
      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
      alt="Empresa"
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">🏢 Empresa</h3>
      <p className="text-gray-600">
        Presencia profesional para captar clientes y generar confianza.
      </p>
    </div>
  </div>
</div>

<div className="text-center mt-8">
  <h3 className="text-3xl font-bold mb-4">
    ¿Te gustaría una solución similar para tu negocio?
  </h3>

  <p className="text-gray-600 mb-6">
    Cuéntanos tu idea y te ayudaremos a construir una solución a la medida.
  </p>

  <button
    onClick={() =>
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hola, me interesa una cotización para mi negocio."
        )}`,
        "_blank"
      )
    }
    className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition"
  >
    Solicitar una Demo
  </button>
</div>

</div>
</section>
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-4">
      ¿Por qué elegir Prattz Labs?
    </h2>

    <p className="text-center text-gray-600 mb-14 text-lg">
      Nos enfocamos en crear soluciones que ayuden a tu negocio a crecer.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <div className="text-4xl mb-4">⚡</div>

        <h3 className="text-2xl font-bold mb-3">
          Entrega Rápida
        </h3>

        <p className="text-gray-600">
          Entregamos tu proyecto en pocos días para que empieces a generar clientes rápidamente.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <div className="text-4xl mb-4">💬</div>

        <h3 className="text-2xl font-bold mb-3">
          Integración WhatsApp
        </h3>

        <p className="text-gray-600">
          Facilita que tus clientes te contacten de inmediato.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <div className="text-4xl mb-4">🚀</div>

        <h3 className="text-2xl font-bold mb-3">
          Pensado para Vender
        </h3>

        <p className="text-gray-600">
          Diseñamos páginas enfocadas en generar prospectos y ventas.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <div className="text-4xl mb-4">📱</div>

        <h3 className="text-2xl font-bold mb-3">
          Adaptado a Celular
        </h3>

        <p className="text-gray-600">
          La mayoría de tus clientes te visitarán desde su teléfono.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <div className="text-4xl mb-4">🤖</div>

        <h3 className="text-2xl font-bold mb-3">
          Automatización con IA
        </h3>

        <p className="text-gray-600">
          Implementamos soluciones inteligentes para ahorrar tiempo.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <div className="text-4xl mb-4">🛠️</div>

        <h3 className="text-2xl font-bold mb-3">
          Soporte y Acompañamiento
        </h3>

        <p className="text-gray-600">
          Te ayudamos antes, durante y después de la entrega.
        </p>
      </div>

    </div>

  </div>
</section>
<section id="servicios" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-4xl font-bold text-center mb-12">
      ¿Qué podemos construir para tu negocio?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-2xl font-bold mb-3">🌐 Página Web Profesional</h3>
        <p className="text-gray-600">
          Sitios web modernos, rápidos y optimizados para generar confianza y conseguir clientes.
        </p>
      </div>

      <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-2xl font-bold mb-3">💬 Catálogo + WhatsApp</h3>
        <p className="text-gray-600">
          Muestra tus productos y recibe pedidos directamente por WhatsApp.
        </p>
      </div>

      <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-2xl font-bold mb-3">🤖 Automatización con IA</h3>
        <p className="text-gray-600">
          Automatiza respuestas, atención a clientes y procesos repetitivos.
        </p>
      </div>

      <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-2xl font-bold mb-3">📅 Sistema de Citas</h3>
        <p className="text-gray-600">
          Agenda citas para médicos, dentistas, salones y otros negocios.
        </p>
      </div>

      <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-2xl font-bold mb-3">🛒 Tienda en Línea</h3>
        <p className="text-gray-600">
          Catálogo, carrito de compras y gestión de pedidos para vender por internet.
        </p>
      </div>

      <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-2xl font-bold mb-3">⚡ Soluciones a Medida</h3>
        <p className="text-gray-600">
          Sistemas personalizados para resolver necesidades específicas de tu empresa.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-4">
      Planes y Precios
    </h2>

    <p className="text-center text-gray-600 mb-14 text-lg">
      Soluciones adaptadas al tamaño y necesidades de tu negocio.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Básico */}
      <div className="bg-white rounded-2xl shadow-sm p-8 border">
        <h3 className="text-3xl font-bold mb-4">
          🥉 Básico
        </h3>

        <p className="text-4xl font-bold text-green-600 mb-6">
          Desde $4,999 MXN
        </p>

        <ul className="space-y-3 text-gray-600 mb-8">
          <li>✅ Página web profesional</li>
          <li>✅ Adaptada a celular</li>
          <li>✅ Formulario de contacto</li>
          <li>✅ Botón WhatsApp</li>
          <li>✅ Publicación y puesta en marcha</li>
        </ul>

        <button className="w-full bg-black text-white py-3 rounded-xl">
          Solicitar Cotización
        </button>
      </div>

      {/* Profesional */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-500">
        <div className="text-center mb-3">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">
            ⭐ Más solicitado
          </span>
        </div>

        <h3 className="text-3xl font-bold mb-4">
          🥈 Profesional
        </h3>

        <p className="text-4xl font-bold text-green-600 mb-6">
          Desde $7,999 MXN
        </p>

        <ul className="space-y-3 text-gray-600 mb-8">
          <li>✅ Todo lo anterior</li>
          <li>✅ Catálogo digital</li>
          <li>✅ Carrito de compras</li>
          <li>✅ Pedidos por WhatsApp</li>
          <li>✅ Configuración de dominio profesional</li>
        </ul>

        <button className="w-full bg-green-600 text-white py-3 rounded-xl">
          Solicitar Cotización
        </button>
      </div>

      {/* Premium */}
      <div className="bg-white rounded-2xl shadow-sm p-8 border">
        <h3 className="text-3xl font-bold mb-4">
          🥇 Premium
        </h3>

        <p className="text-4xl font-bold text-green-600 mb-6">
          Desde $14,999 MXN
        </p>

        <ul className="space-y-3 text-gray-600 mb-8">
          <li>✅ Todo lo anterior</li>
          <li>✅ Automatización con IA</li>
          <li>✅ Captura automática de prospectos</li>
          <li>✅ Respuestas inteligentes 24/7</li>
          <li>✅ Ajustes y soporte prioritario</li>
        </ul>

        <button className="w-full bg-black text-white py-3 rounded-xl">
          Solicitar Cotización
        </button>
      </div>

    </div>

    <p className="text-center text-gray-500 mt-10">
      * Los precios son de referencia y pueden variar según las necesidades específicas de cada proyecto.
    </p>

  </div>
</section>
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-2xl font-semibold text-center text-green-600 mb-2">
  🚀 Solución lista para vender por WhatsApp
</h2>

<h3 className="text-4xl font-bold text-center mb-4">
  Catálogo Digital con Pedidos por WhatsApp
</h3>
<p className="text-lg text-center text-gray-700 mb-6">
  Páginas web, catálogos digitales y automatizaciones para hacer crecer tu negocio.
</p>
<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
  Tus clientes pueden ver productos, agregarlos al carrito y enviarte el pedido directamente por WhatsApp.
</p>
<div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
  <div className="bg-white rounded-xl p-4 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    ⚡ Entrega rápida
  </div>

  <div className="bg-white rounded-xl p-4 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    📱 Adaptado a celular
  </div>
  <div className="bg-white rounded-xl p-4 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    🌐 Dominio profesional
  </div>

  <div className="bg-white rounded-xl p-4 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    💬 Integración WhatsApp
  </div>

  <div className="bg-white rounded-xl p-4 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    🛠️ Soporte incluido
  </div>

  <div className="bg-white rounded-xl p-4 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    🚀 Diseño moderno
  </div>
</div>
<div className="flex justify-center gap-4 mb-10">
  <button
    onClick={() => {
      setTipoDemo("tienda");
      setCarrito([]);
    }}
    className={`px-6 py-3 rounded-lg font-bold transition ${
      tipoDemo === "tienda"
        ? "bg-black text-white"
        : "bg-white text-black border"
    }`}
  >
    🛒 Tienda Online
  </button>

  <button
    onClick={() => {
      setTipoDemo("servicios");
      setCarrito([]);
    }}
    className={`px-6 py-3 rounded-lg font-bold transition ${
      tipoDemo === "servicios"
        ? "bg-black text-white"
        : "bg-white text-black border"
    }`}
  >
    💼 Servicios Digitales
  </button>
</div>
{mensajeAgregado && (
  <div className="mb-6">
    <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg font-medium">
      {mensajeAgregado}
    </div>
  </div>
)}
{mensajeExito && (
  <div className="mb-6">
    <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg font-medium">
      {mensajeExito}
    </div>
  </div>
)}
    <div className="grid md:grid-cols-3 gap-8">
      {productosActuales.map((producto) => (
        <div
          key={producto.id}
          className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-52 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
  {producto.nombre}
</h3>

{producto.descripcion && (
  <p className="text-gray-600 mb-3">
    {producto.descripcion}
  </p>
)}
<p className="text-green-600 font-bold text-xl mb-4">
  ${producto.precio.toLocaleString("es-MX")} MXN
</p>
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 bg-white rounded-2xl shadow p-6">
      <h3 className="text-2xl font-bold mb-4">
        🛒 Carrito ({carrito.reduce((total, producto) => total + producto.cantidad, 0)})
      </h3>

      {carrito.length === 0 ? (
        <p className="text-gray-600">
          Aún no hay productos agregados.
        </p>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {carrito.map((producto, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
  <span>{producto.nombre} x{producto.cantidad}</span>

  <div className="flex items-center gap-4">
    <span>${producto.precio * producto.cantidad}</span>

    <button
      onClick={() => eliminarProducto(producto.id)}
      className="text-red-600 font-bold hover:text-red-800"
    >
      🗑️
    </button>
  </div>
</li>
            ))}
          </ul>

          <p className="font-bold text-xl mb-4">
            Total: ${totalCarrito}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
  <input
    type="text"
    placeholder="Nombre"
    value={clienteNombre}
    onChange={(e) => setClienteNombre(e.target.value)}
    className="border rounded-lg p-3"
  />

  <input
    type="text"
    placeholder="Teléfono"
    value={clienteTelefono}
    onChange={(e) => setClienteTelefono(e.target.value)}
    className="border rounded-lg p-3"
  />

  <input
    type="text"
    placeholder="Ciudad"
    value={clienteCiudad}
    onChange={(e) => setClienteCiudad(e.target.value)}
    className="border rounded-lg p-3"
  />
</div>
<button
  onClick={enviarCarritoWhatsApp}
  className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
>
  Enviar pedido por WhatsApp
</button>
<button
  onClick={vaciarCarrito}
  className="ml-4 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
>
  Vaciar carrito
</button>
        </>
      )}
    </div>
  </div>
</section>
<section id="trabajos" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Ejemplos de Proyectos
    </h2>
<p className="text-center text-gray-600 mb-10">
  Algunos ejemplos de sitios web que podemos desarrollar para distintos tipos de negocios.
</p>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="border rounded-xl overflow-hidden shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img
  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
  alt="Clinica Dental"
  className="w-full h-48 object-cover transition duration-300 hover:scale-110"
/>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">
            Clínica Dental 
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
            Agencia de Seguros
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
            Logística y Transporte
          </h3>
          <p className="text-gray-600 mb-4">
            Página profesional para mostrar rutas, servicios y contacto.
          </p>
          <button className="font-semibold text-green-600">
            Ejemplo de proyecto →
          </button>
        </div>
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
      href="https://wa.me/525524949232?text=Hola,%20me%20interesa%20una%20página%20web"
      target="_blank"
      className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold"
    >
      Contactar por WhatsApp
    </a>
  </div>
</section>

<footer className="bg-black text-white py-12">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Prattz Labs</h3>
        <p className="text-gray-400">
          Desarrollo Web, Automatización con IA, Chatbots para WhatsApp y Sistemas Empresariales.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Contacto</h4>
        <p>contacto@prattzlabs.com</p>
        <p className="mt-2">+52 55 24 94 92 32</p>
        <p className="mt-2">https://www.prattzlabs.com</p>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Legal</h4>
        <div className="flex flex-col gap-2">
          <a href="/aviso-privacidad">Aviso de Privacidad</a>
          <a href="/terminos-condiciones">Términos y Condiciones</a>
          <a href="/eliminacion-datos">Eliminación de Datos</a>
          <a href="/quienes-somos">Quiénes Somos</a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
      © 2026 Prattz Labs. Todos los derechos reservados.
    </div>
  </div>
</footer>

<a
  href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20una%20cotización`}
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-4 rounded-full shadow-xl font-bold hover:bg-green-700 transition z-50"
>
  💬 WhatsApp
</a>
</main>
  );
}
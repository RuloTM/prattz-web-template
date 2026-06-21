export default function QuienesSomos() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-8">
        Quiénes Somos
      </h1>

      <p className="text-xl text-gray-600 mb-12">
        En Prattz Labs desarrollamos soluciones digitales que ayudan
        a empresas y emprendedores a vender más, automatizar procesos
        y mejorar la atención a sus clientes.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Nuestra Historia
        </h2>

        <p className="text-lg text-gray-700">
          Prattz Labs nace con el objetivo de acercar la tecnología,
          la automatización y la inteligencia artificial a negocios
          de todos los tamaños. Creemos que las herramientas digitales
          deben ser accesibles, prácticas y generar resultados reales.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Nuestra Misión
        </h2>

        <p className="text-lg text-gray-700">
          Ayudar a empresas y emprendedores a crecer mediante
          soluciones tecnológicas modernas que optimicen procesos,
          generen prospectos y aumenten las ventas.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Nuestra Visión
        </h2>

        <p className="text-lg text-gray-700">
          Convertirnos en un referente en desarrollo web,
          automatización empresarial e inteligencia artificial
          para negocios en México y Latinoamérica.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl mb-2">
              🌐 Desarrollo Web
            </h3>

            <p className="text-gray-600">
              Sitios web profesionales optimizados para generar
              confianza y captar clientes.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl mb-2">
              🤖 Automatización con IA
            </h3>

            <p className="text-gray-600">
              Implementamos asistentes inteligentes y procesos
              automatizados para ahorrar tiempo y recursos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl mb-2">
              💬 Chatbots para WhatsApp
            </h3>

            <p className="text-gray-600">
              Soluciones para atención al cliente, ventas y
              seguimiento automático mediante WhatsApp.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl mb-2">
              ⚙️ Sistemas Empresariales
            </h3>

            <p className="text-gray-600">
              Desarrollo de soluciones personalizadas para
              optimizar procesos internos y operaciones.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
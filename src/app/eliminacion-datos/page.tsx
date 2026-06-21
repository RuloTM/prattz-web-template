export default function EliminacionDatos() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-8">
        Eliminación de Datos
      </h1>

      <section className="space-y-8 text-lg text-gray-700">

        <p>
          Los usuarios pueden solicitar la eliminación de los datos
          personales almacenados por Prattz Labs.
        </p>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            Procedimiento
          </h2>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Enviar una solicitud al correo:
              <strong> contacto@prattzlabs.com</strong>
            </li>

            <li>
              Incluir nombre completo, correo electrónico y número
              telefónico relacionado con la solicitud.
            </li>

            <li>
              Indicar expresamente que deseas eliminar tus datos
              personales de nuestros sistemas.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            Tiempo de respuesta
          </h2>

          <p>
            Prattz Labs procesará las solicitudes de eliminación
            en un plazo máximo de 30 días naturales.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            Confirmación
          </h2>

          <p>
            Una vez completado el proceso, se enviará una
            confirmación al usuario utilizando el medio de
            contacto proporcionado.
          </p>
        </div>

      </section>
    </main>
  );
}
import { siteConfig } from "@/lib/site";

/**
 * Aviso de privacidad integral (LFPDPPP). Spanish is the governing version,
 * so the text is rendered in Spanish on both locales and lives here as JSX
 * (easy for a lawyer to review) instead of in the i18n catalogs.
 *
 * Bracketed values are placeholders that MUST be filled before relying on
 * this notice. Keep them in PLACEHOLDERS so they're easy to find and replace.
 */
export const PLACEHOLDERS = {
  domicilio: "[DOMICILIO]",
  correo: "[CORREO DE CONTACTO]",
  fecha: "[FECHA DE ÚLTIMA ACTUALIZACIÓN]",
  conservacion: "[PLAZO DE CONSERVACIÓN, p. ej. 12 meses]",
} as const;

const P = PLACEHOLDERS;

export function PrivacyNotice() {
  return (
    <article className="legal" lang="es-MX">
      <h2>1. Identidad y domicilio del responsable</h2>
      <p>
        <strong>{siteConfig.legalName}</strong>, persona física que opera bajo
        el nombre comercial <strong>{siteConfig.name}</strong> (en adelante,
        “Sendero”), con domicilio en {P.domicilio}, es responsable del
        tratamiento de los datos personales que nos proporcionas o que
        obtenemos conforme a este aviso, en términos de la Ley Federal de
        Protección de Datos Personales en Posesión de los Particulares
        (LFPDPPP) y demás normativa aplicable.
      </p>
      <p>
        Para cualquier asunto relacionado con tus datos personales puedes
        escribirnos a <strong>{P.correo}</strong>.
      </p>

      <h2>2. Datos personales que recabamos</h2>
      <p>Podemos tratar las siguientes categorías de datos, según cómo nos relacionemos contigo:</p>
      <ul>
        <li>
          <span>
            <strong>Cuando nos contactas</strong> (formulario de contacto,
            correo electrónico o llamada agendada): nombre, correo electrónico,
            empresa, servicio de interés, el contenido de tu mensaje y, en su
            caso, la fecha y hora de la llamada y la información que compartas
            en ella.
          </span>
        </li>
        <li>
          <span>
            <strong>Prospección comercial</strong>: datos de negocios y de sus
            contactos profesionales obtenidos de fuentes de acceso público
            (por ejemplo, sitios web, directorios y perfiles públicos del
            negocio): nombre del negocio, nombre y cargo de la persona de
            contacto, correo electrónico, teléfono y domicilio del negocio
            publicados, sitio web y redes sociales del negocio, e información
            pública sobre su actividad.
          </span>
        </li>
        <li>
          <span>
            <strong>Si contratas nuestros servicios</strong>: datos de
            identificación y contacto del representante, y los datos fiscales
            necesarios para facturar (razón social o nombre, RFC, régimen y
            domicilio fiscal).
          </span>
        </li>
        <li>
          <span>
            <strong>Al navegar en este sitio</strong>: datos técnicos como
            dirección IP, tipo de navegador y dispositivo, páginas visitadas,
            fecha y hora de la visita y el sitio de procedencia, mediante
            cookies y tecnologías similares (ver sección 8).
          </span>
        </li>
      </ul>
      <p>
        No solicitamos datos personales sensibles. Te pedimos no incluirlos en
        tus mensajes.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <p>
        <strong>Finalidades primarias</strong>, necesarias para la relación
        que solicitas con nosotros:
      </p>
      <ul>
        <li><span>Responder tus solicitudes, preguntas y mensajes.</span></li>
        <li><span>Agendar y llevar a cabo llamadas o reuniones.</span></li>
        <li><span>Elaborar propuestas, cotizaciones y diagnósticos.</span></li>
        <li>
          <span>
            En caso de contratación: celebrar y cumplir el contrato, dar
            soporte, facturar y cumplir obligaciones legales y fiscales.
          </span>
        </li>
      </ul>
      <p>
        <strong>Finalidades secundarias</strong>, que no son necesarias para
        la relación pero nos ayudan a darte un mejor servicio:
      </p>
      <ul>
        <li>
          <span>
            Contactarte, como parte de nuestra prospección comercial, por
            correo electrónico o por los medios de contacto profesionales que
            el negocio publica, para presentarte los servicios de Sendero y de
            sus productos (como Citania).
          </span>
        </li>
        <li><span>Enviarte información sobre novedades, productos y servicios.</span></li>
        <li><span>Elaborar estadísticas y mejorar este sitio y nuestras comunicaciones.</span></li>
      </ul>
      <p>
        Si no deseas que tus datos se traten para alguna finalidad secundaria,
        escríbenos a <strong>{P.correo}</strong> o responde a cualquiera de
        nuestros correos indicando que no deseas recibir más comunicaciones.
        Si nos proporcionaste tus datos directamente, puedes manifestar tu
        negativa en cualquier momento, incluso dentro de los cinco días hábiles
        siguientes a haberlos proporcionado. Tu negativa no afectará los
        servicios que nos solicites. Mantenemos una lista interna de exclusión
        para no volver a contactar a quien así lo pida.
      </p>

      <h2>4. Encargados y transferencias</h2>
      <p>
        Para operar utilizamos proveedores que tratan datos por cuenta nuestra
        y conforme a nuestras instrucciones (encargados), por ejemplo de
        alojamiento web, envío de correo electrónico, agenda de llamadas y
        analítica web. Algunos de ellos se ubican fuera de México, por lo que
        tus datos pueden almacenarse en servidores en el extranjero.
      </p>
      <p>
        No vendemos tus datos personales ni los transferimos a terceros, salvo
        en los casos previstos por la ley que no requieren tu consentimiento,
        como requerimientos de autoridades competentes.
      </p>

      <h2>5. Derechos ARCO</h2>
      <p>
        Tienes derecho a <strong>Acceder</strong> a tus datos personales, a
        solicitar su <strong>Rectificación</strong> si son inexactos o
        incompletos, su <strong>Cancelación</strong> cuando consideres que no
        se requieren para las finalidades señaladas, y a{" "}
        <strong>Oponerte</strong> a su tratamiento para fines específicos.
      </p>
      <p>
        Para ejercerlos, envía tu solicitud a <strong>{P.correo}</strong> con:
      </p>
      <ul>
        <li><span>Tu nombre y un medio para comunicarte la respuesta.</span></li>
        <li>
          <span>
            Un documento que acredite tu identidad o, en su caso, la
            representación legal de quien actúe en tu nombre.
          </span>
        </li>
        <li>
          <span>
            La descripción clara de los datos y del derecho que deseas ejercer,
            y cualquier elemento que facilite su localización.
          </span>
        </li>
        <li>
          <span>
            En caso de rectificación, las modificaciones a realizar y la
            documentación que las sustente.
          </span>
        </li>
      </ul>
      <p>
        Te responderemos en un plazo máximo de 20 días hábiles contados desde
        la recepción de tu solicitud y, si resulta procedente, la haremos
        efectiva dentro de los 15 días hábiles siguientes a la respuesta. El
        ejercicio de estos derechos es gratuito; solo podrían aplicarse costos
        justificados de envío o reproducción.
      </p>

      <h2>6. Revocación del consentimiento</h2>
      <p>
        Puedes revocar en cualquier momento el consentimiento que nos hayas
        otorgado, siguiendo el mismo procedimiento de la sección 5. Ten en
        cuenta que no siempre podremos atender la revocación de inmediato
        cuando alguna obligación legal nos exija seguir tratando tus datos, y
        que para ciertas finalidades la revocación puede impedir que sigamos
        prestándote el servicio.
      </p>

      <h2>7. Limitación del uso o divulgación</h2>
      <p>
        Para limitar el uso o divulgación de tus datos, escríbenos a{" "}
        <strong>{P.correo}</strong>. Te incluiremos en nuestra lista interna
        de exclusión.
      </p>

      <h2>8. Cookies y tecnologías similares</h2>
      <p>
        Este sitio puede utilizar cookies y tecnologías similares de analítica
        web para entender cómo se usa (páginas visitadas, clics, tipo de
        dispositivo, procedencia de la visita) y mejorarlo. Puedes
        deshabilitarlas o eliminarlas desde la configuración de tu navegador;
        el sitio seguirá funcionando.
      </p>

      <h2>9. Datos tratados por cuenta de nuestros clientes</h2>
      <p>
        Cuando prestamos servicios a un cliente — por ejemplo, al operar
        Citania o un software a medida — podemos tratar datos de los clientes
        o pacientes de ese negocio únicamente como encargados, por cuenta y
        conforme a las instrucciones del cliente. En esos casos el responsable
        es el propio negocio, y aplica su aviso de privacidad. Este aviso no
        cubre ese tratamiento. Más información sobre Citania en{" "}
        <a href={siteConfig.products.citania.url} target="_blank" rel="noopener noreferrer">
          citania.mx
        </a>
        .
      </p>

      <h2>10. Conservación</h2>
      <p>
        Conservamos tus datos solo durante el tiempo necesario para las
        finalidades descritas. Los datos de prospección de negocios con los
        que no iniciemos una relación se eliminan después de{" "}
        {P.conservacion}, salvo que antes nos pidas su cancelación.
      </p>

      <h2>11. Cambios a este aviso</h2>
      <p>
        Podemos modificar este aviso de privacidad por cambios legales o en
        nuestras prácticas. Publicaremos la versión vigente en{" "}
        <strong>{siteConfig.domain}/privacidad</strong>, indicando la fecha de
        su última actualización.
      </p>

      <h2>12. Autoridad</h2>
      <p>
        Si consideras que tu derecho a la protección de datos personales ha
        sido vulnerado, puedes acudir ante la autoridad competente en materia
        de protección de datos personales en términos de la LFPDPPP vigente.
      </p>
    </article>
  );
}

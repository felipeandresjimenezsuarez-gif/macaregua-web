// ─── AboutSection ─────────────────────────────────────────────────────────────
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="nosotros" className="py-14 px-8 bg-[#090909]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
        <div className="relative h-64 rounded border border-[#1a1a1a] overflow-hidden">
          <Image src="/images/gallery-pollo-plancha.jpg" alt="Macaregua restaurante" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/30" />
        </div>
        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2 className="font-serif text-[28px] font-normal text-[#f0f0f0] leading-snug mb-4">
            Comida honesta.<br />Precios justos.
          </h2>
          <p className="text-[14px] font-light text-[#777] leading-[1.8] mb-6">
            En Macaregua no hay secretos. La bandeja llega completa. La pizza lleva los ingredientes que dice el menú. Llevamos años sirviendo a los profesionales de Girón, a los camioneros de paso por la Vía Chimita y a las familias que buscan un buen lugar donde comer sin complicaciones.
          </p>
          <div className="grid grid-cols-3 gap-px bg-[#1a1a1a] rounded overflow-hidden">
            {[['4.4★','en Google'],['83','reseñas'],['7 días','a la semana']].map(([n,l]) => (
              <div key={l} className="bg-[#0f0f0f] py-4 text-center">
                <div className="font-serif text-xl font-normal text-[#D4A017]">{n}</div>
                <div className="text-[9px] font-light text-[#333] tracking-widest uppercase mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── GMBSection ───────────────────────────────────────────────────────────────
export function GMBSection() {
  return (
    <section className="py-14 px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start reveal">
        {/* Card Google */}
        <div>
          <p className="eyebrow">Encuéntranos en Google</p>
          <div className="bg-[#111] border border-[#1e1e1e] rounded-lg overflow-hidden hover:border-[#333] transition-colors">
            {/* Mini mapa */}
            <div className="relative h-40 bg-[#141414] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(#1e1e1e 1px,transparent 1px),linear-gradient(90deg,#1e1e1e 1px,transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
              <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 300 160" preserveAspectRatio="none">
                <line x1="0" y1="80" x2="300" y2="80" stroke="#D4A017" strokeWidth="3"/>
                <line x1="150" y1="0" x2="150" y2="160" stroke="#555" strokeWidth="1.5"/>
                <line x1="0" y1="110" x2="120" y2="80" stroke="#444" strokeWidth="1"/>
                <line x1="180" y1="80" x2="300" y2="60" stroke="#444" strokeWidth="1"/>
              </svg>
              {/* Pin animado */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="absolute w-3.5 h-3.5 border-2 border-[#D4A017] rounded-full animate-map-ping" />
                <div className="w-3.5 h-3.5 bg-[#D4A017] rounded-full border-2 border-white" />
              </div>
            </div>
            <div className="p-5">
              <div className="font-serif text-[16px] font-bold text-[#f0f0f0] mb-1">Restaurante Macaregua</div>
              <div className="text-[11px] text-[#555] font-light mb-3">Restaurante colombiano · Pizza · Café</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-[22px] font-normal text-[#D4A017]">4.4</span>
                <span className="text-[#D4A017] text-[12px] tracking-widest">★★★★☆</span>
                <span className="text-[11px] text-[#444] font-light">83 reseñas</span>
              </div>
              <div className="h-px bg-[#1a1a1a] my-3" />
              {[
                ['📍','Vía Chimita #Km 1, Girón, Santander'],
                ['🕐','Abierto · Cierra a las 11 PM'],
                ['📞','767 60 719'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2 mb-2">
                  <span className="text-[12px]">{icon}</span>
                  <span className="text-[12px] font-light text-[#888]">{text}</span>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                   className="text-[11px] text-center py-2 border border-[#222] text-[#ccc] rounded-sm hover:border-[#D4A017] hover:text-[#D4A017] transition-colors">
                  Cómo llegar
                </a>
                <a href="tel:76760719"
                   className="text-[11px] text-center py-2 border border-[#222] text-[#ccc] rounded-sm hover:border-[#D4A017] hover:text-[#D4A017] transition-colors">
                  Llamar
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                   className="text-[11px] text-center py-2 border border-[#222] text-[#ccc] rounded-sm hover:border-[#D4A017] hover:text-[#D4A017] transition-colors">
                  Compartir
                </a>
                <a href="https://g.page/r/macaregua/review" target="_blank" rel="noopener noreferrer"
                   className="text-[11px] text-center py-2 bg-[#D4A017] text-[#1a0f00] font-medium rounded-sm hover:opacity-85 transition-opacity">
                  Ver reseñas
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info estratégica */}
        <div>
          <p className="eyebrow">Google My Business</p>
          <h2 className="font-serif text-[28px] font-normal text-[#f0f0f0] leading-snug mb-4">
            Tu restaurante,<br />visible donde buscan.
          </h2>
          <p className="text-[13px] font-light text-[#666] leading-[1.8] mb-6">
            Cuando alguien busca "almuerzo Girón" o "restaurante Vía Chimita", Macaregua aparece primero. Google My Business es la herramienta gratuita más poderosa para un negocio local.
          </p>
          <div className="flex flex-col gap-3">
            {[
              ['Perfil optimizado','Fotos de platos, horarios y categorías correctas.'],
              ['Respuesta a reseñas','Construye confianza y mejora el ranking en Google.'],
              ['Posts semanales','Especiales del día para mantener el perfil activo.'],
              ['WhatsApp directo','Botón de pedido inmediato desde el perfil de Google.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-3 items-start p-4 bg-[#111] border border-[#1a1a1a] rounded">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5 flex-shrink-0" />
                <div>
                  <div className="text-[13px] font-normal text-[#ccc] mb-0.5">{title}</div>
                  <div className="text-[12px] font-light text-[#555] leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WhatsAppSection ──────────────────────────────────────────────────────────
const WA_URL = `https://wa.me/573052015683?text=${encodeURIComponent('Hola, quiero hacer un pedido 🍽️')}`

export function WhatsAppSection() {
  return (
    <section className="py-14 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
        {/* Chat mockup */}
        <div className="max-w-xs mx-auto w-full">
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden p-5">
            <div className="bg-[#075E54] -mx-5 -mt-5 px-4 py-3 flex items-center gap-3 mb-4 rounded-t-xl">
              <div className="w-8 h-8 rounded-full bg-[#D4A017] flex items-center justify-center font-serif text-[11px] font-bold text-[#1a0f00] flex-shrink-0">MR</div>
              <div>
                <div className="text-[13px] font-medium text-white">Macaregua Restaurante</div>
                <div className="text-[10px] text-[#8BC34A] font-light">En línea</div>
              </div>
            </div>
            <div className="bg-[#1e1e1e] text-[#ccc] text-[12px] font-light p-3 rounded-lg rounded-bl-none mb-2 leading-relaxed">
              Hola, ¿cuál es el almuerzo de hoy? 🍽️
              <div className="text-[10px] text-[#444] mt-1">12:03 PM</div>
            </div>
            <div className="bg-[#075E54] text-white text-[12px] font-light p-3 rounded-lg rounded-br-none mb-2 leading-relaxed">
              ¡Hola! Hoy tenemos Corriente Mixto con dos principios: lentejas y arroz con pollo. Sopa de costilla. Todo por $25.000 con jugo incluido 🤤
              <div className="text-[10px] text-[#8BC34A] mt-1">12:03 PM ✓✓</div>
            </div>
            <div className="bg-[#1e1e1e] text-[#ccc] text-[12px] font-light p-3 rounded-lg rounded-bl-none mb-2 leading-relaxed">
              Perfecto, me apartas uno para llevar
              <div className="text-[10px] text-[#444] mt-1">12:04 PM</div>
            </div>
            <div className="bg-[#075E54] text-white text-[12px] font-light p-3 rounded-lg rounded-br-none mb-4 leading-relaxed">
              ¡Listo! En 15 minutos está listo tu pedido 🙌
              <div className="text-[10px] text-[#8BC34A] mt-1">12:04 PM ✓✓</div>
            </div>
            <div className="flex gap-2 items-center pt-3 border-t border-[#1a1a1a]">
              <div className="flex-1 bg-[#1a1a1a] border border-[#222] rounded-full px-4 py-2 text-[12px] text-[#444] font-light">Escribe un mensaje...</div>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </a>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
               className="animate-wa-bounce flex items-center gap-2 bg-[#25D366] text-white text-[12px] font-medium px-5 py-3 rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.524 5.84L0 24l6.336-1.48A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.732.872.934-3.612-.235-.372A9.78 9.78 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Pedir ahora
            </a>
          </div>
          <p className="text-[10px] text-[#333] text-right mt-1 italic">Botón flotante fijo en toda la página</p>
        </div>

        {/* CTA */}
        <div>
          <div className="bg-[#0f1a0f] border-[1.5px] border-[#25D36640] rounded-lg p-7 mb-4">
            <p className="text-[10px] tracking-[0.16em] text-[#25D366] uppercase font-light mb-2">Canal de pedidos principal</p>
            <h3 className="font-serif text-[22px] font-normal text-[#f0f0f0] leading-snug mb-3">
              Pide en segundos.<br />Sin apps. Sin registro.
            </h3>
            <p className="text-[13px] font-light text-[#555] leading-[1.7] mb-5">
              Tu pedido va directo al WhatsApp del restaurante. Sin intermediarios, sin comisiones, sin espera.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
               className="animate-pulse-slow flex items-center justify-center gap-2 w-full bg-[#25D366] text-white text-[13px] font-medium py-3.5 rounded tracking-wide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.524 5.84L0 24l6.336-1.48A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.732.872.934-3.612-.235-.372A9.78 9.78 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Hacer un pedido por WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              ['Respuesta inmediata','Confirmación en menos de 2 min'],
              ['Para llevar o domicilio','Indica tu preferencia al pedir'],
              ['Menú del día','Pregunta por los especiales'],
              ['Sin comisiones','El precio que ves es el real'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#111] border border-[#1a1a1a] rounded p-3">
                <div className="text-[12px] font-normal text-[#ccc] mb-0.5">{title}</div>
                <div className="text-[11px] font-light text-[#444] leading-snug">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── ReviewsSection ───────────────────────────────────────────────────────────
export function ReviewsSection() {
  const reviews = [
    { text: '"El almuerzo ejecutivo está brutal. Bandeja completa, bien servida y a buen precio. Vengo todos los jueves desde hace meses."', author: 'Carlos M.' },
    { text: '"La pizza marinera es de lo mejor que he comido en Girón. Masa gruesa, bien horneada. Pedimos domicilio y llegó rapidísimo."', author: 'Andrea P.' },
    { text: '"Paso por la Vía Chimita seguido y siempre paro acá. La chuleta a la plancha con papas es mi fija. Nunca me ha fallado."', author: 'Luis R.' },
  ]
  return (
    <section id="resenas" className="py-14 px-8 bg-[#090909]">
      <div className="max-w-7xl mx-auto reveal">
        <p className="eyebrow">Lo que dicen los clientes</p>
        <h2 className="font-serif text-[30px] font-normal text-[#f0f0f0] leading-snug mb-2">83 personas no pueden<br />estar equivocadas.</h2>
        <p className="text-[13px] font-light text-[#444] mb-8">4.4 en Google · Reseñas verificadas</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div key={r.author} className="bg-[#0f0f0f] border border-[#1a1a1a] rounded p-6 hover:-translate-y-1 hover:border-[#2a2a2a] transition-all duration-300">
              <div className="text-[#D4A017] text-[11px] tracking-[3px] mb-4">★★★★★</div>
              <p className="font-serif text-[13px] font-light italic text-[#bbb] leading-[1.7] mb-5">{r.text}</p>
              <div className="w-5 h-px bg-[#D4A017] mb-3" />
              <div className="text-[11px] font-normal text-[#555] tracking-widest uppercase">{r.author}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://g.page/r/macaregua/review" target="_blank" rel="noopener noreferrer"
             className="inline-block text-[12px] font-light text-[#D4A017] border border-[#D4A01740] px-6 py-3 rounded hover:bg-[#D4A01710] transition-colors tracking-wide">
            Ver todas las reseñas en Google →
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer id="contacto" className="bg-[#070707] border-t border-[#141414] py-6 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-6">
        <div>
          <div className="font-serif text-[15px] font-bold text-white tracking-wide">
            Maca<span className="text-[#D4A017]">re</span>gua
          </div>
          <div className="text-[9px] font-light text-[#333] tracking-widest uppercase mt-1">Restaurante · Pizza · Café</div>
        </div>
        <div className="flex gap-5 justify-center">
          {[['#menu','Menú'],['#galeria','Galería'],['#nosotros','Nosotros'],['#contacto','Contacto']].map(([href, label]) => (
            <a key={href} href={href} className="text-[11px] font-light text-[#333] hover:text-[#D4A017] transition-colors tracking-wide">{label}</a>
          ))}
        </div>
        <div className="text-right text-[10px] font-light text-[#252525] tracking-wide">
          © 2026 Restaurante Macaregua · Girón, Santander
        </div>
      </div>
    </footer>
  )
}

// ─── WhatsAppFloat ────────────────────────────────────────────────────────────
const FLOAT_URL = `https://wa.me/573052015683?text=${encodeURIComponent('Hola, quiero hacer un pedido 🍽️')}`

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={FLOAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-wa-bounce flex items-center gap-2 bg-[#25D366] text-white text-[13px] font-medium px-5 py-3 rounded-full shadow-lg"
        aria-label="Pedir por WhatsApp"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.524 5.84L0 24l6.336-1.48A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.732.872.934-3.612-.235-.372A9.78 9.78 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
        </svg>
        Pedir ahora
      </a>
    </div>
  )
}

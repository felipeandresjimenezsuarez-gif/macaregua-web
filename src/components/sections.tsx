'use client'
// ─── AboutSection ─────────────────────────────────────────────────────────────
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="nosotros" className="py-14 px-8 bg-[#090909]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
        <div className="relative h-64 rounded border border-[#1a1a1a] overflow-hidden">
          <Image src="/images/foto-pollo-plancha.jpg" alt="Macaregua restaurante" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/30" />
        </div>
        <div>
          <p className="eyebrow">Quiénes somos</p>
          <h2 className="font-serif text-[28px] font-normal text-[#f0f0f0] leading-snug mb-4">
            Comida honesta.<br />Precios justos.
          </h2>
          <p className="text-[14px] font-light text-[#777] leading-[1.8] mb-6">
            Nacimos en la vía a Chimitá, siendo el refugio y el sabor de quienes recorren las rutas de Santander. Hoy, mantenemos esa esencia: porciones generosas, precios justos y el sazón honesto que conquistó a los viajeros de paso. En Macaregua, cada plato cuenta una historia de camino y tradición.
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
const MAPS_URL = 'https://www.google.com/maps/place/Restaurante+Macaregua/@7.0882728,-73.1702669,17z/data=!4m6!3m5!1s0x8e683e64cb7d3f51:0xb33e3c2a097d0d0!8m2!3d7.0882728!4d-73.1702669!16s%2Fg%2F11bbrj6yv6'
const REVIEW_URL = 'https://www.google.com/maps/place/Restaurante+Macaregua/@7.0882728,-73.1702669,17z/data=!4m6!3m5!1s0x8e683e64cb7d3f51:0xb33e3c2a097d0d0!8m2!3d7.0882728!4d-73.1702669!16s%2Fg%2F11bbrj6yv6#lrd=0x8e683e64cb7d3f51:0xb33e3c2a097d0d0,1'
const WA_GMB = `https://wa.me/573052015683?text=${encodeURIComponent('Hola, quiero hacer un pedido 🍽️')}`

const HORARIOS = [
  { dia: 'Lunes',     horas: '6:30 AM – 10:30 PM' },
  { dia: 'Martes',    horas: '6:30 AM – 10:30 PM' },
  { dia: 'Miércoles', horas: '6:30 AM – 10:30 PM' },
  { dia: 'Jueves',    horas: '6:30 AM – 10:30 PM' },
  { dia: 'Viernes',   horas: '6:30 AM – 10:30 PM' },
  { dia: 'Sábado',    horas: '6:30 AM – 10:30 PM' },
  { dia: 'Domingo',   horas: 'Cerrado' },
]

export function GMBSection() {
  const hoy = new Date().getDay() // 0=Dom, 1=Lun...
  const idx = hoy === 0 ? 6 : hoy - 1

  return (
    <section id="contacto" className="py-16 px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto reveal">
        <p className="eyebrow">Encuéntranos</p>
        <h2 className="font-serif text-[30px] font-normal text-[#f0f0f0] leading-snug mb-10">
          Información y contacto.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card principal — Google Business */}
          <div className="md:col-span-2 bg-[#111] border border-[#1e1e1e] rounded-lg overflow-hidden">
            {/* Mapa decorativo */}
            <div className="relative h-36 bg-[#141414] overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(#1e1e1e 1px,transparent 1px),linear-gradient(90deg,#1e1e1e 1px,transparent 1px)',
                backgroundSize: '28px 28px'
              }} />
              {/* Líneas de carretera */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 600 144" preserveAspectRatio="none">
                <line x1="0" y1="72" x2="600" y2="72" stroke="#D4A017" strokeWidth="2.5"/>
                <line x1="300" y1="0" x2="300" y2="144" stroke="#555" strokeWidth="1.5"/>
                <line x1="0" y1="108" x2="220" y2="72" stroke="#444" strokeWidth="1"/>
                <line x1="380" y1="72" x2="600" y2="52" stroke="#444" strokeWidth="1"/>
                <line x1="0" y1="40" x2="140" y2="72" stroke="#333" strokeWidth="0.8"/>
                <line x1="460" y1="72" x2="600" y2="100" stroke="#333" strokeWidth="0.8"/>
              </svg>
              <div className="absolute top-2 left-3 text-[10px] font-light text-[#D4A017] tracking-widest opacity-60">VÍA CHIMITA KM 1</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-5 h-5 border-2 border-[#D4A017] rounded-full animate-ping opacity-40" />
                  <div className="w-4 h-4 bg-[#D4A017] rounded-full border-2 border-white shadow-lg shadow-[#D4A01740]" />
                </div>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                className="absolute bottom-2 right-3 text-[10px] font-medium text-[#D4A017] bg-[#D4A01715] border border-[#D4A01730] px-3 py-1 rounded-sm hover:bg-[#D4A01725] transition-colors">
                Abrir en Google Maps →
              </a>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Info básica */}
              <div>
                <div className="font-serif text-[17px] font-normal text-[#f0f0f0] mb-1">Restaurante Macaregua</div>
                <div className="text-[11px] text-[#444] font-light mb-4 tracking-wide">Restaurante colombiano · Pizza · Café</div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="font-serif text-[24px] font-light text-[#D4A017] leading-none">4.4</span>
                  <div>
                    <div className="text-[#D4A017] text-[11px] tracking-[2px]">★★★★☆</div>
                    <div className="text-[10px] text-[#333] font-light mt-0.5">83 reseñas en Google</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  {[
                    ['M', 'Vía Chimita #Km 1, Girón, Santander'],
                    ['T', '767 60 719'],
                    ['W', '+57 305 201 5683'],
                  ].map(([type, text]) => (
                    <div key={text} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        type === 'W' ? 'bg-[#25D36620]' : 'bg-[#D4A01715]'
                      }`}>
                        {type === 'M' && <svg width="10" height="10" viewBox="0 0 24 24" fill="#D4A017"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>}
                        {type === 'T' && <svg width="10" height="10" viewBox="0 0 24 24" fill="#D4A017"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>}
                        {type === 'W' && <svg width="10" height="10" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>}
                      </div>
                      <span className="text-[12px] font-light text-[#888] leading-snug">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-5">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                    className="text-[11px] text-center py-2 border border-[#222] text-[#ccc] rounded-sm hover:border-[#D4A017] hover:text-[#D4A017] transition-colors">
                    Cómo llegar
                  </a>
                  <a href="tel:+577676071905"
                    className="text-[11px] text-center py-2 border border-[#222] text-[#ccc] rounded-sm hover:border-[#D4A017] hover:text-[#D4A017] transition-colors">
                    Llamar
                  </a>
                  <a href={WA_GMB} target="_blank" rel="noopener noreferrer"
                    className="text-[11px] text-center py-2 bg-[#25D36620] border border-[#25D36630] text-[#25D366] rounded-sm hover:bg-[#25D36630] transition-colors">
                    WhatsApp
                  </a>
                  <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer"
                    className="text-[11px] text-center py-2 bg-[#D4A017] text-[#1a0f00] font-medium rounded-sm hover:opacity-85 transition-opacity">
                    Dejar reseña
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div>
                <div className="text-[11px] font-normal text-[#555] tracking-widest uppercase mb-3">Horario de atención</div>
                <div className="flex flex-col gap-0">
                  {HORARIOS.map((h, i) => (
                    <div key={h.dia} className={`flex justify-between items-center py-2 border-b border-[#141414] ${i === idx ? 'text-[#D4A017]' : ''}`}>
                      <span className={`text-[12px] font-light ${i === idx ? 'text-[#D4A017] font-normal' : 'text-[#666]'}`}>
                        {h.dia} {i === idx && <span className="text-[10px] ml-1 opacity-60">← hoy</span>}
                      </span>
                      <span className={`text-[12px] font-light ${i === idx ? 'text-[#D4A017]' : h.horas === 'Cerrado' ? 'text-[#333]' : 'text-[#888]'}`}>
                        {h.horas}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card lateral — datos rápidos */}
          <div className="flex flex-col gap-4">
            {[
              { label: 'Calificación', value: '4.4 ★', sub: 'en Google Maps' },
              { label: 'Reseñas', value: '83+', sub: 'clientes verificados' },
              { label: 'Abierto', value: 'Lun – Sáb', sub: '6:30 AM · 10:30 PM' },
              { label: 'Domicilios', value: 'WhatsApp', sub: '+57 305 201 5683' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="bg-[#111] border border-[#1e1e1e] rounded p-5 hover:border-[#2a2a2a] transition-colors">
                <div className="text-[10px] font-light text-[#444] tracking-widest uppercase mb-1">{label}</div>
                <div className="font-serif text-[20px] font-light text-[#f0f0f0]">{value}</div>
                <div className="text-[11px] font-light text-[#444] mt-0.5">{sub}</div>
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
    { stars: 5, text: 'La comida es muy rica, bien preparado y excelentes porciones! Recomendado.', author: 'Cesar Mora', time: 'Hace 3 años', initial: 'C', badge: 'Local Guide' },
    { stars: 5, text: 'Excelente servicio. Comidas sabrosas, variadas y precio acorde a la cantidad servida.', author: 'Ricardo Fletcher', time: 'Hace 6 años', initial: 'R', badge: '' },
    { stars: 5, text: 'Las comidas y las porciones son lo mejor.', author: 'Alejandro Hurtado', time: 'Hace 2 años', initial: 'A', badge: 'Local Guide' },
    { stars: 4, text: 'Buena comida, no me pareció un lugar costoso, abre todo el día.', author: 'Paulina Mira', time: 'Hace 3 años', initial: 'P', badge: 'Local Guide' },
    { stars: 5, text: 'Un caldo de costilla delicioso y unos sándwiches riquísimos.', author: 'Albeiro Lopez', time: 'Hace 6 años', initial: 'AL', badge: '' },
    { stars: 5, text: 'Lo recomiendo: buena atención y la comida, hay variedad.', author: 'Óscar Rangel', time: 'Hace 6 años', initial: 'O', badge: 'Local Guide' },
  ]

  const GOOGLE_URL = 'https://www.google.com/maps/place/Restaurante+Macaregua/@7.0882728,-73.1702669,17z/data=!4m6!3m5!1s0x8e683e64cb7d3f51:0xb33e3c2a097d0d0!8m2!3d7.0882728!4d-73.1702669!16s%2Fg%2F11bbrj6yv6'

  return (
    <section id="resenas" className="py-16 px-8 bg-[#090909]">
      <div className="max-w-7xl mx-auto reveal">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow">Reseñas Google</p>
            <h2 className="font-serif text-[30px] font-normal text-[#f0f0f0] leading-snug">
              Lo que dicen<br />nuestros clientes.
            </h2>
          </div>
          {/* Score block */}
          <div className="flex items-center gap-5 bg-[#0f0f0f] border border-[#1a1a1a] rounded px-6 py-4">
            <div className="text-center">
              <div className="font-serif text-[42px] font-light text-[#D4A017] leading-none">4.4</div>
              <div className="text-[#D4A017] text-[13px] tracking-[2px] mt-1">★★★★☆</div>
            </div>
            <div className="w-px h-12 bg-[#1e1e1e]" />
            <div>
              <div className="text-[13px] font-normal text-[#ccc]">83 reseñas</div>
              <div className="text-[11px] font-light text-[#444] mt-0.5">en Google Maps</div>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-2 text-[10px] font-medium text-[#D4A017] tracking-wide hover:underline">
                Ver todas →
              </a>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div key={r.author}
              className="group bg-[#0f0f0f] border border-[#1a1a1a] rounded p-5 flex flex-col gap-4 hover:-translate-y-1 hover:border-[#2a2a2a] transition-all duration-300">

              {/* Top row: avatar + name + Google logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4A01720] border border-[#D4A01730] flex items-center justify-center font-serif text-[11px] text-[#D4A017] flex-shrink-0">
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-[12px] font-normal text-[#ccc]">{r.author}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {r.badge && (
                        <span className="text-[9px] font-medium text-[#4285F4] tracking-wide">{r.badge}</span>
                      )}
                      {r.badge && <span className="text-[#2a2a2a]">·</span>}
                      <span className="text-[10px] font-light text-[#333]">{r.time}</span>
                    </div>
                  </div>
                </div>
                {/* Google G */}
                <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-30">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="text-[#D4A017] text-[11px] tracking-[2px]">
                {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
              </div>

              {/* Review text */}
              <p className="font-serif text-[13px] font-light italic text-[#888] leading-[1.75] flex-1">
                "{r.text}"
              </p>

              <div className="w-4 h-px bg-[#D4A01740]" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-light text-[#D4A017] border border-[#D4A01730] px-7 py-3 rounded hover:bg-[#D4A01710] transition-colors tracking-wide">
            Ver las 83 reseñas en Google Maps
            <span className="text-[10px]">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#141414] py-6 px-8">
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

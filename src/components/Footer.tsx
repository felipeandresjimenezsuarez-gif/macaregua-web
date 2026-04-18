export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Dirección */}
          <div>
            <h3 className="font-serif text-[16px] font-normal text-[#f0f0f0] mb-3 tracking-wider">Ubicación</h3>
            <p className="text-[13px] font-light text-[#555] leading-relaxed">
              Vía Chimita #Km 1<br />
              Girón, Santander
            </p>
          </div>

          {/* Teléfono y Horario */}
          <div>
            <h3 className="font-serif text-[16px] font-normal text-[#f0f0f0] mb-3 tracking-wider">Contacto</h3>
            <p className="text-[13px] font-light text-[#D4A017] mb-4">
              <a href="tel:+577676071905" className="hover:text-[#f0f0f0] transition-colors">
                767 607 1905
              </a>
            </p>
            <p className="text-[13px] font-light text-[#555]">
              Abierto hasta las 11 p.m.
            </p>
          </div>

          {/* Calificación */}
          <div>
            <h3 className="font-serif text-[16px] font-normal text-[#f0f0f0] mb-3 tracking-wider">Valoración</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#D4A017] text-[13px] font-light">★★★★☆</span>
              <span className="text-[12px] text-[#555]">4.4 estrellas</span>
            </div>
            <p className="text-[12px] font-light text-[#333]">
              83 opiniones
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e1e1e] pt-6 mt-6">
          <p className="text-[11px] font-light text-[#333] text-center">
            © 2024 Restaurante Macaregua. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

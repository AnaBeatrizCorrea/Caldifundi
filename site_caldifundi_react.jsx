export default function CaldifundiSite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative py-20 px-6 border-b border-red-700">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              Caldifundi
            </h1>
            <h2 className="text-2xl md:text-3xl text-red-600 font-bold mb-6">
              Fundição e Caldeiraria
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Soluções completas para indústrias de alto desempenho.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5515997989311"
                className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-2xl font-semibold"
              >
                Solicitar Orçamento
              </a>

              <a
                href="mailto:vendas@caldifundi.com.br"
                className="border border-gray-500 hover:border-red-600 px-6 py-3 rounded-2xl"
              >
                Entrar em Contato
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/mnt/data/WhatsApp Image 2026-05-16 at 12.35.13.jpeg"
              alt="Logo Caldifundi"
              className="rounded-3xl shadow-2xl max-h-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-red-600">Quem Somos</h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Formada por profissionais com mais de 27 anos de experiência em
            fundição e caldeiraria, a Caldifundi oferece soluções seguindo as
            especificações determinadas pelas normas ABNT, DIN, ASTM e SAE.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-red-600 transition">
              <h3 className="text-2xl font-bold mb-4">Fundição</h3>
              <p className="text-gray-400 leading-relaxed">
                Ferro fundido cinzento e nodular de 0,100 até 1.500 kg.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-red-600 transition">
              <h3 className="text-2xl font-bold mb-4">Caldeiraria</h3>
              <p className="text-gray-400 leading-relaxed">
                Caldeiraria leve, média e pesada em aço carbono, inox e alumínio.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-red-600 transition">
              <h3 className="text-2xl font-bold mb-4">Corte e Dobra</h3>
              <p className="text-gray-400 leading-relaxed">
                Corte laser, plasma, oxicorte, dobra e calandra.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:border-red-600 transition">
              <h3 className="text-2xl font-bold mb-4">Estruturas</h3>
              <p className="text-gray-400 leading-relaxed">
                Estruturas metálicas em geral para aplicações industriais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-red-600">
            Por Que Escolher a Caldifundi?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Mais de 27 anos de experiência',
              'Qualidade e precisão',
              'Atendimento especializado',
              'Agilidade na entrega',
              'Soluções completas',
              'Compromisso com o cliente'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-2xl p-6"
              >
                <p className="text-lg font-medium text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-red-600">
            Atendimento
          </h2>

          <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 shadow-2xl">
            <p className="text-2xl font-semibold mb-4">
              Segunda a sexta-feira
            </p>

            <p className="text-xl text-gray-300 mb-8">
              Das 07h00 às 17h00
            </p>

            <div className="space-y-4 text-lg text-gray-300">
              <p>📧 vendas@caldifundi.com.br</p>
              <p>📱 WhatsApp: (15) 99798-9311</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500">
        © 2026 Caldifundi Fundição e Caldeiraria — Qualidade que Sustenta
      </footer>
    </div>
  )
}

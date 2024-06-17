export const About = () => {
  return (
    <section id="about" className="container mt-12">
      <div className="px-4 md:px-10 flex flex-col">
        <h2 className="text-2xl tablet:text-3xl font-inter-bold text-left tablet:text-center mb-6">
          Transformamos Solidariedade em Ação
        </h2>
        <div className="flex flex-col text-sm tablet:text-base gap-y-6 my-6 font-inter-regular tablet:text-center">
          <p className="leading-7 tablet:leading-10">
            Somos uma plataforma inovadora que utiliza o WhatsApp para facilitar o processo de coleta e entrega de doações entre colaboradores voluntários e estabelecimentos parceiros, como cozinhas e restaurantes.
          </p>
          <p className="leading-7 tablet:leading-10">
            Nossa missão é conectar pessoas dispostas a ajudar como entregadores ou solicitantes de estabelecimentos, fornecendo uma experiência simples e eficiente.
          </p>
          <p className="hidden tablet:block leading-7 tablet:leading-10">
            Com notificações em tempo real e um painel de controle intuitivo, permitimos que os usuários acompanhem e participem ativamente de cada etapa do processo, fortalecendo a solidariedade em nossa comunidade e impactando positivamente a vida daqueles que mais necessitam.
          </p>
        </div>
      </div>
    </section>
  );
};

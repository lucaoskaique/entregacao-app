export const About = () => {
  return (
    <section id="about" className="container text-justify tablet:text-center mt-[50px]">
      <div className="px-10 flex flex-col">
        <h2 className="text-3xl tablet:text-3xl font-inter-bold text-center mb-6">
          Transformamos Solidariedade em Ação
        </h2>
        <div className="flex flex-col text-sm tablet:text-base gap-y-6 my-6 font-inter-regular tablet:w-[65%] tablet:m-auto">
          <p className="leading-10">
            Somos uma plataforma inovadora que utiliza o WhatsApp para facilitar o processo de coleta e entrega de doações entre colaboradores voluntários e estabelecimentos parceiros, como cozinhas e restaurantes.
          </p>
          <p className="leading-10">
            Nossa missão é conectar pessoas dispostas a ajudar como entregadores ou padrinhos de estabelecimentos, fornecendo uma experiência simples e eficiente.
          </p>
          <p className="hidden tablet:block leading-10">
            Com notificações em tempo real e um painel de controle intuitivo,permitimos que os usuários acompanhem e participem ativamente de cada etapa do processo, fortalecendo a solidariedade em nossa comunidade e impactando positivamente a vida daqueles que mais necessitam.
          </p>
        </div>
      </div>
    </section>
  );
};

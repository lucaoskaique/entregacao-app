export const About = () => {
  return (
    <section id="about" className="tablet:text-center container mt-[50px] px-5">
      <div className="px-6 flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold w-[75%] tablet:w-full">
          Transformamos Solidariedade em Ação
        </h2>
        <div className="flex flex-col text-base md:text-xl gap-y-6 my-6">
          <p className="leading-relaxed">
            Somos uma plataforma inovadora que utiliza o WhatsApp para facilitar
              o processo de coleta e entrega de doações entre colaboradores
              voluntários e estabelecimentos parceiros, como cozinhas e
              restaurantes.</p>
          <p className="leading-relaxed">
            Nossa missão é conectar pessoas dispostas a ajudar como entregadores
             ou padrinhos de estabelecimentos, fornecendo uma experiência 
             simples e eficiente. </p>
          <p className="leading-relaxed">
            Com notificações em tempo real e um painel de controle intuitivo, 
              permitimos que os usuários acompanhem e participem ativamente de
             cada etapa do processo, fortalecendo a solidariedade em nossa
             comunidade e impactando positivamente a vida daqueles que mais necessitam.</p>
        </div>
      </div>
    </section>
  );
};

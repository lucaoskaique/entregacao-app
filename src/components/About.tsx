import star from "../assets/images/star-icon.svg";

export const About = () => {
  return (
    <section id="about" className="container mt-[50px] px-5">
      <div className="py-5 relative flex">
        <img
          src={star}
          alt=""
          className="w-[58.2px] absolute transform right-0 top-0"
        />
        <div className="px-6 flex flex-col">
          <h2 className="text-3xl font-bold max-w-[320px]">
            Transformamos Solidariedade em Ação
          </h2>
          <p className="text-sm text-muted-foreground mt-6 leading-[35px]">
            Somos uma plataforma inovadora que utiliza o WhatsApp para facilitar
            o processo de coleta e entrega de doações entre colaboradores
            voluntários e estabelecimentos parceiros, como cozinhas e
            restaurantes.
            <br />
            <br />
            Nossa missão é conectar pessoas dispostas a ajudar como entregadores
            ou padrinhos de estabelecimentos, fornecendo uma experiência simples
            e eficiente.
            <br />
            <br />
            Com notificações em tempo real e um painel de controle intuitivo,
            permitimos que os usuários acompanhem e participem ativamente de
            cada etapa do processo, fortalecendo a solidariedade em nossa
            comunidade e impactando positivamente a vida daqueles que mais
            necessitam.
          </p>
        </div>
      </div>
    </section>
  );
};

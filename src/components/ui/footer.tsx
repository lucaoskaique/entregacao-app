import SOS from '@/assets/images/sos-cozinhas.png'
import { InstagramIcon } from '../../utils/icons'
import { LogoIcon, LogoName } from '../Logos'
import { Container } from './container';

// Defina o tipo RouteProps e a lista routeList se ainda não estiverem definidos
// Defina o tipo RouteProps
type RouteProps = {
  href: string;
  label: string;
};

// Defina a lista routeList
const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "Sobre",
  },
  {
    href: "#Padrinho",
    label: "Seja um Padrinho",
  },
  {
    href: "#Entregador",
    label: "Seja um Entregador",
  },
  {
    href: "#Privacidade",
    label: "Privacidade",
  }
];

export const Footer: React.FC = () => {
  return (
    <section className="bg-neutral-900 pb-[56.41px] pt-7">
      <Container>
        <div className='max-w-[1200px] m-auto'>
          <div className="flex justify-center gap-x-4 items-center my-[41px]">
            <LogoIcon color="white" />
            <LogoName color="white" />
          </div>
          <nav className="text-white flex flex-col tablet:flex-row justify-center items-center gap-6 tablet:mb-6">
            {routeList.map(({ href, label }: RouteProps) => (
              <a
                rel="noreferrer noopener"
                key={label}
                href={href}
                className="hover:underline font-inter-semibold text-sm"
              >
                {label}
              </a>
            ))}
          </nav>
          <section className="flex flex-col tablet:flex-row tablet:gap-12 justify-between gap-2 my-[24px] px-10">
            <div className="tablet:w-[50%] text-black bg-white flex flex-col rounded-lg items-center py-[11px] gap-[10px] h-full tablet:flex-row tablet:justify-center">
              <span className='font-inter-medium text-xs uppercase'>Apoio:</span>
              <img src={SOS} alt="Cozinha SOS RS" className="w-[124.57px] h-[110.12px]" />
            </div>
            <div className="tablet:w-[50%] bg-[#212121]/40 border border-[#262626] flex items-center justify-center gap-x-4 h-[150px] rounded-xl">
              <InstagramIcon />
              <span className="text-white font-inter-medium text-2xl">@sos.cozinhas</span>
            </div>
          </section>
          <div className="text-neutral-300 border-t-2 border-neutral-800">
            <div className="flex flex-col items-center mt-[22px] font-inter-regular text-sm tablet:flex-row tablet:justify-center tablet:gap-3">
              <span>© 2024 Entregação</span>
              <span>Todos Os Direitos Reservados</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;

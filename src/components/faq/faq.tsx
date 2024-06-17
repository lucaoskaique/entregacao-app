import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/accordion'

import { WhatsappIcon } from '@/components/utils/icons'
import SrcBgVector from '@/assets/images/background-vector-faq.svg'
import SrcBgDesktopVector from '@/assets/images/background-desktop-vector-faq.svg'

interface FAQProps {
  question: string
  answer: string
  value: string
}

const FAQList: FAQProps[] = [
  {
    question: "Como posso ajudar?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-1",
  },
  {
    question: "Onde ficam os pontos de coleta?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-2",
  },
  {
    question: "Quem pode ajudar?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
    value: "item-3",
  },
  {
    question: "Posso ser solicitante?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-4",
  }
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container mt-20 -mb-52 relative ">
      <img src={SrcBgVector} className='absolute -z-10 w-full left-0 top-0 tablet:hidden' /> {/* Image for mobile */}
      <img src={SrcBgDesktopVector} className='hidden -z-10 tablet:block absolute -left-[320px] -top-10' /> {/* Image for desktop */}

      <h2 className="text-3xl text-start tablet:text-center font-bold mb-5 tablet:mb-10">
        Dúvidas frequentes
      </h2>

      <section className="bg-white text-black py-12 px-8 border-[3px] border-black rounded-[20px]">
        <Accordion
          type="single"
          collapsible
          className="w-full">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
              className="border-b-[1px] border-black">
              <AccordionTrigger className="text-left text-xl font-inter-semibold py-4">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 font-inter-regular">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center mt-8 gap-y-3">
          <h3 className="font-inter-bold text-xl text-center">
              Ainda com dúvidas? <span className="block tablet:inline">Fale com o nosso time.</span>
            </h3>
            <button className="tablet:w-174px tablet:h-44px w-190px h-50px px-8 bg-wppButton text-white text-base tablet:text-xl font-inter-bold leading-[24px] tablet:line-height-[24px] 1.5rem tablet-py-2 py-4 rounded-lg flex justify-center items-center gap-x-2">
              <WhatsappIcon />Fale agora
            </button>
        </div>
      </section>
    </section>
  );
};
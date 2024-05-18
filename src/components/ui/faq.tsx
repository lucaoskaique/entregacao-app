import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { WhatsappIcon } from '../../utils/icons'
import BgGreenVectorFaq from '@/assets/images/background-vector-faq.svg'

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
    question: "Posso ser padrinho?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-4",
  }
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container mt-20 -mb-44 max-w-[890px] relative">
      <img className='absolute -z-10 -top-8 -left-[340px]' src={BgGreenVectorFaq} />
      <h2 className="text-2xl tablet:text-3xl tablet:text-center font-bold mb-4">
        Dúvidas frequentes
      </h2>

      <section className="bg-white text-black py-12 px-10 border-[3px] border-black rounded-[20px]">
        <Accordion
          type="single"
          collapsible
          className="w-full">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
              className="border-b-[1px] border-black">
              <AccordionTrigger className="text-left text-lg font-bold py-4">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-4">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center mt-8 gap-y-3">
          <h3 className="flex flex-col tablet:flex-row tablet:gap-x-4 font-bold text-2xl text-center">
            Ainda com dúvidas?
            <span>Fale com o nosso time.</span>
          </h3>
          <a className="bg-wppButton text-white text-base font-bold py-2 px-8 rounded-lg flex justify-center items-center gap-x-2" role='button' href="https://discord.com/channels/1240399088298492094/1240399088764063829/1241095095088840784" target='_blank' rel="noopener noreferrer">
            <WhatsappIcon />
            Fale Agora
          </a>
        </div>
      </section>
    </section>
  );
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { WhatsappIcon } from '../../utils/icons'

interface FAQProps {
  question: string
  answer: string
  value: string
}

const FAQList: FAQProps[] = [
  {
    question: "Como posso ajudar?",
    answer: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-1",
  },
  {
    question: "Onde ficam os pontos de coleta?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-2",
  },
  {
    question:
      "Quem pode ajudar?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
    value: "item-3",
  },
  {
    question: "Posso ser padrinho?",
    answer: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-4",
  }
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-20">
      <h2 className="text-2xl md:text-4xl font-inter-bold mb-4">
        Dúvidas frequentes
      </h2>

      <section className="bg-white text-black py-12 px-8 border-[3px] border-black rounded-[20px]">
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
              className="border-b-[1px] border-black"
            >
              <AccordionTrigger className="text-left text-lg font-inter-bold">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center mt-8 gap-y-3">
          <h3 className="font-inter-bold text-xl text-center">
            Ainda com dúvidas?<br />Fale com o nosso time.</h3>
          <button className="px-[60px] bg-wppButton text-white text-base font-inter-bold py-4 px-4 rounded-lg flex justify-center items-center gap-x-2 table: px-[45px] py-[9px]">
            <WhatsappIcon />Fale agora
          </button>
        </div>
      </section>
    </section>
  );
};

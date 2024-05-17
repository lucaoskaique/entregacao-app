import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsappIcon from '@/assets/images/icons/whatsapp-icon.svg'

interface FAQProps {
  question: string;
  answer: string;
  value: string;
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
      className="py-20 mx-5">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Dúvidas frequentes
      </h2>

      <section className="py-12 px-8 border-[3px] border-black rounded-[20px]">
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
              <AccordionTrigger className="text-left text-lg font-bold">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center mt-8 gap-y-3">
          <h3 className="font-bold text-2xl text-center">
            Ainda com dúvidas?<br />Fale com o nosso time.</h3>
          <button className="bg-wppButton text-white text-base font-bold py-4 px-4 rounded-lg flex items-center gap-x-2">
            <img src={WhatsappIcon} width={34}/>Fale conosco agora</button>
        </div>
      </section>
    </section>
  );
};

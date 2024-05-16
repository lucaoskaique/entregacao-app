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
      className="container py-20">
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

        <h3 className="font-medium mt-4">
          Ainda com dúvidas? <br /> Fale com o nosso time. <br />{" "}
          <button className="bg-button text-white text-base font-medium py-4 px-4 rounded">
            <img src={WhatsappIcon} alt="Ícone do WhatsApp" /> Fale conosco agora
          </button>
        </h3>
      </section>
    </section>
  );
};

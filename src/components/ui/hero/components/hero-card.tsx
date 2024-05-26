import { useState } from 'react'
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "./card";

import { ArrowIcon } from '@/components/ui/utils/icons'
import ButtonWpp from '@/components/ui/button-wpp-hero'

interface HeroCardProps {
    className: string,
    contentColor: string,
    imgContainer: any,
    titleName: string,
    borderColor: string,
    buttonLabel: string,
    wppURL: string,
    buttonColor: string,
    arrowColor: string,
    detailsList?: any,
}

export const HeroCard = ({ className, contentColor, imgContainer, titleName, borderColor, buttonLabel, wppURL, buttonColor, arrowColor, detailsList }: HeroCardProps) => {
    const [text, setText] = useState<boolean>(false)

    return (
        <Card className={`${className} w-full max-w-[450px] rounded-xl p-6 flex flex-col shadow-xl`}>
            <CardHeader className='p-0'>
                <CardTitle className={`${contentColor} flex gap-3 mb-6`}>
                    {imgContainer}
                    <p className='text-base font-inter-regular'>Sou<br />
                        <span className='text-3xl font-inter-semibold'>{titleName}</span></p>
                </CardTitle>
            </CardHeader>
            <CardContent className={`${borderColor} border-b mb-6 p-0`}>
                <ButtonWpp title={buttonLabel} whatsappLink={wppURL} />
            </CardContent>
            <CardFooter className='p-0 flex flex-col items-start'>
                <Button
                    className={`${buttonColor} bg-transparent border text-[13px] font-inter-regular rounded-sm  p-2 w-32 flex justify-between items-center transition-all duration-1000 hover:bg-transparent`}
                    onClick={() => setText(!text)}>
                    <p className='font-inter-regular text-[13px]'>Mais detalhes</p>
                    <ArrowIcon color={arrowColor} className={`${text ? 'transform -rotate-90' : ''}`} />
                </Button>
                <span className={`${text ? 'block' : 'hidden'} text-neutral-300 text-sm mt-6 leading-7 transition-all duration-1000 font-inter-regular`}>
                    <ul className='list-disc ml-4'>
                        {detailsList}
                    </ul>
                </span>
            </CardFooter>
        </Card>
    )
}
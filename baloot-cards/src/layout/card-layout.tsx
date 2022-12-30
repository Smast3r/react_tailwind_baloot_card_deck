 
import clubs from "./../assets/clubs.png"
import diamonds from "./../assets/diamonds.png"
import hearts from "./../assets/hearts.png"
import spades from "./../assets/spades.png"

type CardProps = {
title:string
suit:keyof typeof Suits
content:any
}

const Suits = {
    spades,
    hearts,
    diamonds,
    clubs,
}


export const Card = ({content,suit,title}:CardProps) => {


    return (
    <div className=" flex max-w-xs bg-gray-900 text-white 
    rounded p-2 max-h-max items-stretch">
        <div className="flex flex-col justify-start">
            <div className="font-bold">{title}</div>
            <div className=""><img src={Suits[suit]}/></div>
        </div>
        <div className="flex justify-center grow flex-wrap items-center h-full break-all">{content}</div>
        <div className="flex justify-end rotate-180 flex-col-reverse ">
            <div className=""><img src={Suits[suit]}/></div>
            <div className="font-bold">{title}</div>
            
            </div>
    </div>
    )
}
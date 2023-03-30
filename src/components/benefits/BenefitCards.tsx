

type Props = {
    children : Array<React.ReactNode>,
    heading : string,
    para : string
}

function BenefitCard ({children,heading,para} : Props) {
    
    return(
             
        <div className="flex flex-col justify-center items-center gap-y-5 p-10 border-[2px] rounded border-gray-500" >

        {children[0]}
        <h1 className="text-lg text-gray-500 font-semibold" >
          {heading}
        </h1>

        <p className="text-sm text-center text-gray-600" >
           {para}
        </p>

        {children[1]}
  
    </div>
    )
}

export default BenefitCard
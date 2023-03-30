type Props = {
    heading : string,
    paragraph : string
}

function Heading ({heading,paragraph} : Props) {
    return(
        <div>
        <h1 className="uppercase md:text-[60px] text-[30px] font-montserrat text-gray-500 font-bold text-center mb-6" >
            {heading}
        </h1>
        <p className="text-sm px-5 md:px-12 md:text-lg text-center" >
            {paragraph}
        </p>
    </div>
    )
}

export default Heading
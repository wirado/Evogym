type Props = {
    name : string,
    description? : string,
    image : string
}

function Class (props : Props) {
    return(
       <li className="relative w-[440px] h-[350px] " >
        <div className="absolute flex flex-col z-20  justify-center  items-center gap-y-5
                        whitespace-normal w-full h-full px-4 
                      bg-primary-500 text-center text-white
                      opacity-0 transition duration-500 hover:opacity-80" >
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
        <img src={props.image} className=' h-full object-cover' alt={props.name} /> 
       </li>
    )
}

export default Class
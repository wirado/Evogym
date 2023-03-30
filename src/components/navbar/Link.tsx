import { SelectedPage } from "@/type/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page : string;
    selectedPage : string;
    setSelectedPage : (value : SelectedPage) => void
    navClose : (value : boolean) => void
}

function Link ({page,setSelectedPage,selectedPage,navClose} : Props) {

    const lowercasePage = page.toLowerCase().replace(/ /g,'') as SelectedPage
    const handelClick = () => {
        setSelectedPage(lowercasePage)
        navClose(false)
    }


    return (
        <AnchorLink className={`${selectedPage === lowercasePage ? 'text-primary-500' : ''} cursor-pointer transiton duration-500 hover:text-primary-300`}
         href={`#${lowercasePage}`}
         onClick={handelClick} >
            {page}
        </AnchorLink>
    )
}

export default Link
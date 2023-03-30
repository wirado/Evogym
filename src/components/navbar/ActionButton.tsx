import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/type/types"

type Props = {
    children : React.ReactNode;
    setSelectedPage : (value:SelectedPage) => void
}

function ActionButton (props : Props) {
    return (
        <AnchorLink href={`#${SelectedPage.ContactUs}`} onClick={() => props.setSelectedPage(SelectedPage.ContactUs)} >
            {props.children}
        </AnchorLink>
    )
}

export default ActionButton
import { SelectedPage } from "@/type/types"
import ActionButton from "../navbar/ActionButton"
import HomePageText from "@/assets/images/HomePageText.png";
import HomePageGraphic from "@/assets/images/HomePageGraphic.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage : (value : SelectedPage) => void
}

function Home (props : Props)  {

    const homeVariants = {
        hidden : {
            opacity : 0,
            x : -70
        },
        show : {
            opacity : 1,
            x : 0,
            transition : {
                delay : 0.8,
                duration : 0.7,
                type: 'spring',
                stiffness: 80,
            }

        }
    }

    return (
        <section id='home' className="md:h-full container mx-auto px-3 my-20 relative" >

        <motion.div 
        variants={homeVariants} initial='hidden' whileInView='show'
        onViewportEnter={() => props.setSelectedPage(SelectedPage.Home)}
        className="flex md:flex-row flex-col gap-5" >

            <div className="flex flex-col gap-y-5 before:absolute before:-top-20 md:before:content-evolvetext before:z-[-10]" >
                <div>
                    <img src={HomePageText} alt={'homepagetext'} />
                </div>

                <p className="text-gray-500 font-semibold" >
                    Unrivaled Gym, Unparalleled training fitness classes,world-class studios to get the body shapes that you dream of...
                    Get Your Body Now!
                </p>

                <button className="px-4 py-2 bg-secondary-500 rounded w-[150px] text-xl font-bold " >
                       <ActionButton setSelectedPage={props.setSelectedPage} >Join Now!</ActionButton>
                </button>

                <AnchorLink className="text-sm font-bold text-primary-500  hover:text-secondary-500"
                            onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`} >

                            Learn More

                </AnchorLink>

            </div>

            <div>
                <img src={HomePageGraphic} alt='homePage Graphic' />
            </div>

        </motion.div>

        </section>
    )
}

export default Home
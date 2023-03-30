import { SelectedPage,BenefitsType } from "@/type/types"
import { motion } from "framer-motion"
import Heading from "../texts/texts"
import {HomeModernIcon, UserGroupIcon,AcademicCapIcon,} from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "../navbar/ActionButton";
import BenefitCard from "./BenefitCards";
import BenefitsPageGraphic from '@/assets/images/BenefitsPageGraphic.png'

type Props = {
    setSelectedPage : (value : SelectedPage) => void
    }


function Benefits (props : Props) {

    const benefitCards : Array<BenefitsType> = [
        {
            icon : <HomeModernIcon className="w-[40px] p-1 bg-primary-500  text-gray-500 rounded-full" />,
            heading : 'State of the Art Facilities',
            para : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid labore sit quis sapiente qui ipsam dolores,'
        },
        {
            icon : <UserGroupIcon className="w-[40px] p-1 bg-primary-500  text-gray-500 rounded-full" />,
            heading : "100's of Diverse Classes",
            para : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid labore sit quis sapiente qui ipsam dolores,'
        },
        {
            icon : <AcademicCapIcon className="w-[40px] p-1 bg-primary-500  text-gray-500 rounded-full" />,
            heading : "Expert and Pro Trainers",
            para : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid labore sit quis sapiente qui ipsam dolores,'
        }
    ]

    //animation
    const benefitsVariants = {
        hidden : {
            opacity : 0,
            x : 70
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

    return(
        <section id='benefits' className="container mx-auto " >

            <motion.div
             onViewportEnter={() => props.setSelectedPage(SelectedPage.Benefits)}>

                <Heading 
                    heading='more than just a gym'
                    paragraph="We provide world class fitness equipment,trainers
                    and classes to get you to your ultimate fitness 
                    goal with ease.We porvide true care into each and every member."
                     />

                <div className="flex flex-col md:flex-row gap-6 px-3 mt-10" >

                                    {benefitCards.map(benefit => {
                                        return(
                                                <BenefitCard heading={benefit.heading} para={benefit.para} key={benefit.heading} >

                                                    {benefit.icon}
                                            
                                                    <AnchorLink className="text-sm font-bold text-primary-500  hover:text-secondary-500"
                                                        onClick={() => props.setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`} >
                                                            Learn More
                                                    </AnchorLink>

                                                </BenefitCard>
                    )
                  })}
                  
                </div>

                <motion.div className="my-16 flex flex-col md:flex-row"
                variants={benefitsVariants} initial='hidden' whileInView='show' >

                  <img src={BenefitsPageGraphic} alt={'graphic'} className='mx-auto mb-10'  />

                  <div className="relative " >
                    <div className="before:absolute before:md:hidden before:-top-20 before: before:content-abstractwaves before:z-[1]" >
                        <Heading heading="MILLIONS OF HAPPY MEMBERS GETTING FIT "
                                paragraph="Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio."
                        />

                            <button className="md:px-4 px-1 md:py-2 py-1 mx-auto mt-6  bg-secondary-500 rounded w-[150px] text-xl font-bold block " >
                                    <ActionButton setSelectedPage={props.setSelectedPage} >Join Now!</ActionButton>
                            </button>
                    </div>
                  </div>

                </motion.div>

            </motion.div>
        </section>
    )
}

export default Benefits
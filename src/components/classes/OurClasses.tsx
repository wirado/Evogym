import { SelectedPage,ClassType } from "@/type/types"
import { motion } from "framer-motion"
import Heading from "../texts/texts"
import Class from "./Class";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";
import image6 from "@/assets/images/image6.png";

type Props = {
    setSelectedPage : (value : SelectedPage) => void
}

function OurClasses (props : Props) {

    const classes: Array<ClassType> = [
        {
          name: "Weight Training Classes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: image1,
        },
        {
          name: "Yoga Classes",
          image: image2,
        },
        {
          name: "Ab Core Classes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: image3,
        },
        {
          name: "Adventure Classes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: image4,
        },
        {
          name: "Fitness Classes",
          image: image5,
        },
        {
          name: "Training Classes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: image6,
        },
      ];

    return (
        <section id='ourclasses' >
            <motion.div onViewportEnter={() => props.setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div className="mx-auto" >
                    <Heading heading='OUR CLASSES'
                        paragraph=' Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                        tellus quam porttitor. Mauris velit euismod elementum arcu neque
                        facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                        enim mattis odio in risus nunc.' />
                </motion.div>

                <div className="h-[350px] mt-10 w-full overflow-x-auto overflow-y-hidden " >
                    <ul className="w-[2700px] whitespace-nowrap flex flex-row gap-x-10" >
                        {classes.map((cls,index) => {
                            return(
                                <Class key={index} name={cls.name} description={cls.description} image={cls.image} />
                            )
                        })}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses
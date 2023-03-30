import { SelectedPage } from "@/type/types"
import { motion } from "framer-motion"
import { useForm } from 'react-hook-form'
import Heading from "../texts/texts"
import ContactUsPageGraphic from "@/assets/images/ContactUsPageGraphic.png";

type Props = {
    setSelectedPage : (value : SelectedPage) => void
}

function ContactUs (props : Props) {

    const {register,trigger,formState : { errors }} = useForm()
    const handleSubmit = async (event : any) => {
       
        const isValid = await trigger()
        if(!isValid) {
            event.preventDefault()
        }
        
    }

    return(
        <section id='contactus' className="mt-16 container mx-auto" >
            <motion.div onViewportEnter={() => props.setSelectedPage(SelectedPage.ContactUs)} >

                <Heading heading="JOIN NOW TO GET IN SHAPE" 
                paragraph="Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                    sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                    adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis." />

                <div className="flex flex-col md:flex-row mt-10 gap-8 mx-5" >
                    <form target="_blank"  onSubmit={handleSubmit} method='POST' action='https://formsubmit.co/noobmaster69@gmail.com' >
                        
                        <input 
                        placeholder="Name"
                        className="w-full rounded-md bg-primary-500 placeholder-white px-6 py-2 mb-6"
                        {...register('name',{required:true})} />

                        {errors.name && (
                            <h1 className="text-primary-500" >
                                {errors.name.type === "required" && "This field is required."}
                            </h1>
                        )}


                        <input 
                        placeholder="Email"
                        className="w-full rounded-md bg-primary-500 placeholder-white px-6 py-2 mb-6"
                        {...register('email',{required:true})} />

                        {errors.email && (
                            <h1 className="text-primary-500" >
                                {errors.email.type === "required" && "This field is required."}
                            </h1>
                        )}


                        <textarea 
                        placeholder="Message"
                        className="w-full rounded-md bg-primary-500 placeholder-white px-6 py-2 mb-6"
                        {...register('message',{required:true})} />

                        {errors.message && (
                            <h1 className="text-primary-500" >
                                {errors.message.type === "required" && "This field is required."}
                            </h1>
                        )}

                    <button type="submit" className=" block rounded-lg bg-secondary-500 px-14 py-2 transition duration-500 hover:text-white">
                        Submit
                    </button>

                    </form>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0 mx-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                        <img
                            className="w-full"
                            alt="contact-us-page-graphic"
                            src={ContactUsPageGraphic}
                        />
                        </div>
                        
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs
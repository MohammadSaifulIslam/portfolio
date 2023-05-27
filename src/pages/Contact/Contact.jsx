import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Contact = () => {
    return (
        <section className="py-20 bg-secondary">
            <div className="my-container">
                <SectionTitle
                    subTitle={'Contact'}
                    title={'Get In Touch'}
                >
                </SectionTitle>
                <div className="mt-20 grid md:grid-cols-2 gap-10">
                    <div>
                        <h4 className="text-2xl font-semibold text-white mb-5">Contact Info</h4>
                        <p className="text-neutral">Feel free to contact with me. Let's Build together something creative.</p>
                        <div className="mt-5 space-y-5 divide-y-2">
                            <div className="flex items-center gap-10">
                                <HiOutlineMail className="h-10 w-10 text-primary" />
                                <div>
                                    <p className="text-xl text-white">Email Me</p>
                                    <p className="text-neutral">saiful37471@gmail.com</p>

                                </div>
                            </div>
                            <div className="pt-5 flex items-center gap-10">
                                <HiOutlinePhone className="h-10 w-10 text-primary" />
                                <div>
                                    <p className="text-xl text-white">Call Me</p>
                                    <p className="text-neutral">+8801875924990</p>

                                </div>
                            </div>
                            <div className="pt-5 flex items-center gap-10">
                                <HiOutlineLocationMarker className="h-10 w-10 text-primary" />
                                <div>
                                    <p className="text-xl text-white">Address</p>
                                    <p className="text-neutral">Dhaka,Bangladesh</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-5">Let's Talk. I would love to hear from you</h4>
                        <form>
                            <div className="flex gap-5">
                                <input type="text" placeholder="Your Name" className="contact-input" required />
                                <input type="email" placeholder="Your Email" className="contact-input" required />
                            </div>
                            <input type="text" placeholder="Your Subject" className="contact-input my-5" required />
                            <textarea name="" id="" cols="30" rows="5" placeholder="Your Message" className="contact-input" required></textarea>
                            <button className="my-btn mt-5">Send</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
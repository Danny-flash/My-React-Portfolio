import React, { useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { GiCrossedBones } from 'react-icons/gi'
const Modalservice = () => {

    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
   /* const [openModal3, setOpenModal3] = useState(false) */
    return (
         <section className="Modal" id="services">
          <h5>What I Offer</h5>
            <h2>Services</h2>


            <div className="container modal__container">
                <div className="modal__services">
                    <articule className="modal__service">
                 <h3>Web {'\n'} Development</h3>
                 <small onClick={() => setOpenModal(!openModal)}>See more <AiOutlineArrowRight className="modal__icon1"/></small>
                {
                   openModal ?  <div className="modal__overlay" onClick={() => setOpenModal(!openModal)} >
                   <span className="modal__open" data-aos="zoom-in">
               <GiCrossedBones onClick={() => setOpenModal(!openModal)} className="cancel"/>
               <h3>Web Developer</h3>
               <p> I code the Client-side of a web application, convert the design into a real-life application using HTML, CSS and JavaScript. and also ensure responsive and adaptive User Interface</p>
               <ul>
                   <li><AiOutlineCheck className="modal__check"/>Maintenance & Update</li>
                   <li><AiOutlineCheck className="modal__check"/>Coding</li>
                   <li><AiOutlineCheck className="modal__check"/>Analysis</li>
                   <li><AiOutlineCheck className="modal__check"/>Design & Development</li>
               </ul>
           </span>
               </div> : (openModal2 && openModal) === ' '
                }
                    </articule>
                    <articule className="modal__service">
                 <h3>Content {'\n'} Creation </h3>
                 <small  onClick={() => setOpenModal2(!openModal2)} >See more <AiOutlineArrowRight className="modal__icon1"/></small>
                {
                     openModal2 &&   <div className="modal__overlay" onClick={() => setOpenModal2(!openModal2)}  >
                         <span  className="modal__open" data-aos="zoom-in">
                     <GiCrossedBones  onClick={() => setOpenModal2(!openModal2)} className="cancel" />
                     <h3> Content Creator</h3>
                     <p>I can create engaging posts on your page, share graphically designed pictures and videos that would interest your potential buyers</p>
                     <ul>
                         <li><AiOutlineCheck className="modal__check" />Blogs</li>
                         <li><AiOutlineCheck className="modal__check"/>Educational Websites</li>
                         <li><AiOutlineCheck className="modal__check"/>Video Content</li>
                         <li><AiOutlineCheck className="modal__check"/>Social media updates</li>
                     </ul>
                 </span>
                     </div>
                }
                    </articule>

                  {/*  <articule className="modal__service">
                 <h3>UI/UX {'\n'} Design</h3>
                 <small onClick={() => setOpenModal3(!openModal3)}>See more <AiOutlineArrowRight className="modal__icon1"/></small>
                {
                    openModal3 && <div className="modal__overlay" onClick={() => setOpenModal3(!openModal3)}>
                         
                        <span className="modal__open"  >
                    <GiCrossedBones  onClick={() => setOpenModal3(!openModal3)} className="cancel"/>
                    <h3>UI/UX Designer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eveniet? Excepturi reiciendis aut asperiores consectetur itaque quia fugit aspernatur consequatur?</p>
                    <ul>
                        <li><AiOutlineCheck className="modal__check"/>Lorem ipsum dolor sit amet consectetur.</li>
                        <li><AiOutlineCheck className="modal__check"/>Lorem ipsum dolor sit amet consectetur.</li>
                        <li><AiOutlineCheck className="modal__check"/>Lorem ipsum dolor sit amet consectetur.</li>
                        <li><AiOutlineCheck className="modal__check"/>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </span>
                    </div>
                }
                    </articule>*/} 
                </div>
            </div>
         </section>
    )
}

export default Modalservice
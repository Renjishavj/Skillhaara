import React from 'react'

import "../assets/styles/style.css"
import people from "../assets/images/cheerful-workers-watching-laptop_23-2147577254.avif"
import Logos from './Logos'
function Aboutus() {
  return (
    <div className="container">
    <header className="header">
     
      <div className="title">About Us</div>
     
    </header>

    <section className="main-content">
      <div className="image-gallery">
        <img src={people} alt="Fashion 1" className="side-image" />
        <img src={people} alt="Main Fashion" className="main-image" />
        <img src={people} alt="Fashion 3" className="side-image" />
      </div>
    </section>

    <section className="content">
      <p>
      Skill Haara is a widespread talent development organization which is enthusiastic in empowering knowledge and innovation, cultivating future abilities, building skilled human resources and boosting workforce talent worldwide. 
      
      Since our founding in 2007, Skill Haara is a one-stop shop for all employable needs and training requirements. We deliver a diverse range of learning and talent development programs to millions of individual and corporate learners in futuristic domains through our various outlets. 
      </p>
      <p>
      Our programs are crafted by Industry Experts and Product Developers with clear learning pathways and practical projects, through which we humbly assist interested individual and enterprises in benchmarking skills across jobs and developing safe, dependable products
      </p>
      <p>
      Expert and certified trainers deliver training in our modern and digital classroom environments and industry-grade labs. The training is based on immersive learning and takes advantage of the benefits of hybrid teaching to improve skill development outcomes along with genuine placement assistance to truly transform the lives of the learners.
      </p>
    </section>
    <h1 className='accredated'>Accredited By</h1>
    <div>
      <Logos/>
    </div>
  </div>
  )
}

export default Aboutus

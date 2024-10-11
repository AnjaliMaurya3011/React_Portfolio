import React from 'react'

const Navbar = () => {
  return (
    <div className='container navbar' data-aos="fade-down" data-aos-duration="900" >
      <div className='navbar_items' >Portfolio</div>
      <div className=  'navbar' >
        <a href='#home' className=  'navbar_items'>Home</a>
        <a href='#skills' className=  'navbar_items'>Skills</a>
        <a href='#project' className=  'navbar_items'>Project</a>
        <a href='#contact' className=  'navbar_items'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
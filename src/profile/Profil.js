import React from 'react'


const Profil = (props) => {

  Profil.defaultPorps = {
    profession: "h k"
  }
  
  const handlClick = e => {
    e.preventDefault();
    alert(" I ' m KHELIFI Halim");
  }
  return (
      <div>

          <div>{props.children}</div> 
         
          <a href='/' onClick={handlClick}> {props.fullName} </a>

          <p style={{width:'30%' , margin:'5px auto', fontWeight:'bolder' ,textAlign:'center'}}> {props.bio} </p> 

          <p> {props.profession} </p>

      </div>
  )
 
}


export default Profil;

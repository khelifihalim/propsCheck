import React from 'react';
import Pic from './Images/Pic.jpeg';
import Profil from  './Profil'

const Profile = () => {
    
  return (
   <div style={{textAlign:'center'}}>
      <Profil 
       fullName = "khelifi halim"
        bio="LOREMKFMFSMMV MLKMKS MVKMSKV hjhsfskfjkgkj usmvqkmhrhvd kjmjhfvh fvnqqlcnblj"
        profession= "Transgenic Phytopathology">

        <img src={Pic}  alt='profile pictur' 
                        style={{width: "15rem" , height: "15rem" ,marginTop:'3rem', borderRadius: "50%" }}
        />

        </Profil>
              
    </div>
  )
  
  
}

export default Profile

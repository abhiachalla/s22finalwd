import './profile.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = (user) => {
    user=user.user
    const {profileID} = useParams();
    const [newUser,setNewUser] = useState({});



        const getNewUser = async() => {
            const res = await axios.get("http://localhost:8800/api/users/find/"+profileID)
            setNewUser(res.data);

        } 

        useEffect(()=>{
            getNewUser()
        },[])
    
    // console.log("user is : " + user);
    // console.log(user.user.username)



    console.log("fetch new user")
    console.log(newUser)


 


    if(profileID) {
        user = newUser
        }




    return(
        <>

        <img src={user.profilePic} alt="" />
        <h1>
            Your name:{user.username}
        </h1>
        <h1>
            Your email: {user.email}
        </h1>
        {/* <h1>
            Your password: {user.user.password}
        </h1> */}

        {Object.keys(newUser).length===0 && user.isAdmin && <h1>You are an admin</h1>}
        
{Object.keys(newUser).length===0 &&
<Link to={`/otherusers/${user.username}`}>

        <h1>
            view other users
        </h1>
</Link>}
        </>
    );
}

export default Profile;

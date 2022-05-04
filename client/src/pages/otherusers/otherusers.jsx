import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './otherusers.css'

const OtherUsers =()=> {
    const {currentUserID} = useParams();
    const [finalRes,setFinalRes] = useState({});
    // console.log(currentUserID)

    //retrieve all the users
    const getAllUsers= async()=> {
        const res = await axios("http://localhost:8800/api/users");
        // console.log(res.data)
        setFinalRes(res.data);

    }

    useEffect(()=> {
        getAllUsers();
    },[])

    console.log("tjhis os final result")
console.log(finalRes)

let finalRes2 = Object.values(finalRes);


finalRes2=finalRes2.filter(user=>user.username!==currentUserID)


    
    return(
        <>

        <h1>
            Other Users:
        </h1>
            {finalRes2.map(user => 
            <div className='col-flex'>
                <h2 className='red'>Name: <span className='green'>{user.username}</span></h2>
                <h2>email: <span className='green'>{user.email}</span></h2>
                <Link to={`/profile/${user._id}`}>
                <h3 className='no-dec'>View Profile {user.username}</h3>
                    </Link>
                </div>           

        )}
        </>
    );

}

export default OtherUsers;
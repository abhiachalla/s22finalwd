
import Navbar from "../../components/navbar/Navbar.js";
import AnonFeatured from "../../components/featured/anonfeatured.jsx";
import List from "../../components/list/list.jsx";
import "./anonymous.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { Shuffle } from "@material-ui/icons";



let movieSent = null;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const Anonymous = ({type}) => {

    console.log("entered anonymoys") 


    const [lists1, setlists1] = useState([]);
    const [lists2, setlists2] = useState([]);
    const [lists3, setlists3] = useState([]);
    const [lists4, setlists4] = useState([]);




    const [ranmov, setRanMovie] = useState(null);

    
    

    const [genre, setGenre] = useState(null);


    useEffect( () => {
        const getRandomLists = async() => {
            try {

              const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
                  'X-RapidAPI-Key': '47ffa63576msh4bb35592f73ecc1p137d0ajsna21fa7d7526b'
                }
              };
              
              let countNo = 1
              let tempArr = [] 
              while(countNo<5) {
              
              fetch('https://movie-database-alternative.p.rapidapi.com/?s=Movie&r=json&page='+countNo, options)
                .then(response => response.json())
                .then(response => {
                
                response.Search.map(movie=>{
                tempArr.push(movie)
                })

                  setlists1(tempArr.slice(0,8));

                let ta2 = [...tempArr]
                shuffle(ta2)

                setlists2(tempArr.slice(9,17));

                let ta3 = [...tempArr]
                shuffle(ta3)



                setlists3(tempArr.slice(18,26));
 
                let ta4 = [...tempArr]
                shuffle(ta4)


                setlists4(tempArr.slice(27,35));

                const temptempArr  = tempArr.Shuffle
                setRanMovie(temptempArr[0])

                movieSent = temptempArr[0]

                
                
                })
                .catch(err => console.error(err));
                countNo++;
              }
              

              // const options = {
              //   method: 'GET',
              //   headers: {
              //   'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
              //   'X-RapidAPI-Key': '47ffa63576msh4bb35592f73ecc1p137d0ajsna21fa7d7526b'
              //   }
              //   };
                
              //   fetch('http://www.omdbapi.com/?i=tt3896198&apikey=728f5910&s=batman', options)
              //   .then(response => response.json())
              //   .then(response => {
              //     // setRanMovie(response.results[0])

              //   // console.log(response.results[0])
              //   let temparr = []

              //   response.results.map(movie=> {
              //     temparr.push(movie);
              //   })

              //   setlists1(temparr);

              //   let ta2 = [...temparr]
              //   shuffle(ta2)

              //   setlists2(ta2);

              //   let ta3 = [...temparr]
              //   shuffle(ta3)



              //   setlists3(ta3);
 
              //   let ta4 = [...temparr]
              //   shuffle(ta4)


              //   setlists4(ta4);







              //   // console.log(lists);

                
              //   }
              //   )
              //   .catch(err => console.error(err));

                // const res = await axios.get(
                //   `lists${type ? "?type=" + type : ""}${
                //     genre ? "&genre=" + genre : ""
                //   }`,
                //   {
                //     headers: {
                      
                //         token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2FhMzExNjRkODQ4M2MwMDNiODhhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTc2NjUzOX0.KeneoUYrptd15uhaqt7TjN-YC3CtazKcvRRZQ5cVPsA"
                //     },
                //   }
                // );
              
                // setlists(res.data);
              
              }catch(err) {
                  
                console.log(err);
            }
        };
        getRandomLists()
    },[type, genre]);



    return (
        <div className="Home">
            <Navbar/>

           
            <AnonFeatured ranmov={movieSent} />


        <List list={lists1} />
        <List list={lists2} />
        <List list={lists3} />
        <List list={lists4} />



        </div>
    )
}

export default Anonymous


/* eslint-disable @next/next/no-img-element */
import Header from '@/components/header'
import React from 'react'
import { headers } from '../../../next.config'
import { useParams } from 'react-router-dom';

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/Movie");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        page: curElem.id.toString() // Use curElem.id directly
      },
    };
  });

  console.log(data)
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async (props) => {
  // const {id} = useParams()
  const id = props.params.page; // Use context.params.id directly
  const res = await fetch(`http://localhost:5000/Movie/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};



const MyData = ({ data }) => {
  return (
    <>
      <Header />
      <div>
        <div className="mb-4">
          <img
            src={data.image}
            alt={`Image for ${data.name}`}
            className="w-40 max-h-30"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Name: {data.name}</h3>
          <h2 className="text-blue-600">Year: {data.year}</h2>
          <p className="text-gray-700">Duration: {data.duration}</p>
          <p className="text-gray-700">
            <i className="fa fa-star text-yellow-500"> Rating: {data.rating}</i>
          </p>
        </div>
      </div>
    </>
  )
}

export default MyData; // Corrected component name to start with a capital letter and fixed export




// import React from 'react'
// import {useParams } from 'react-router-dom'

// export const getStaticProps = async (context) => {
//     // const {id} = useParams()
//     // const id = context.params.pageno;
//     const res = await fetch(`http://localhost:4000/Movie/${id}`);
//     // const data = await res.json();
  
//     console.log(res)
//     // return {
//     //   props: {
//     //     data,
//     //   },
//     // };
//   };

// //   console.log(data)
// const MoviePage = () => {


    
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MoviePage




// import React from 'react'

// const User = ({ curElem }) => {
//   return (
//     <div className="row">
//       <div className="col-md-6 offset-md-3">
//         <div className="card">
//           <div className="card-body text-center">
//             <p>detahfeb</p>
//             {/* <h3>{curElem.year}</h3> */}
//             {/* <p>Email: {curElem.email} </p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




// export async function getStaticPaths(context) {
//   const res = await fetch(`http://localhost:5000/Movie/${context.id}`)
//   const users = await res.json()

//   console.log(users)
//   const paths = users.map((user) => ({
//     params: { id: user.id.toString() },
//   }))

//   return { paths, fallback: false }
// }


// export async function getStaticPaths(curElem) {
//     try {
//       const res = await fetch(`http://localhost:5000/Movie/${curElem.id}`)
//       console.log(res)
//       // Check if the response status is OK (200) and content type is JSON
//       if (res.status === 200 && res.headers.get('Content-Type').includes('application/json')) {
//         const users = await res.json();
        
//         console.log(users);
  
//         const paths = users.map((user) => ({
//           params: { id: user.id.toString() },
//         }));
  
//         return { paths, fallback: false };
//       } else {
//         console.error('Invalid response:', res.status, res.statusText);
//         // Handle the error or return appropriate fallback data
//         return { paths: [], fallback: true };
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle the error or return appropriate fallback data
//       return { paths: [], fallback: true };
//     }
//   }
  

// export async function getStaticProps({ curElem }) {
//     const res = await fetch(`http://localhost:5000/Movie/${curElem.id}`)
//     const user = await res.json()
// console.log(res)  
// return { props: { user } }
// }

// export default User
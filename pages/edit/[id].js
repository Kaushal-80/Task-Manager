import MainForm from '@/pages/components/MainForm'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const EditTopic = ({ topicDetails }) => {
  // const router = useRouter();
  // const { id } = router.query
  
  // const [topicDetails, setTopicDetails] = useState(null);
  
  // useEffect(() => {
  //   async function request() {
  //   try {
  //       await axios.get(`/api/topics?id=${id}`).then((res) => {
  //         setTopicDetails(res.data);
  //       })
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  //   request();
  // }, []);

  return (
    <>
      {topicDetails ? (
        <>
          <div className="sm:flex sm:items-center sm:justify-between py-3">
            <div className="text-center sm:text-left">
              <p className="mt-1.5 text-md text-gray-500 max-w-lg">Editing {topicDetails.title}</p>
            </div>

          </div>
          <hr className=" h-px border-0 bg-gray-300" />

          <div className="my-10">
              <MainForm {...topicDetails}/>
          </div>
        </>
        ):("No data found")

      }
    
</>
       
  )
}



export default EditTopic

export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/topics?id=${id}`)
    const data = res.data
  return {
      props: {
          topicDetails: data,
      },
  }
}
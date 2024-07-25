import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react"


const MainPage = () => {
  // console.log(data);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get('/api/topics').then(res => {
      setTopics(res.data);
    })
  }, [])

  return <>

    {topics.map((t, index) => (
      <div key={index} className="max-w-full mb-2 p-4 flex justify-between items-start gap-3 bg-indigo-100 shadow-md rounded-md">
        <div className="min-h-fit max-w-xl  break-words">
          <h1 className="text-lg font-bold" >{t.title}</h1>
          <p className="text-sm text-slate-500">{t.description}</p>
        </div>
        <div className="flex gap-4 ">
          <Link href={'/delete/' + t._id}>
            <p className="text-lg hover:text-rose-500 hover:underline">Delete</p>
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_API_URL}/edit/` + t._id} >
            <p className="text-lg hover:text-emerald-500 hover:underline">Edit</p>
          </Link>
        </div>
      </div>
    ))}
  </>


}



export default MainPage
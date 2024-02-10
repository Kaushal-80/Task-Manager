import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';


const MainForm = (
    {
        _id, 
        title: existingTitle,
        description: existingDescription
    }
) => {

    const router = useRouter();
    // console.log()

    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    // const [title, setTitle] = useState(existingTitle || '');
    // const [description, setDescription] = useState(existingDescription || '');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, description }
        console.log(data);

        if (_id) {
            await axios.put('/api/topics', {...data, _id});
    
        } else {

            await axios.post('/api/topics', data);
        } 

        router.push("/");
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className='max-w-xl mb-4'>
                    <label  className="mb-1 block text-md font-medium text-gray-700">Topic</label>
                    <input type="text" className="block w-full rounded-md border-gray-300 shadow-sm border focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3" placeholder="Topic"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className='max-w-xl mb-4'>
                    <label className="mb-1 block text-md font-medium text-gray-700">Topic Description</label>
                    <textarea rows="6" type="text" className="block w-full rounded-md border-gray-300 shadow-sm border focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3" placeholder="Topic"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className='max-w-xl mb-4'>
                    <button
                        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        type='submit'
                    >
                        Save
                    </button>

                </div>


            </form>
        </>
    )
}

export default MainForm
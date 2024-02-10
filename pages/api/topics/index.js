import connectDB from '@/libs/mongodb';
import Topic from '@/models/TopicSchema'

const handleApi = async (req, res) => {

    await connectDB();
    if(req.method === 'GET'){
        if(req.query?.id){
            res.json(await Topic.findById(req.query.id));
            // console.log("topic get from id");
        } else {
            res.json(await Topic.find());
        }
    }

    if(req.method === 'POST') {
        const { title, description } = req.body;
        res.json(await Topic.create({ title, description }));
    }

    if(req.method === 'DELETE'){
        const id = req.query.id;
        await Topic.deleteOne({_id: id});
        res.json(true);
    }

    if(req.method === 'PUT'){
        const { title, description, _id } = req.body;
        await Topic.updateOne({_id},{ title, description })
        res.json(true);
    }



};

export default handleApi;
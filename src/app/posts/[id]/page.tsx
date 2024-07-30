import axios from "axios";

const getDatailData =async (id:string)=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    return data;
}

const PostsDetail = async ({params}:{params:{id:string}}) => {
    const data = await getDatailData(params.id)
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export default PostsDetail;
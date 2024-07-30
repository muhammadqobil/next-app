import axios from "axios";
import {PostType} from "@/interface";
import Link from "next/link";

async function post() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');

    return data;
}

const PostsPage = async () =>{
    const data:PostType[] = await post();
    return (<>
        <table border={1}>
            <thead>
            <tr>
                <th>id</th>
                <th>title</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map((post: PostType) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>
                            <Link href={'/posts/' + post.id}>{post.title}</Link>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </>)
}

export default PostsPage;
'use client';

import {useEffect, useState} from "react";
import {PostType} from "@/interface";
import axios from "axios";
import Link from "next/link";

const Home = () => {
    const [post, setPost] = useState<PostType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                setPost(data);
            }catch(e) {
                console.log(e)
            }finally {
                setLoading(false);
            }
        }
        fetchPost()
    }, []);
    
    return(
        <>
            {
                loading ? 'Loading...' : post?.map((p: PostType) => (
                    <div key={p.id}>
                        <Link href={'/posts/' + p.id}>{p.title}</Link>
                    </div>
                ))
            }
        </>
    )
}

export default Home;
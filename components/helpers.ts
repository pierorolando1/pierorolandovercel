import { db } from '../firebase.config'

export interface Post {
    id: string,
    title?: string,
    subtitle?: string,
    date?: any,
    category?:any,
    imagen?:string,
    content?:string
}


export const getAllPostIds = async () => {

    const snapshot = await db.collection('posts').get()
    var posts: Post[] = []
    snapshot.forEach((doc) => {
        posts.push({
            id: doc.id,
        })
    })
    return posts
}

export const getPost = async (id: string) => {
    const data = await db.collection("posts").doc(`${id}`).get()
    const post = data.data()
    console.log(post)

    return post
}

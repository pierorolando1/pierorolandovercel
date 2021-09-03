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

export interface Author {
    uid?: string,
    name: string,
    id: string,
    photo: string,
}


export enum authState {
    loading,
    notLoged,
    loged
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

export const getAllAuthorsIds = async () => {

    const snapshot = await db.collection('authors').get()
    var authors = []
    snapshot.forEach((doc) => {
        authors.push({
            id: doc.id,
        })
    })
    return authors
}


export const getPost = async (id: string) => {
    const data = await db.collection("posts").doc(`${id}`).get()
    const post = data.data()
    console.log(post)

    return post
}

export const getAuthor = async (id: string) => {
    const data = await db.collection("authors").doc(`${id}`).get()
    const author = data.data()
    console.log(author)

    return {
        id: data.id,
        name: author.name,
        photo: author.photo
    }
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export interface stateRedux {
    auth: {
        login: boolean,
        uid: string, 
        displayName: string,
        photoUrl:string,
        email:string,
        username:string,
    }
}
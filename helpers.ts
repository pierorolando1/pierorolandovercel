import styled from "styled-components"
import { db, firebase } from './firebase.config'

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
    phone?:any,
    email:string
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
        photo: author.photo,
        email: author.email,
        phone: author.phone
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

export interface PostToBlog {
    title:string,
    subtitle:string,
    imagen:string,
    date:Date,
    content: string,
    authorID:string,
    authorName?:string,
    authorPhoto?:string,
    category:string,
}

export const fileUpload = async (file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/piero-rolando/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'planeta-interno');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            return null;
        }

    } catch (err) {
        throw err;
    }

}

export const removeSpecials = (str:string) => {
    var lower = str.toLowerCase();
    var upper = str.toUpperCase();
    var res = "";
    
    for(var i=0; i<lower.length; ++i) {
        if(lower[i] != upper[i] || lower[i].trim() === '')
            res += str[i];
    }

    return res;
}


export const ContainerEditor = styled.div`
    min-height: 100vh;
    background-color: rgba(31, 41, 55);
    h1,h2,h3 {
        color: rgba(209,213,219,1);
    }
    h2, h3 {
        padding-top: .45rem;
        padding-bottom: .45rem;
    }
    h1 {
        font-size: 1.125rem;
        line-height: 1.75rem;

        padding-top: .75rem;
        padding-bottom: .75rem;
    }
    
    @media (min-width: 768px){
        h1 {
            font-size: 1.5rem;
            line-height: 2rem;
        }
        h2 {
            font-size: 1.35rem;
            line-height: 1.85rem;
        }
        h3 {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: rgba(156,163,175,1);
    }
    
    strong {
        font-weight: 700;
    }

    .ql-clipboard {
        display: none;
    }
`

export const updatePhotoInAll = async ({username, photoURL}) => {
    await firebase.auth().currentUser.updateProfile({
        photoURL
    })
    await db.collection("authors").doc(username).update({
        photo: photoURL
    })
    const { docs } = await db.collection("posts").where("authorID", "==", username).get()
    docs.forEach(async doc => {
        await doc.ref.update({
            authorPhoto: photoURL
        })
    })
}

export const updateNameInAll = async ({username, newName}) => {
    await firebase.auth().currentUser.updateProfile({
        displayName: newName
    })
    await db.collection("authors").doc(username).update({
        name: newName
    })
    const { docs } = await db.collection("posts").where("authorID", "==", username).get()
    docs.forEach(async doc => {
        await doc.ref.update({
            authorName: newName
        })
    })
}

export const updateEmailInAll = async ({username, newEmail}) => {
    await firebase.auth().currentUser.updateProfile({
        displayName: newEmail
    })
    await db.collection("authors").doc(username).update({
        email: newEmail
    })
    
}

export const updatePhoneInAll = async ({username,newPhone}) => {
    try {
        //await firebase.auth().currentUser.updatePhoneNumber({
        //    
        //})
        await db.collection("authors").doc(username).update({
            phone: newPhone
        })

    } catch (error) {
        console.log(error)
    }
}
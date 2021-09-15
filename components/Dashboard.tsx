import { motion } from 'framer-motion'
import swal from '@sweetalert/with-react'
import { AdminPost } from './AdminPost'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateRedux } from '../helpers'
import { db, firebase } from '../firebase.config'
import { addUsername } from '../redux/auth/actions'
import { useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

export const Dashboard = () => {
    const dispatch = useDispatch()

    const [adminPosts, setAdminPosts] = useState([])
    var { uid, username } = useSelector((state: stateRedux) => state.auth)

    const getPostsAndSetState = async () => {
        const usernametemp = username == null ? await getAuthorDataWhitUid() : username
        const postsRef = db.collection('posts').where("authorID", "==", usernametemp)
        await postsRef.get().then((querySnapshot) => {
            const posts = [];
            querySnapshot.docs.forEach((doc) => {
                const { title, subtitle, date, category, authorID, authorName, authorPhoto, imagen } = doc.data();
                posts.push({
                    id: doc.id,
                    title,
                    subtitle,
                    date,
                    category,
                    authorID,
                    authorName,
                    authorPhoto,
                    imagen
                });
            });
            setAdminPosts(posts);
        })
    }
    async function getAuthorDataWhitUid() {
        var authorRef = db.collection('authors').where("uid", "==", firebase.auth().currentUser.uid)
        //var allCitiesSnapShot = await authorRef.get()
        const querySnapshot = await authorRef.get()

        const usernameArray = []
        await querySnapshot.docs.forEach((doc) => {
            console.log(doc.data())
            dispatch(addUsername(doc.id))
            usernameArray.push(doc.id)
        })
        return usernameArray[0]
    }

    useEffect(() => {
        console.log("UID", firebase.auth().currentUser.uid)


        async function main() {
            await getPostsAndSetState()

        }

        main()
        document.title = "Dashboard"
    }, [])
    return (
        <section className="w-full min-h-screen h-full bg-gray-900 p-3 sm:p-10 pt-10 overflow-auto">
            <h1 className="text-2xl text-gray-300 pb-6 font-black">Posts</h1>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} className="w-full bg-gray-800 rounded-lg p-3">
                <h1 className="text-gray-300 font-black pb-3">Recientes</h1>
                {
                    adminPosts.length > 0 ?
                        adminPosts.map(post => (
                            <AdminPost getPostsAndSetState={getPostsAndSetState} key={post.id} id={post.id} image={post.imagen} title={post.title} />
                        ))
                        : <motion.div animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} className="p-10 flex items-center justify-center"><PropagateLoader color="#1d4ed8" /></motion.div>
                }
            </motion.div>
        </section>
    )
}

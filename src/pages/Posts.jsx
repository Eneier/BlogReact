import React, {useRef, useState, useMemo, useEffect} from 'react'
import '../styles/App.css'
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/select/MySelect";
import axios from "axios";
import PostItem from "../components/PostItem";
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import {getPageCount, getPagesArray} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIsPostsLoading] = useState(false) //ОШИБКА ВЫНОСА В ХУК
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)



    // ХУК НА ПОЛУЧЕНИЕ ПОСТОВ И ЛОАДИНГ
    // const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    //     const posts = await PostService.getAll()
    //     setPosts(posts)
    // })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    //УДАЛЯЕМ ПОСТ
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    //NEW POSTS ON PAGES
    const changePage = (page) => {
        setPage(page)
    }

    useEffect(() => {
        fetchPosts()
    }, [page]) //указать зависимость решим проблему постраничного вывода для фетч пост и отставания.


    async function fetchPostgit adds() { //ОШИБКА ВЫНОСА В ХУК
        setIsPostsLoading(true)
        setTimeout(async () => {
            const response = await PostService.getAll(limit, page)
            setPosts(response.data)
            const totalCount = response.headers['x-total-count']
            setTotalPages(getPageCount(totalCount, limit))
            setIsPostsLoading(false)
           }, 1000)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Create Article
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {isPostsLoading
                ?  <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                :  <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"New post list"}/>
            }
            <Pagination page={page}
                        changePage={changePage}
                        totalPages={totalPages}/>
        </div>
    )
}
export default Posts;

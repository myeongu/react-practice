import React, { useCallback, useEffect, useState } from "react";

class App1 extends React.Component {
    state = {
        value1: 0,
        value2: 0,
    }
    
    onClick = () => {
        this.setState({
            value1: 10,
        })
    }
    render() {
        const { value1 } = this.state;
        return (
            <div>
                Hello App1
                <hr />
                {value1}
                <button onClick={this.onClick}>click</button>
            </div>
        )
    }
}

function PostDetailComponent({ post }) {
    const {title, content} = post;
    return (
        <div>
            <h2>{title}</h2>
            {content}
        </div>
    )
}

function PostDetail({ postId }) {
    // const [loading, setLoading] = useState();
    // const [error, setError] = useState();
    const [post, setPost] = useState();

    useEffect(() => {
        // console.log("Changed Post: ", postId)
        setPost({title: "포스팅 제목", content: `포스팅 내용...${postId}`});
        // setInterval(() => {}, 1000)
        return () => {
            // Unmount 시에 호출!
            // clearInterval(...)
        }
    }, [postId])

    return (
        <div>
            <h2>Post #{postId}</h2>
            {!post && "로딩 중..."}
            {post && <PostDetailComponent post={post} />}
        </div>
    )
}

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div>현재 시각은 {date.toISOString().slice(11, 19)}입니다.</div>
    )
}

function App2() {
    const [ value1, setValue1 ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ value, setValue ] = useState({ value1: 0, value2: 0 }) // ->value 안에 value1, value2 존재
    const [ postId, setPostId] = useState(1);

    useEffect(() => {
        console.log("mount, logi#1");
    }, []) // mount 시에만 호출

    useEffect(() => {
        console.log("changed value: ", value)
    }, [value]) // value가 변경시 호출

    const onClick = useCallback(() => {
        setValue(prevState => ({...prevState, value1: 10}));
    }, [])

    return (
        <div>
            <Clock />
            Hello App2
            <hr />
            {JSON.stringify(value)}
            <button onClick={onClick}>click</button>
            <hr />
            <button onClick={() => setPostId(100)}>100번 글 보기</button>
            <PostDetail postId={postId} />
        </div>
    )
}

export default App2;
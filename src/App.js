import React from 'react';
import { Button } from 'antd';
import 'App.css';

class PostDetail extends React.Component {
  state = {
    postDetail: null,
  }
  componentDidMount() {
    const { postId } = this.props;
    this.requestPost(postId);
  }

  componentDidUpdate(prevProps) {
    const { postId } = this.props;
    if (postId !== prevProps.postId ) {
      this.requestPost(postId)
    }
  }

  requestPost(postId) {
    console.log(`request post #${postId}`)
    this.setState({
      postDetail: null,
    })
    // axios (http client) => this.state
    setTimeout(() => {
      this.setState({
        postDetail: `로딩된 post #${postId}`
      })
    }, 3000)
  }

  render() {
    const { postId } = this.props;
    const { postDetail } = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        {!postDetail && `로딩 중 ...`}
        {postDetail}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    postId: 10
  }
  render() {
    return (
      <div>
        <PostDetail postId={this.state.postId} />
        <button onClick={() => this.setState({ postId: 20 })}>
          postId 변경
        </button>
      </div>
    )
  }
}

export default App;

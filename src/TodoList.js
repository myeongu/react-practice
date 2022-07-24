import React from "react";
import { List, Input } from "antd";

// class TodoItem extends React.Component {
//     render() {
//         const {todo} = this.props
//         return (
//             <li>{todo}</li>
//         )
//     }
// }

const TodoItem = ({ todo }) => {return <li>{todo}</li>;}

class TodoList extends React.Component {
    state = {
        todoList: ['파이썬 익히기', '장고 익히기'],
        current: '',
    }

    onChange = (e) => {
        const {value} = e.target;
        this.setState({
            current: value,
        })
    };

    onKeyDown = (e) => {
        if (e.keyCode === 13) { // Enter key
            const { todoList, current } = this.state;
            if (current.trim().length > 0) {
                this.setState({
                    current: '',
                    todoList: [...todoList, current.trim()]
                });
            }
        };
    };

    render() {
        return (
            <div style={{width:"300px", margin:"30px auto"}}>
                <List 
                    header={"Todo List"}
                    dataSource={this.state.todoList}
                    bordered
                    renderItem={todo => (
                        <List.Item>
                            {todo}
                        </List.Item>
                    )}
                />
                <Input
                    type="text"
                    value={this.state.current}
                    placeholder={"할 일을 입력해주세요."}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                />

                {/* <ul>
                    {this.state.todoList.map((todo, index) => 
                        <TodoItem key={index} todo={todo} />
                    )}
                </ul>
                <input type="text" value={this.state.current} 
                       placeholder="할 일을 입력해주세요."
                       onChange={this.onChange} 
                       onKeyDown={this.onKeyDown} />
                <hr />
                {JSON.stringify(this.state)} */}
            </div>
        )
    }
}


export default TodoList;
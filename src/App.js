import React from 'react';
import { Button } from 'antd';
import 'App.css';

const actions = {
  init(initialValue) {
    return { value: initialValue }
  },
  increment(prevState) {
    return { value: prevState.value + 1 }
  },
  decrement(prevState) {
    return { value: prevState.value - 1 }
  }
}

class Component1 extends React.Component {
  state = actions.init(this.props.initialValue)
  // state = {
  //   value: this.props.initialValue,
  // };
  
  onClick = () => {
    const { value } = this.state
    this.setState({ value: value + 1 })
  }

  render() {
    const { value } = this.state; // 현재의 상태값 참조
    return (
      <div>
        Counter: { value }
        <Button onClick={() => this.setState(actions.increment)}>+1</Button>
        <Button onClick={() => this.setState(actions.decrement)}>-1</Button>
      </div> // jsx 문법
    )
  }
}

class FruitComponent extends React.Component {
  render () {
    return (
      <div>
        <h1>좋아하는 과일</h1>
        <ul>
          {
            this.props.fruits.map((name, idx) => 
              <li key={idx}>{name}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

function App() {
  const fruits = ["바나나", "사과", "딸기"]
  return (
    <div>
      <Component1 initialValue={10} />
      <FruitComponent fruits={fruits} />
    </div>
  );
}

export default App;

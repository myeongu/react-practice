const { produce } = require("immer")

const baseState = [
    {todo: "Learn ES6+", done: true},
    {todo: "try immer", done: false}
]

// const newState1 = [ 
//     ...baseState.slice(0,1),
//     {'todo': `${baseState[1]["todo"]}`, 'done':true},
//     {todo: "Tweet about it"}
// ]

const newState1 = [
    ...baseState.map((tweet, index) => {
        return index === 1 ? {...tweet, done:true} : tweet
    }),
    {todo: "Tweet about it"}
]

const newState2 = produce(baseState, draft => {
    draft[1].done = true;
    draft.push({todo: "Tweet about it"})
})

console.log("base \n", baseState)
console.log("new1 \n", newState1)
console.log("new2 \n", newState2)
console.log("base \n", baseState)
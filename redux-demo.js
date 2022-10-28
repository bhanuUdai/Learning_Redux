const redux = require("redux");  //importing redux through node.js and require() is default method in node.js to import things


const counterReducer=(state={counter:0},action)=>  //creating reducer function here which is taking two parameters, one is state and another is action. state is the initial state 
{
    if(action.type==='increment')
    {
        return {
            counter:state.counter+1
        }
    }
   
    if(action.type==='decrement')
    {
        return {
            counter:state.counter-1
        }
    }
}

const store = redux.createStore(counterReducer);  // here we create central store by using .createstore(), and inside which we are passing reducer function which will change the state inside this central store


const counterSubscriber=()=>  // creating subscribe function which will execute and get us new state from the central store
{
    const latestState=store.getState();  // latest state is driven by function .getState() on store
    console.log(latestState);
}

store.subscribe(counterSubscriber) // this .subscribe() method get execute counterSubscriber() when state will change inside the store . (i.e it is telling redux that there is subscriber)

store.dispatch({type:"increment"})  // .dispatch() holds object with unique type  which will dispatch the action

store.dispatch({type:"increment"})
store.dispatch({type:"increment"})
store.dispatch({type:"increment"})
store.dispatch({type:"increment"})

store.dispatch({type:"decrement"})
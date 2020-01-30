import React, { Component } from 'react'
import TodoItem from './TodoItem'
import todosData from '../data/todosData'



class TodoList extends Component {
    constructor(){
        super()
        this.state={
            todos:todosData
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    
    
    handleOnChange(id){
        this.setState(prevState =>{
            const updatedTodos = prevState.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed : !todo.completed
                        }
                    }
                return todo
            })
            console.log(prevState.todos)
            console.log(updatedTodos) 
            return{
                todos:updatedTodos
            }    
                   
        });
        
    }
    render() {
        const todo = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleOnChange={this.handleOnChange} />);
        return (
            <div>
                <h1>TODO LIST APP</h1>
                {todo}
            </div>
        )
    }
}
export default TodoList
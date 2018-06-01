import {observable, action, computed} from 'mobx';

class TodoList{
    @observable lists = []

    @action addList = (list) => {
        const newItem = {
            name: list,
            completed: false
        }
        this.lists.push(newItem);
    }
    @action toggleCompleted = (index) => {
        this.lists[index].completed = !this.lists[index].completed
    }

    
    @computed get listCount(){
        return this.lists.length;
    }
    @computed get completedCount(){
        return this.lists.filter(
            todo => todo.completed === true
        ).length;
    }
}


const list = new TodoList();

export default list;
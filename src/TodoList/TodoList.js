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

    @computed get listCount(){
        return this.lists.length;
    };
}


const list = new TodoList();

export default list;
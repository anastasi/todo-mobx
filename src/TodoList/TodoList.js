import {observable, action, computed} from 'mobx';

class TodoList{
    @observable lists = [];

    @action addList = (list) => {
        this.lists.push(list);
    }

    @computed get listCount(){
        return this.lists.size;
    };
}


const list = new TodoList();

export default list;
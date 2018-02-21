/*
 *  A simple todo list app.
 *
 * @ Ryan Ferner
 */

// I've been able to get it to add and remove, but that's all
// visibility filters
//var filters = {
//    all: function (todos) {
//        return todos;
//    },
//    active: function (todos) {
//        return todos.filter(todo => !todo.completed);
//    },
//    completed: function (todos) {
//        return todos.filter(todo => todo.completed);
//    }
//}

// Define custom filter to correctly pluralize the word
Vue.filter('pluralize', function (n) {
    return n === 1 ? 'item' : 'items';
});

// Example data that represents the list of todo items


// app Vue instance
var todoapp = new Vue({
    el: "#todoapp",
    data: {
        message : "What need done?",
        todoList: [
        {
            title: 'Download code',
            completed: false
        },
        {
            title: 'Study code',
            completed: false
        },
        {
            title: 'Finish code',
            completed: false
        }
        ]

    },
    methods: {
        remove: function() {
            todoapp.todoList.pop(0);
        },
        tack: function(){
            todoapp.todoList.push({
            title: todoapp.message,
            completed: false
        })
        }
    }
    
});

// mount
todoapp.$mount('#todoapp')

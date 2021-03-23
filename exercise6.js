let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function toggleCompletedById(id) {
    let newTodos = todos.filter(todo => todo.id === id);
    newTodos[0].completed = !newTodos[0].completed;
  }
  
  // const toggleCompletedById = (id) => {
  //   todos = todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed}:{...todo});
  // };

  toggleCompletedById(1);
  
  console.log(todos);
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
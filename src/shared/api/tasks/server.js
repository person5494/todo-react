const URL = 'http://localhost:3001/tasks/'
// const URL = 'https://6a2d730e2edd4cb330d12b7d.mockapi.io/todo/tasks/'

const headers = {
          'Content-Type': 'application/json',
        }

const serverAPI = {
  getAll: () => {
    return fetch(URL).then((response) => response.json())
  },

  getById: (id) => {
    return fetch(`${URL}${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Task not found');
      }
      return response.json();
    });
  },
  
  add: (task) => {
    return fetch(URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(task),
      })
      .then((response) => response.json())
  },

  delete: (id) => {
    return fetch(`${URL}${id}`, {method: 'DELETE',})
  },

  deleteAll: (tasks) => {
    return Promise.all(
        tasks.map(({ id }) => serverAPI.delete(id))
      )
  },

  toggleComplete: (id, isDone) => {
    return fetch(`${URL}${id}`, {
      method: 'PATCH',
      // method: 'PUT',
      headers,
      body: JSON.stringify({isDone})
    })
  },
}

export default serverAPI
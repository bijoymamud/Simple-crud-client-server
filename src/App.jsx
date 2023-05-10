import './App.css';

function App() {

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);


    //!Server site theke mongoDB te pathanor jonno "node mongoDB crud" use korbo.

    //server site a data ta pathabo
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('User added successfully')
          form.reset();
        }
      });


  }
  return (
    <>

      <h2>Simple Crud</h2>

      <form onSubmit={handleAddUser} >
        <input type="text" name='name' /> <br />
        <input type="email" name='email' /> <br />
        <input type="submit" name="submit" value='Add User' />
      </form>
    </>
  )
}


export default App

// import React from 'react'
// import Book from './components/Book'
// import Physics from './components/Physics'
// import Chemistry from './components/Chemistry'
import Student from './component/Student'

const App = () => {
  return (
    <div style={{display: 'flex', gap: '10px'}}>
      <Student name="Deepak Ji" rollNo="44" class="CSE-DS" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1pwNEm9IKJNVwGdZXfgYMfv0liQpkSBNlHZ6rh3VTg&s=10" />
      <br />
      <Student name="Armaan Ji" rollNo="49" class="CSE-Core" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1o8PwdaJJArsYep0bVaKSjynkfAupjFZzWiqIWkxCMQ&s=10" />
      <br />
      <Student name="Asit Ji" rollNo="57" class="CSE-AI/ML" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoKoFZ1oXAUvrk_8fZtSwO_Grsf6JHsInrbIEXuVXSw&s=10" />
      <br />

    </div>
    
  )
}

export default App
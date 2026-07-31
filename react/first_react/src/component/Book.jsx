import React from 'react'

const Book = () => {
  return (
    <div style={{border:'200px solid black',  backgroundColor:'greenyellow'}}>
        <h3 style={{color:'red'}}>Book</h3>
        <img src="https://imgs.search.brave.com/3J4EIzeSuu2ZoryTmMufu7gtSGVr4kxjlb2kPucqqw8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA5L0Jvb2tzLkpQ/Rw" alt="image of the books" height={350} width={300} />
        <h3>Book name:CS</h3>
        <h4>Book Price:400</h4>  

    </div>
  )
}

export default Book
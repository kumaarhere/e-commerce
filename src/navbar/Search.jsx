

const Search = () => {
  return (
    <div className='mt-2'>
     <form className='form-group d-flex'>
        <input type='text'
               placeholder='search Q-mart '
               id='search'
               className='form-control px-3 py-2 border-secondary fw-bold'
        ></input>
        <button className='btn btn-info ms-1'><i className="fa-solid fa-magnifying-glass"></i></button>
    
     </form>
    </div>
  )
}

export default Search

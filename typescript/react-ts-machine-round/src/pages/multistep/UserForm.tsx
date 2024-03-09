import React from 'react'

export default function UserForm() {
  return (
    <>
      <div className="form-group d-flex justify-content-center">
        <label className='form-label'>User Detail</label>
      </div>
      <div className="form-group mb-3" id="firstName">
        <label className='form-label'>First Name</label>
        <input className='form-control' type="text" placeholder="first name" />
      </div>
      <div className="form-group mb-3" >
        <label className='form-label'>Last Name</label>
        <input className='form-control' type="text" placeholder="last name" />
      </div>

      <div className="form-group mb-3">
        <label  className='form-label'>Age</label>
        <input  className='form-control' type="number" placeholder="age" />
      </div>
    </>
  )
}

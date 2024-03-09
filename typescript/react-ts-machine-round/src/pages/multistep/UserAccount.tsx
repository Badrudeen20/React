export default function UserAccount() {
  return (
    <>
      <div className="form-group d-flex justify-content-center">
        <label>User Account</label>
      </div>
      <div className="form-group mb-3" >
        <label>Bank Name</label>
        <input className='form-control' type="text" placeholder="bank name" />
      </div>
      <div className="form-group mb-3" >
        <label>Account Number</label>
        <input className='form-control' type="number" placeholder="account  number" />
      </div>
    </>
  )
}

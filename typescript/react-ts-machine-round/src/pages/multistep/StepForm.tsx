
import useMultistepForm from "./useMultistepForm";
import UserAccount from "./UserAccount";
import UserForm from "./UserForm";


function StepForm() {
  const {steps,currentStepIndex,step,back,next} =  useMultistepForm([<UserForm/>,<UserAccount />])
  return (
   <div className="container d-flex justify-content-center">
    <form className="w-75 border mt-3 rounded">
      <div className="d-flex justify-content-end" >
        <label className="mx-2">
          {currentStepIndex+1}/{steps.length}
        </label>
      </div>


       {step}


      <div className="mb-3 d-flex justify-content-end" >
        {currentStepIndex!== 0 &&  <button className="btn btn-primary" onClick={back} type="button">
          Back
        </button>}
       
        <button className="btn btn-primary mx-2"  onClick={next} type="button">
          {currentStepIndex === steps.length -1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </form>
   </div>
  );
}

export default StepForm;

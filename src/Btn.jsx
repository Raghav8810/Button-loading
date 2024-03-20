
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Progress } from "@/components/ui/progress"


const Btn = () => {

    const[loading, setLoading] = useState(false);
    const[show,setShow] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleClick = () =>{
         setLoading(true);
         setProgress(0)
         barLoading();

         //loading data
         setTimeout(()=>{
            barLoading()
          setLoading(false);
          setShow(true);
         },3000)
     
    }

  //loading function
const barLoading = () => {
    const interval = setInterval(() => {
        if (progress < 100) {
            setProgress(prev => {
              if (prev >= 100) {
                clearInterval(interval);
                return 100;
              }
              return prev+ 1;
            });
          } else {
            clearInterval(interval);
          }
        }, 20);
  };
   
  
  return (
    <div className="btn">

    {!loading && !show && (
        <Button style={{ height: '50px', width: '250px' }} onClick={handleClick} >
       Get a link
     </Button>
      )}

      {/* Show 0 to 100 bar percentage */}

      {loading && <div className="progress">
          <Progress value={progress} style={{ height: '50px', width: '250px' }}  />
          <p>{`${progress}%`}</p> 
        </div> }

      {show && <a href="/">Here is your link</a>}
        
    </div>
  )
}

export default Btn

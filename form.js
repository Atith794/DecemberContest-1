import react,{useState} from 'react'
import style from '../style.css'
const Form = () => {

    const [email,setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confpass, setConfpass] = useState("")
    const [isMatching,setisMatching] = useState("false")

    function inputEmail(e){
        // const v = document.getElementById("email")
        setEmail(e.target.value)
        // console.log(e.target.value)
        // console.log(e.target.value)
        // if(e.target.value && v.validity.valid)
        // {
        //     v.classList.add('validEmail')
        // }
        // else
        // {
        //     v.classList.add('invalidEmail')
        // }

    }

    function inputPass(e){
        setPass(e.target.value)
      
    }

    function confirmPass(e){
        setConfpass(e.target.value)

    }

    function checkPass(){
        if(pass !== confpass || !email || !pass || pass.length<8)
        {
            alert("Unable to proceed")
        }
        else
        {
            setisMatching("true")
            alert("Form Submitted Successfully!")
        }
    }

    return(
        <div>
            {/* <h1>FORM</h1> */}
            <form className='form'>
                <label className='labell'>E-mail:</label>
                <br></br>
                <input className="email" type="email" name="E-mail" placeholder='E-mail' onChange={inputEmail} style={{borderColor:email===""?"red":"green"}}/>
                <br></br>
                <label className='labell'>Password:</label>
                <br></br>
                <input className="p" type="Password" name="Password" placeholder='Enter password' onChange={inputPass} style={{borderColor:pass.length<8?"red":"green"}}/>
                {pass.length<8?<h6 className='redclass'>Password must be at least 8 characters</h6>:<h6></h6>}
                <br></br>
                <label className='labell'>Confirm Password:</label>
                <br></br>
                <input className="cp" type="Password" name="Confirm-Password" placeholder='Confirm password' onChange={confirmPass} style={{borderColor:!isMatching||confpass===""?"red":"green"}}/>
                {pass!==confpass?<h6 className='redclass'>Passwords must match</h6>:<h6></h6>}
                <br></br>
                <button className="butto" onClick={checkPass}>Sign In</button>
            </form> 
            
        </div>
              
    )
}

export default Form
import React, { useState } from "react";

const HandleChange = () => {
    const [Name, setName] = useState();
    const handleChange = (event) => {
        setName(event.target.value);
        console.log("you can cick me");
    }
    return (
        <div>
            <h1>HandleChange</h1>
            <form>
                <input type="text" placeholder="Name" onChange={handleChange} value="Name" required /><br></br>
                <input type="pass" placeholder="password" onChange={handleChange} value="password" required />
                <button>clickme</button>
            </form>

        </div>
    )
}
export default HandleChange;



// ......handleChange() for multiple input elements change.....
// import React, { useState } from "react";
// const HandleChange = () =>{
//     const[Name,setName] = useState("");
//     const handleChange = (e)=>{
//        setName (e.target.value);
//         console.log("you can click me")
//     }
//     return(
//         <div>
//             <form>
//                 <input type="text"placeholder="EMail" onClick={handleChange} value="email" required></input>
//                 <input type="text"placeholder="Password" onClick={handleChange} value="password" required></input>
//                 <input type="text"placeholder="Name"onClick={handleChange}value="Name" required></input>
//                 <button onClick={handleChange}>clickme</button>
//             </form>
//         </div>
//     )
// }
// export default HandleChange;
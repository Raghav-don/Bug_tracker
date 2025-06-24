//User logged in or Not
//To manage user authentication state
//Passing value from one component to another is PROP

//here childeren is the prop
export const AuthProvider=({children})=>{
    //state
    const [user, setUser] = useState(()=>{

        const storedUser = localStorage.getItem('user');

    })
   //state is a value used within the component



}
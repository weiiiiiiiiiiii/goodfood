import Header from "../components/header";
import Footer from "../components/footer";
import Signin from "../components/Signin";


export default function SignIn(){
    return(
        <div> 
            <Header 
                title = "登入列表"
            />
            <Signin />
            <Footer />
        </div>

    )
}
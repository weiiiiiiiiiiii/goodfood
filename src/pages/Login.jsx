import { Helmet } from 'react-helmet-async'
import Header from '../components/header'
import LoginCard from '../components/LoginCard'
import Footer from '../components/footer'
import Ham from "../components/Ham";

function Login(){
    const title = "登好食";

    return(
        <div className="main-layout min-h-screen">
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header 
                    title={title}
                />
                <Ham />
                <LoginCard />
            </div>
            <Footer />
        </div>
    )


}

export default Login
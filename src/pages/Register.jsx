import { Helmet } from 'react-helmet-async'
import Header from '../components/header'
import RegisterCard from '../components/RegisterCard'
import Footer from '../components/footer'

function Register() {
    const title = "祝好食";
    return (
        <div className="main-layout min-h-screen">
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header
                    title={title}
                    slogan="The best place to buy your favorite products"
                />
                <RegisterCard />
            </div>
            <Footer className="footer" />
        </div>
    )

}

export default Register
import Breadcrumbs from "../Components/Breadcrumbs"
import RegisterForm from "../Components/RegisterForm"
import Logo from "../Assets/Images/logo.png"

function Register() {
    const BreadcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Register' },
    ]

    return (
        <div className="container">
            <Breadcrumbs paths={BreadcrumbPaths} />
            <h2 className="text-light mb-4">Register for the best of our offers!</h2>
            <div className="row">
                <div className="col-12 col-md-7 col-lg-6">
                    <RegisterForm />
                </div>
                <div className="col-12 col-md-5 col-lg-6 text-center">
                    <img className="img-fluid" style={{width: '400px'}} src={Logo} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Register;
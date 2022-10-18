import {FaGlobeAmericas} from "react-icons/fa"; 

function Footer() {
    return(
        <footer className="footer py-2 elegant-color">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left"></div>
                    <div className="col-lg-4 my-2 my-lg-0">
                        <p className="text-light"><FaGlobeAmericas/> -2021230433- <FaGlobeAmericas/></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
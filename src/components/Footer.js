import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa"; 
import {SiMicrosoftoutlook} from "react-icons/si";


function Footer() {
    return(
        <footer class="footer py-2 elegant-color">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left"></div>
                    <div class="col-lg-4 my-2 my-lg-0">
                        <a class="btn btn-light btn-social mx-3 shadow-lg" href="https://github.com/Menkoi" ><FaGithub/></a>
                        <a class="btn btn-light btn-social mx-3 shadow-lg" href="https://www.linkedin.com/in/brandon-burton-9b59a2215/"><FaLinkedin/></a>
                        <a class="btn btn-light btn-social mx-3 shadow-lg" href="mailto:celaeon@gmail.com"><SiMicrosoftoutlook/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
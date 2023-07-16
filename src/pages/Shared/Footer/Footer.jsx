import siteLogo from '../../../assets/logo/musicSchool.jpg'

const Footer = () => {
    return (
        <footer className='dark:bg-slate-900  dark:text-gray-100'>

            <div className="footer p-10 bg-base-200 text-base-content">
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={siteLogo} />
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Teaching Music</a>
                    <a className="link link-hover">Teaching Wind Instruments</a>
                    <a className="link link-hover">Prepared Student for music</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="p-4 bg-base-300  text-center text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
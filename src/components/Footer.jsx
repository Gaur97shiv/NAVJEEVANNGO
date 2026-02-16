import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-8">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://www.google.com/maps/dir//Surajpur+greater+noida,+UPSIDC+Site+B,+Surajpur,+Greater+Noida,+Uttar+Pradesh+201306/@28.5087962,77.4741959,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cebf131fe5fe1:0x3d4f0535468b140e!2m2!1d77.4906588!2d28.5076208?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>Khet no. 73 Surajpur, Greater Noida 201306</p></a>
                            <a href="tel:+91-7385223242"><p><i className="fa fa-phone"></i>+91-953681808</p></a>
                            <a href="mailto:navjeevannirmaansankalp@gmail.com">
    <p className="d-flex align-items-center mb-0">
        <i className="fa fa-envelope me-2"></i>
        navjeevannirmaansankalp@gmail.com
    </p>
</a>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <span>The Navjeevan Nirmaan Sankalp</span> | 2026, All Right Reserved.</p>

                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://www.linkedin.com/in/munendra-gaur-a4a7041b4/">Munendra Gaur</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}
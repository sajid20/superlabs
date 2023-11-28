
function Footer() {
    return (
        <footer className="bg-dark text-inverse">
            <div className="container pt-20 pt-lg-14 pb-7">
                <div className="row gy-6 gy-lg-0">
                    <div className="col-lg-4">
                        <div className="widget">
                            <img style={{ width: '60%' }} src="assets/img/whitelogo.png" alt />
                        </div>
                        {/* /.widget */}
                    </div>
                    {/* /column */}
                    <div className="col-md-4 col-lg-2 offset-lg-2">
                        <div className="widget">
                            <h4 style={{ color: '#fff' }} className="widget-title mb-3">SuperLabs Info</h4>
                            <ul className="list-unstyled text-reset mb-0">
                                <li><a href="corporate-information.php">Corporate Information</a></li>
                                <li><a href="careers.php">Careers</a></li>
                                <li><a href="https://docs.google.com/spreadsheets/d/1KC25nBveHRoF8tPLXIWsUipdD4RrmvEdkbOP0nJLOOQ/edit?usp=sharing" target="_blank">Open Roles</a></li>
                                <li><a href="contact-us.php">Contact</a></li>
                                <li><a href="check-list.php">CheckList</a></li>
                            </ul>
                        </div>
                        {/* /.widget */}
                    </div>
                    {/* /column */}
                    <div className="col-md-4 col-lg-2">
                        <div className="widget">
                            <h4 style={{ color: '#fff' }} className="widget-title mb-3">Employees</h4>
                            <ul className="list-unstyled  mb-0">
                                <li><a href="https://comm.superlabs.co/" target="_blank">SuperComm</a></li>
                                <li><a href="https://superlabs.co:2096/" target="_blank">SuperMail</a></li>
                                <li><a href="https://meet.google.com/uni-zeez-nzi" target="_blank">SuperMeet</a></li>
                            </ul>
                        </div>
                        {/* /.widget */}
                    </div>
                    {/* /column */}
                    <div className="col-md-4 col-lg-2">
                        <div className="widget">
                            <h4 style={{ color: '#fff' }} className="widget-title mb-3">Vendor Info</h4>
                            <ul className="list-unstyled  mb-0">
                                <li><a href="supplier-connection.php">Partner with Us</a></li>
                                <li><a href="#">Vendor Information</a></li>
                                <li><a href="#">Vendor Guide</a></li>
                            </ul>
                        </div>
                        {/* /.widget */}
                    </div>
                </div>
                {/*/.row */}
                <hr className="mt-13 mt-md-10 mb-7" />
                <div className="d-md-flex align-items-center justify-content-between">
                    <p className="mb-4"> Acta Non Verba.</p>
                    {/* 
<nav class="nav social social-white text-md-end">
<a href="https://twitter.com/superlabsindia" target="_blank"><i class="uil uil-twitter"></i></a>
<a href="https://www.facebook.com/superlabsindia" target="_blank"><i class="uil uil-facebook-f"></i></a>
<a href="https://dribbble.com/SuperLabs877" target="_blank"><i class="uil uil-dribbble"></i></a>
<a href="https://www.instagram.com/superlabsindia/" target="_blank"><i class="uil uil-instagram"></i></a>
<a href="https://github.com/SuperLabsOfficial" target="_blank"><i class="uil uil-github"></i></a>
<a href="https://www.linkedin.com/company/76198495/admin/" target="_blank"><i class="uil uil-linkedin"></i></a>
<a href="https://www.behance.net/superlabsindia" target="_blank"><i class="uil uil-behance"></i></a>
</nav>
*/}
                    {/* /.social */}
                </div>
                {/* /div */}
            </div>
            {/* /.container */}
        </footer>
    )
}

export default Footer;
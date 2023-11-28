
function Header() {
    return (
        <header className="wrapper bg-dark">
            <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-red header-transperant-2">
                <div className="container flex-lg-row flex-nowrap align-items-center">
                    <div className="navbar-brand w-100">
                        <a href="./index">
                            <img className="logo-dark" src="assets/img/logo-dark.png" srcSet="assets/img/logo-dark@2x.png 2x" alt="logo" />
                            <img className="logo-light" src="assets/img/logo-light.png" srcSet="assets/img/logo-light@2x.png 2x" alt="logo" />
                        </a>
                    </div>
                    <div className="navbar-collapse offcanvas-nav">
                        <div className="offcanvas-header d-lg-none d-xl-none">
                            <a href="./index"><img src="./assets/img/logo-light.png" srcSet="./assets/img/logo-light@2x.png 2x" alt="logo" /></a>
                            <button type="button" className="btn-close btn-close-white offcanvas-close offcanvas-nav-close" aria-label="Close" />
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a id="nav" className="nav-link " href="featured" target="_blank">Work</a> </li>
                            <li className="nav-item"><a className="nav-link " href="services">Services</a>
                                <ul className="dropdown-menu mega-menu">
                                    <li className="mega-menu-content">
                                        <div className="row gx-0 gx-lg-3">
                                            <div className="col-lg-4">
                                                <a href="resource-augmentation"><h6 className="dropdown-header">Resource Augmentation</h6></a>
                                                <ul className="list-unstyled cc-2 pb-lg-1">
                                                    <li><a className="dropdown-item" href="dotnet-developer.php">Dot Net Developer</a></li>
                                                    <li><a className="dropdown-item" href="full-stack-developer.php">Full Stack Developer</a></li>
                                                    <li><a className="dropdown-item" href="web-developer.php">Web Developer</a></li>
                                                    <li><a className="dropdown-item" href="angularjs-developer.php">AngularJS Developer </a></li>
                                                    <li><a className="dropdown-item" href="ios-developer.php">iOS Developer Developer </a></li>
                                                    <li><a className="dropdown-item" href="android-developer.php">Android Developer </a></li>
                                                    <li><a className="dropdown-item" href="java-developer.php">Java Developer</a></li>
                                                    <li><a className="dropdown-item" href="flutter-developer.php">Flutter Developer</a></li>
                                                    <li><a className="dropdown-item" href="nodejs-developer.php">NodeJS developer</a></li>
                                                    <li><a className="dropdown-item" href="javascript-developer.php">JavaScript Developer </a></li>
                                                    <li><a className="dropdown-item" href="app-developer.php">App Developer</a></li>
                                                    <li><a className="dropdown-item" href="machine-learning-developer.php">Machine Learning Developer </a></li>
                                                    <li><a className="dropdown-item" href="back-end-developer.php">Back End Developer </a></li>
                                                    <li><a className="dropdown-item" href="front-end-developer.php">Front End Developer</a></li>
                                                    <li><a className="dropdown-item" href="quality-assurance-specialist.php">Quality Assurance Developer</a></li>
                                                    <li><a className="dropdown-item" href="security-engineers.php">Security Engineers</a></li>
                                                </ul>
                                            </div>
                                            {/*/column */}
                                            <div className="col-lg-8">
                                                <a href="it-services"><h6 className="dropdown-header">IT Services</h6></a>
                                                <ul className="list-unstyled cc-3">
                                                    <li><a className="dropdown-item" href="cloud-infrastructure.php">Cloud Infrastructure</a></li>
                                                    <li><a className="dropdown-item" href="manchine-learning.php">Manchine Learning</a></li>
                                                    <li><a className="dropdown-item" href="enterprise-technology.php">Enterprise Technology</a></li>
                                                    <li><a className="dropdown-item" href="payments.php">Payments</a></li>
                                                    <li><a className="dropdown-item" href="security.php">Security</a></li>
                                                    <li><a className="dropdown-item" href="blockchain.php">Blockchain </a></li>
                                                    <li><a className="dropdown-item" href="application-development.php">Application Development </a></li>
                                                </ul>
                                                <br />
                                                <a href="engineering-services"><h6 className="dropdown-header">Engineering Services</h6></a>
                                                <ul className="list-unstyled cc-3">
                                                    <li><a className="dropdown-item" href="industrial-products.php">Industrial Products</a></li>
                                                    <li><a className="dropdown-item" href="machine-design.php">Machine Design</a></li>
                                                    <li><a className="dropdown-item" href="special-devices.php">Special Devices</a></li>
                                                    <li><a className="dropdown-item" href="technical.php">Technical Documentation </a></li>
                                                    <li><a className="dropdown-item" href="concept-visualizing.php">Consept Visualizing</a></li>
                                                    <li><a className="dropdown-item" href="mechanical-engineeing-prototyping.php">Mechanical Engineeing</a></li>
                                                    <li><a className="dropdown-item" href="mechanical-engineeing-prototyping.php">Prototyping</a></li>
                                                    <li><a className="dropdown-item" href="research-and-development.php">Research &amp; Development</a></li>
                                                </ul>
                                                <br />
                                                <a href="#"><h6 className="dropdown-header">Design</h6></a>
                                                <ul className="list-unstyled cc-3">
                                                    <li><a className="dropdown-item" href="visual-identity-design.php">Visual Identity</a></li>
                                                    <li><a className="dropdown-item" href="ux-and-ui-design.php">UX &amp; UI</a></li>
                                                </ul>
                                            </div>
                                            {/*/column */}
                                        </div>
                                        {/*/.row */}
                                    </li>
                                    {/*/.mega-menu-content*/}
                                </ul>
                                {/*/.dropdown-menu */}
                            </li>
                            <li hidden className="nav-item"><a hidden className="nav-link " href="./docs/index">Industries</a>
                                <ul className="dropdown-menu mega-menu">
                                    <li className="mega-menu-content">
                                        <div className="row gx-0 gx-lg-3">
                                            <div className="col-lg-12">
                                                <ul className="list-unstyled cc-3">
                                                    <li><a className="dropdown-item" href="./access_denied">Agricultre</a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Manufacturing</a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Retail</a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Real Estate</a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Entertainment </a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Education </a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">eCommerce </a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">On-Demand Services </a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Communication </a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Software and Platforms</a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Health</a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Travel</a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Automotive</a></li>
                                                    <li><a className="dropdown-item" href="./access_denied">Case Studies </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle " href="strategy.php">Strategy</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Operations</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="data-strategy.php"> Data Strategy</a></li>
                                            <li><a className="dropdown-item" href="organizational-design.php"> Organizational Design</a></li>
                                            <li><a className="dropdown-item" href="price-modeling.php">Price Modeling</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Business</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="new-digital.php">New Ventures</a></li>
                                            <li><a className="dropdown-item" href="cost-reduction.php">Cost Reduction</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Transformation</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="change-implementation.php">Change Implementation</a></li>
                                            <li><a className="dropdown-item" href="product-and-experience.php">Product Innovation</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item" href="intellectual-property.php">Intellectual Property</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link " href="careers.php">Careers</a> </li>
                            <li hidden className="nav-item"><a className="nav-link " href="https://io.superlabs.co" target="_blank" hidden>Insights</a> </li>
                        </ul>
                        {/* /.navbar-nav */}
                    </div>
                    {/* /.navbar-collapse */}
                    <div className="navbar-other w-10 d-flex ms-auto">
                        <ul className="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">
                            <li className="nav-item d-lg-none">
                                <div className="navbar-hamburger"><button className="hamburger animate plain" data-toggle="offcanvas-nav"><span /></button></div>
                            </li>
                        </ul>
                        {/* /.navbar-nav */}
                    </div>
                    {/* /.navbar-other */}
                </div>
                {/* /.container */}
            </nav>
            {/* /.navbar */}
        </header>
    )
}

export default Header;
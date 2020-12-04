import React from 'react';
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <div>
            <div class="main-wrapper">
                
                {/* <!-- Header --> */}
                <header class="header">
                    <nav class="navbar navbar-expand-lg header-nav">
                        <div class="navbar-header">
                            <a id="mobile_btn" href="javascript:void(0);">
                                <span class="bar-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </a>
                            <a href="index.html" class="navbar-brand logo" style={{ width:"135px"}}>
                                <img src={process.env.PUBLIC_URL + '/img/logo-icon.png'} class="img-fluid"  alt="Logo" / >
                            </a>
                            <a href="index.html" class="navbar-brand logo-small">
                                <img src={process.env.PUBLIC_URL + '/img/logo-icon.jpeg'} class="img-fluid" alt="Logo" />
                            </a>
                        </div>
                        <div class="main-menu-wrapper">
                            <div class="menu-header">
                                <a href="index.html" class="menu-logo">
                                    <img src={process.env.PUBLIC_URL + '/img/logo.png'} class="img-fluid" alt="Logo" />
                                </a>
                                <a id="menu_close" class="menu-close" href="javascript:void(0);"> <i class="fas fa-times"></i></a>
                            </div>
                            <ul class="main-nav">
                                <li class="active">
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="categories.html">About Us</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="provider-dashboard.html">Our Services</a>
                                    {/* <ul class="submenu">
                                        <li><a href="provider-dashboard.html">Dashboard</a></li>
                                        <li><a href="my-services.html">Services</a></li>
                                        <li><a href="provider-bookings.html">Bookings</a></li>
                                        <li><a href="provider-settings.html">Profile Settings</a></li>
                                        <li><a href="provider-wallet.html">Wallet</a></li>
                                        <li><a href="provider-subscription.html">Subscription</a></li>
                                        <li><a href="provider-availability.html">Availability</a></li>
                                        <li><a href="provider-reviews.html">Reviews</a></li>
                                        <li><a href="provider-payment.html">Payment</a></li>
                                    </ul> */}
                                </li>
                                <li class="has-submenu">
                                    <a href="user-dashboard.html">Gallery</a>
                                    {/* <ul class="submenu">
                                        <li><a href="user-dashboard.html">Dashboard</a></li>
                                        <li><a href="user-bookings.html">Bookings</a></li>
                                        <li><a href="user-settings.html">Profile Settings</a></li>
                                        <li><a href="user-wallet.html">Wallet</a></li>
                                        <li><a href="user-reviews.html">Reviews</a></li>
                                        <li><a href="user-payment.html">Payment</a></li>
                                    </ul> */}
                                </li>
                                <li class="has-submenu">
                                    <a href="#">Packages </a>
                                    {/* <i class="fas fa-chevron-down"></i> */}
                                    {/* <ul class="submenu">
                                        <li><a href="search.html">Search</a></li>
                                        <li><a href="service-details.html">Service Details</a></li>
                                        <li><a href="add-service.html">Add Service</a></li>
                                        <li><a href="edit-service.html">Edit Service</a></li>
                                        <li><a href="chat.html">Chat</a></li>
                                        <li><a href="notifications.html">Notifications</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="faq.html">Faq</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul> */}
                                </li>
                                <li>
                                    <a href="admin/index.html" target="_blank">How It Works</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#provider-register">Genral Trading</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#user-register">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        {/* <ul class="nav header-navbar-rht">
                            <li class="nav-item">
                                <a class="nav-link header-login" href="javascript:void(0);" data-toggle="modal" data-target="#login_modal">Login</a>
                            </li>
                        </ul> */}
                    </nav>
                </header>
                {/* <!-- /Header --> */}
                
                {/* <!-- Breadcrumb --> */}
                <div class="breadcrumb-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="breadcrumb-title">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                            <div class="col-auto float-right ml-auto breadcrumb-menu">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Breadcrumb --> */}
                
                <section class="about-us">
                    <div class="content">
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <div class="about-blk-content">
                                        <h4>Experienced and Reliable</h4>
                                        <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</p>
                                        <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="about-blk-image">
                                        <img src="assets/img/about.jpg" class="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="call-us">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <span>Free Consultation</span>
                                <h2>Ready to start your dream project?</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Nunc placerat mi id nisi interdum mollis</p>
                            </div>
                            <div class="col-6 call-us-btn">
                                <a href="javascript:void(0);" class="btn btn-call-us">Request A Free Consultation</a>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <!-- How It Works --> */}
                <section class="how-work">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="heading howitworks">
                                    <h2>How It Works</h2>
                                    <span>Aliquam lorem ante, dapibus in, viverra quis</span>
                                </div>
                                <div class="howworksec">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="howwork">
                                                <div class="iconround">
                                                    <div class="steps">01</div>
                                                    <img src={process.env.PUBLIC_URL + '/img/icon-1.png'} alt="" />
                                                </div>
                                                <h3>Choose What To Do</h3>
                                                <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="howwork">
                                                <div class="iconround">
                                                    <div class="steps">02</div>
                                                    <img src={process.env.PUBLIC_URL + '/img/icon-2.png'} alt="" />
                                                </div>
                                                <h3>Find What You Want</h3>
                                                <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="howwork">
                                                <div class="iconround">
                                                    <div class="steps">03</div>
                                                    <img src={process.env.PUBLIC_URL + '/img/icon-3.png'} alt="" />
                                                </div>
                                                <h3>Amazing Places</h3>
                                                <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /How It Works --> */}
                
                {/* <!-- Footer --> */}
                <footer class="footer">
                
                    {/* <!-- Footer Top --> */}
                    <div class="footer-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-6">
                                    {/* <!-- Footer Widget --> */}
                                    <div class="footer-widget footer-menu">
                                        <h2 class="footer-title">Quick Links  </h2>
                                        <ul>
                                            <li>
                                                <a href="about-us.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="contact-us.html">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">Faq</a>
                                            </li>
                                            <li>
                                                <a href="#">Help</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- /Footer Widget --> */}
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    {/* <!-- Footer Widget --> */}
                                    <div class="footer-widget footer-menu">
                                        <h2 class="footer-title">Categories</h2>
                                        <ul>
                                            <li>
                                                <a href="search.html">Computer</a>
                                            </li>
                                            <li>
                                                <a href="search.html">Interior</a>
                                            </li>
                                            <li>
                                                <a href="search.html">Car Wash</a>
                                            </li>
                                            <li>
                                                <a href="search.html">Cleaning</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- /Footer Widget --> */}
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    {/* <!-- Footer Widget --> */}
                                    <div class="footer-widget footer-contact">
                                        <h2 class="footer-title">Contact Us</h2>
                                        <div class="footer-contact-info">
                                            <div class="footer-address">
                                                <span><i class="far fa-building"></i></span>
                                                <p>367 Hillcrest Lane, Irvine, California, United States</p>
                                            </div>
                                            <p><i class="fas fa-headphones"></i> 321 546 8764</p>
                                            <p class="mb-0"><i class="fas fa-envelope"></i> truelysell@example.com</p>
                                        </div>
                                    </div>
                                    {/* <!-- /Footer Widget --> */}
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    {/* <!-- Footer Widget --> */}
                                    <div class="footer-widget">
                                        <h2 class="footer-title">Follow Us</h2>
                                        <div class="social-icon">
                                            <ul>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-twitter"></i> </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-google"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="subscribe-form">
                                            <input type="email" class="form-control" placeholder="Enter your email" />
                                            <button type="submit" class="btn footer-btn">
                                                <i class="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {/* <!-- /Footer Widget --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Footer Top --> */}
                    
                    {/* <!-- Footer Bottom --> */}
                    <div class="footer-bottom">
                        <div class="container">
                            {/* <!-- Copyright --> */}
                            <div class="copyright">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6">
                                        <div class="copyright-text">
                                            <p class="mb-0">&copy; 2020 <a href="index.html">Truelysell</a>. All rights reserved.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        {/* <!-- Copyright Menu --> */}
                                        <div class="copyright-menu">
                                            <ul class="policy-menu">
                                                <li>
                                                    <a href="term-condition.html">Terms and Conditions</a>
                                                </li>
                                                <li>
                                                    <a href="privacy-policy.html">Privacy</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- /Copyright Menu --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Copyright --> */}
                        </div>
                    </div>
                    {/* <!-- /Footer Bottom --> */}
                    
                </footer>
                {/* <!-- /Footer --> */}
                
            </div>

                {/* <!-- Provider Register Modal --> */}
                <div class="modal account-modal fade multi-step" id="provider-register" data-keyboard="false" data-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header p-0 border-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="login-header">
                                    <h3>Join as a Provider</h3>
                                </div>
                                
                                {/* <!-- Register Form --> */}
                                <form action="https://truelysell-html.dreamguystech.com/template/index.html">
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Name</label>
                                        <input type="text" class="form-control" placeholder="johndoe@exapmle.com" />
                                    </div>
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Mobile Number</label>
                                        <input type="text" class="form-control" placeholder="986 452 1236" />
                                    </div>
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Create Password</label>
                                        <input type="password" class="form-control" placeholder="********" />
                                    </div>
                                    <div class="text-right">
                                        <a class="forgot-link" href="#">Already have an account?</a>
                                    </div>
                                    <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
                                    <div class="login-or">
                                        <span class="or-line"></span>
                                        <span class="span-or">or</span>
                                    </div>
                                    <div class="row form-row social-login">
                                        <div class="col-6">
                                            <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
                                        </div>
                                        <div class="col-6">
                                            <a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- /Register Form --> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Provider Register Modal --> */}

                {/* <!-- User Register Modal --> */}
                <div class="modal account-modal fade multi-step" id="user-register" data-keyboard="false" data-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header p-0 border-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="login-header">
                                    <h3>Join as a User</h3>
                                </div>
                                
                                {/* <!-- Register Form --> */}
                                <form action="https://truelysell-html.dreamguystech.com/template/index.html">
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Name</label>
                                        <input type="text" class="form-control" placeholder="johndoe@exapmle.com" />
                                    </div>
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Mobile Number</label>
                                        <input type="text" class="form-control" placeholder="986 452 1236" />
                                    </div>
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Create Password</label>
                                        <input type="password" class="form-control" placeholder="********" />
                                    </div>
                                    <div class="text-right">
                                        <a class="forgot-link" href="#">Already have an account?</a>
                                    </div>
                                    <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
                                    <div class="login-or">
                                        <span class="or-line"></span>
                                        <span class="span-or">or</span>
                                    </div>
                                    <div class="row form-row social-login">
                                        <div class="col-6">
                                            <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
                                        </div>
                                        <div class="col-6">
                                            <a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- /Register Form --> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /User Register Modal --> */}

                {/* <!-- Login Modal --> */}
                <div class="modal account-modal fade" id="login_modal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header p-0 border-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">	<span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="login-header">
                                    <h3>Login <span>Truelysell</span></h3>
                                </div>
                                <form action="https://truelysell-html.dreamguystech.com/template/index.html">
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Email</label>
                                        <input type="email" class="form-control" placeholder="truelysell@example.com" />
                                    </div>
                                    <div class="form-group form-focus">
                                        <label class="focus-label">Password</label>
                                        <input type="password" class="form-control" placeholder="********" />
                                    </div>
                                    <div class="text-right">	
                                    </div>
                                    <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                                    <div class="login-or">	<span class="or-line"></span>
                                        <span class="span-or">or</span>
                                    </div>
                                    <div class="row form-row social-login">
                                        <div class="col-6">	<a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
                                        </div>
                                        <div class="col-6">	<a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
                                        </div>
                                    </div>
                                    <div class="text-center dont-have">Don’t have an account? <a href="#">Register</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Login Modal --> */}

                {/* <!-- jQuery --> */}
                <script src="assets/js/jquery-3.5.0.min.js"></script>

                {/* <!-- Bootstrap Core JS --> */}
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>


                {/* <!-- Custom JS --> */}
                <script src="assets/js/script.js"></script>
        </div>
    );
}

export default AboutUs;

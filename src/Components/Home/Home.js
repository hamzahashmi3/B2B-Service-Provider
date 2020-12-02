import React from 'react';

function Home() {
    return (
        <div>
            	{/* <!-- Loader --> */}
	{/* <div class="page-loading">
		<div class="preloader-inner">
			<div class="preloader-square-swapping">
				<div class="cssload-square-part cssload-square-green"></div>
				<div class="cssload-square-part cssload-square-pink"></div>
				<div class="cssload-square-blend"></div>
			</div>
		</div>
	</div> */}
	{/* <!-- /Loader --> */}
	
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
		
		{/* <!-- Hero Section --> */}
		<section class="hero-section"style={{marginTop:"85px"}}>
			<div class="layer">
				<div class="home-banner"></div>
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-12" style={{marginBottom:"115px"}}>
							<div class="section-search">
								<h3>Pakistan's Largest <span>Service Providers</span></h3>
								<p>You just make a call, we fix it all!</p>
								{/* <div class="search-box">
									<form action="https://truelysell-html.dreamguystech.com/template/search.html"> 
										<div class="search-input line">
											<i class="fas fa-tv bficon"></i>
											<div class="form-group mb-0">
												<input type="text" class="form-control" placeholder="What are you looking for?" />
											</div>
										</div>
										<div class="search-input">
											<i class="fas fa-location-arrow bficon"></i>
											<div class="form-group mb-0">
												<input type="text" class="form-control" placeholder="Your Location" /> 
												<a class="current-loc-icon current_location" href="javascript:void(0);"><i class="fas fa-crosshairs"></i></a>
											</div>
										</div>
										<div class="search-btn">
											<button class="btn search_service" type="submit">Search</button>
										</div>
									</form>
								</div> */}
								<div class="search-cat">
									<i class="fas fa-circle"></i>
									<span>Popular Searches</span>
									<a href="search.html">Electrical  Works</a>
									<a href="search.html">Cleaning</a>
									<a href="search.html">AC Repair</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /Hero Section --> */}
		
		{/* <!-- Category Section --> */}
		<section class="category-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="row">
							<div class="col-md-6">
								<div class="heading">
									<h2>Featured Categories</h2>
									<span>What do you need to find?</span>
								</div>
							</div>
							<div class="col-md-6">
								<div class="viewall">
									<h4><a href="categories.html">View All <i class="fas fa-angle-right"></i></a></h4>
									<span>Featured Categories</span>
								</div>
							</div>
						</div>
						<div class="catsec">
							<div class="row">
								<div class="col-lg-4 col-md-6">
									<a href="search.html">
										<div class="cate-widget">
											<img src={process.env.PUBLIC_URL + '/img/category/category-01.jpg'} alt="" />
											<div class="cate-title">
												<h3><span><i class="fas fa-circle"></i> Computer</span></h3>
											</div>
											<div class="cate-count">
												<i class="fas fa-clone"></i> 21
											</div>
										</div>
									</a>
								</div>
								<div class="col-lg-4 col-md-6">
									<a href="search.html">
										<div class="cate-widget">
											<img src={process.env.PUBLIC_URL + '/img/category/category-02.jpg'} alt="" />
											<div class="cate-title">
												<h3><span><i class="fas fa-circle"></i> Interior</span></h3>
											</div>
											<div class="cate-count">
												<i class="fas fa-clone"></i> 15
											</div>
										</div>
									</a>
								</div>
								<div class="col-lg-4 col-md-6">
									<a href="search.html">
										<div class="cate-widget">
											<img src={process.env.PUBLIC_URL + '/img/category/category-03.jpg'} alt="" />
											<div class="cate-title">
												<h3><span><i class="fas fa-circle"></i> Car Wash</span></h3>
											</div>
											<div class="cate-count">
												<i class="fas fa-clone"></i> 15
											</div>
										</div>
									</a>
								</div>
								<div class="col-lg-4 col-md-6">
									<a href="search.html">
										<div class="cate-widget">
											<img src={process.env.PUBLIC_URL + '/img/category/category-04.jpg'} alt="" />
											<div class="cate-title">
												<h3><span><i class="fas fa-circle"></i> Cleaning</span></h3>
											</div>
											<div class="cate-count">
												<i class="fas fa-clone"></i> 14
											</div>
										</div>
									</a>
								</div>
								<div class="col-lg-4 col-md-6">
									<a href="search.html">
										<div class="cate-widget">
											<img src={process.env.PUBLIC_URL + '/img/category/category-05.jpg'} alt="" />
											<div class="cate-title">
												<h3><span><i class="fas fa-circle"></i> Electrical</span></h3>
											</div>
											<div class="cate-count">
												<i class="fas fa-clone"></i> 10
											</div>
										</div>
									</a>
								</div>
								<div class="col-lg-4 col-md-6">
									<a href="search.html">
										<div class="cate-widget">
											<img src={process.env.PUBLIC_URL + '/img/category/category-06.jpg'} alt="" />
											<div class="cate-title">
												<h3><span><i class="fas fa-circle"></i> Construction</span></h3>
											</div>
											<div class="cate-count">
												<i class="fas fa-clone"></i> 8
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /Category Section --> */}
		
		{/* <!-- Popular Servides --> */}
		<section class="popular-services">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="row">
							<div class="col-md-6">
								<div class="heading">
									<h2>Most Popular Services</h2>
									<span>Explore the greates our services. You won’t be disappointed</span>
								</div>
							</div>
							<div class="col-md-6">
								<div class="viewall">
									<h4><a href="categories.html">View All <i class="fas fa-angle-right"></i></a></h4>
									<span>Most Popular</span>
								</div>
							</div>
						</div>
						<div class="service-carousel">
							<div class="service-slider owl-carousel owl-theme">
							
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-01.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-01.jpg'} alt="" />
												</a>	
												<span class="service-price">$25</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Cleaning</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Toughened Glass Fitting Services</a>
										</h3>
										<div class="rating">	
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>		
											<span class="d-inline-block average-rating">(4.3)</span>
										</div>
										<div class="user-info">
											<div class="row">	
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> 
													<span>xxxxxxxx49</span>
												</span>
												<span class="col ser-location">
													<span>Wayne, New Jersey</span> <i class="fas fa-map-marker-alt ml-1"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-02.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-02.jpg'} alt="" />
												</a>
												<span class="service-price">$50</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Automobile</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Car Repair Services</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<span class="d-inline-block average-rating">(5)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx85</span></span>
												<span class="col ser-location"><span>Hanover, Maryland</span>  <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-03.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-03.jpg'} alt="" />
												</a>
												<span class="service-price">$45</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Electrical</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Electric Panel Repairing Service</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(4.5)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx30</span></span>
												<span class="col ser-location"><span>Kalispell, Montana</span>  <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-04.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-04.jpg'} alt="" />
												</a>
												<span class="service-price">$14</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Car Wash</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Steam Car Wash</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(0)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx74</span></span>
												<span class="col ser-location"><span>Electra, Texas</span>  <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-05.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-05.jpg'} alt="" />
												</a>
												<span class="service-price">$100</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Cleaning</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">House Cleaning Services</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(0)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx91</span></span>
												<span class="col ser-location"><span>Sylvester, Georgia</span>  <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-06.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-06.jpg'} alt="" />
												</a>
												<span class="service-price">$80</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Computer</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Computer & Server AMC Service</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(0)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx92</span></span>
												<span class="col ser-location"><span>Los Angeles, California</span>  <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-07.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-07.jpg'} alt="" />
												</a>
												<span class="service-price">$5</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Interior</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Interior Designing</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(4)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx28</span></span>
												<span class="col ser-location"><span>Hanover, Maryland</span>  <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-08.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-08.jpg'} alt="" />
												</a>
												<span class="service-price">$75</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Construction</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Building Construction Services</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(4)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx62</span></span>
												<span class="col ser-location"><span>Burr Ridge, Illinois</span>  <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-09.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-09.jpg'} alt="" />
												</a>
												<span class="service-price">$500</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Painting</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Commercial Painting Services</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(3)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx75</span></span>	
												<span class="col ser-location"><span>Huntsville, Alabama</span>  <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
								<div class="service-widget">
									<div class="service-img">
										<a href="service-details.html">
											<img class="img-fluid serv-img" alt="Service Image" src="assets/img/services/service-10.jpg" />
										</a>
										<div class="item-info">
											<div class="service-user">
												<a href="#">
													<img src={process.env.PUBLIC_URL + '/img/customer/user-10.jpg'} alt="" />
												</a>
												<span class="service-price">$150</span>
											</div>
											<div class="cate-list">
												<a class="bg-yellow" href="service-details.html">Plumbing</a>
											</div>
										</div>
									</div>
									<div class="service-content">
										<h3 class="title">
											<a href="service-details.html">Plumbing Services</a>
										</h3>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(3)</span>
										</div>
										<div class="user-info">
											<div class="row">
												<span class="col-auto ser-contact"><i class="fas fa-phone mr-1"></i> <span>xxxxxxxx13</span></span>
												<span class="col ser-location"><span>Richmond, Virginia</span> <i class="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /Popular Servides --> */}
		
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

	{/* <!-- Owl JS --> */}
	<script src="assets/plugins/owlcarousel/owl.carousel.min.js"></script>

	{/* <!-- Custom JS --> */}
	<script src="assets/js/script.js"></script>
        </div>
    )
}

export default Home;
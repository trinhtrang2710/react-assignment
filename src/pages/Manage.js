import React from 'react';
import NavBar from "../components/NavBar";
import avt from "../assets/images/avt.jpg";


function Manage() {
  return (
    <div className="inner-wrapper">
      <NavBar/>
      <section role="main" className="content-body">
					<header className="page-header">
						<h2>Employee Profile</h2>
					
						<div className="right-wrapper pull-right">
							<ol className="breadcrumbs">
								<li>
									<a href="/detail">
										<i className="fa fa-home"></i>
									</a>
								</li>
								<li><span>Pages</span></li>
								<li><span>User Profile</span></li>
							</ol>
					
							<a className="sidebar-right-toggle" data-open="sidebar-right"><i className="fa fa-chevron-left"></i></a>
						</div>
					</header>

					

					<div className="row">
						<div className="col-md-4 col-lg-3">

							<section className="panel">
								<div className="panel-body">
									<div className="thumb-info mb-md">
										<img src="assets/images/!logged-user.jpg" className="rounded img-responsive" alt="John Doe"/>
										<div className="thumb-info-title">
											<span className="thumb-info-inner">John Doe</span>
											<span className="thumb-info-type">CEO</span>
										</div>
									</div>
									<div className="widget-toggle-expand mb-md">
										<div className="widget-header">
											<h6>Profile Completion</h6>
											<div className="widget-toggle">+</div>
										</div>
										<div className="widget-content-collapsed">
											<div className="progress progress-xs light">
												<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
													60%
												</div>
											</div>
										</div>
										<div className="widget-content-expanded">
											<ul className="simple-todo-list">
												<li className="completed">Update Profile Picture</li>
												<li className="completed">Change Personal Information</li>
												<li>Update Social Media</li>
												<li>Follow Someone</li>
											</ul>
										</div>
									</div>

									<hr className="dotted short"/>

									<h6 className="text-muted">About</h6>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis vulputate quam. Interdum et malesuada</p>
									<div className="clearfix">
										<a className="text-uppercase text-muted pull-right" href="/employee">(View All)</a>
									</div>

									<hr className="dotted short"/>

									<div className="social-icons-list">
										<a rel="tooltip" data-placement="bottom" href="http://www.facebook.com" data-original-title="Facebook"><i className="fa fa-facebook"></i><span>Facebook</span></a>
										<a rel="tooltip" data-placement="bottom" href="http://www.twitter.com" data-original-title="Twitter"><i className="fa fa-twitter"></i><span>Twitter</span></a>
										<a rel="tooltip" data-placement="bottom" href="http://www.linkedin.com" data-original-title="Linkedin"><i className="fa fa-linkedin"></i><span>Linkedin</span></a>
									</div>

								</div>
							</section>
						</div>
						<div className="col-md-8 col-lg-6">

							<div className="tabs">
								<ul className="nav nav-tabs tabs-primary">
									<li className="active">
										<a href="#overview" data-toggle="tab">Overview</a>
									</li>
									<li>
										<a href="#edit" data-toggle="tab">Edit</a>
									</li>
								</ul>
								<div className="tab-content">
									<div id="overview" className="tab-pane active">
                    <h4 className="mb-xlg">Timeline</h4>
                    <div className="timeline timeline-simple mt-xlg mb-md">
											<div className="tm-body">
												<div className="tm-title">
													<h3 className="h5 text-uppercase">November 2013</h3>
												</div>
												<ol className="tm-items">
													<li>
														<div className="tm-box">
															<p className="text-muted mb-none">7 months ago.</p>
															<p>
																It's awesome when we find a good solution for our projects, Porto Admin is <span className="text-primary">#awesome</span>
															</p>
														</div>
													</li>
													<li>
														<div className="tm-box">
															<p className="text-muted mb-none">7 months ago.</p>
															<p>
																What is your biggest developer pain point?
															</p>
														</div>
													</li>
													<li>
														<div className="tm-box">
															<p className="text-muted mb-none">7 months ago.</p>
															<p>
																Checkout! How cool is that!
															</p>
															<div className="thumbnail-gallery">
																<a className="img-thumbnail lightbox" alt="hi" href="assets/images/projects/project-4.jpg" data-plugin-options='{ "type":"image" }'>
																	<img className="img-responsive" alt='hi' width="215" src={avt}/>
																	<span className="zoom">
																		<i className="fa fa-search"></i>
																	</span>
																</a>
															</div>
														</div>
													</li>
												</ol>
											</div>
										</div>
									</div>
									<div id="edit" className="tab-pane">

										<form className="form-horizontal" method="get">
											<h4 className="mb-xlg">Personal Information</h4>
											<fieldset>
												<div className="form-group">
													<label className="col-md-3 control-label" for="profileFirstName">First Name</label>
													<div className="col-md-8">
														<input type="text" className="form-control" id="profileFirstName"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-md-3 control-label" for="profileLastName">Last Name</label>
													<div className="col-md-8">
														<input type="text" className="form-control" id="profileLastName"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-md-3 control-label" for="profileAddress">Address</label>
													<div className="col-md-8">
														<input type="text" className="form-control" id="profileAddress"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-md-3 control-label" for="profileCompany">Company</label>
													<div className="col-md-8">
														<input type="text" className="form-control" id="profileCompany"/>
													</div>
												</div>
											</fieldset>
											<hr className="dotted tall"/>
											<h4 className="mb-xlg">About Yourself</h4>
											<fieldset>
												<div className="form-group">
													<label className="col-md-3 control-label" for="profileBio">Biographical Info</label>
													<div className="col-md-8">
														<textarea className="form-control" rows="3" id="profileBio"></textarea>
													</div>
												</div>
												<div className="form-group">
													<label className="col-xs-3 control-label mt-xs pt-none">Public</label>
													<div className="col-md-8">
														<div className="checkbox-custom checkbox-default checkbox-inline mt-xs">
															<input type="checkbox" checked="" id="profilePublic"/>
															<label for="profilePublic"></label>
														</div>
													</div>
												</div>
											</fieldset>
											<hr className="dotted tall"/>
											<h4 className="mb-xlg">Change Password</h4>
											<fieldset className="mb-xl">
												<div className="form-group">
													<label className="col-md-3 control-label" for="profileNewPassword">New Password</label>
													<div className="col-md-8">
														<input type="text" className="form-control" id="profileNewPassword"/>
													</div>
												</div>
												<div className="form-group">
													<label className="col-md-3 control-label" for="profileNewPasswordRepeat">Repeat New Password</label>
													<div className="col-md-8">
														<input type="text" className="form-control" id="profileNewPasswordRepeat"/>
													</div>
												</div>
											</fieldset>
											<div className="panel-footer">
												<div className="row">
													<div className="col-md-9 col-md-offset-3">
														<button type="submit" className="btn btn-primary">Submit</button>
														<button type="reset" className="btn btn-default">Reset</button>
													</div>
												</div>
											</div>

										</form>

									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12 col-lg-3">

							<h4 className="mb-md">Projects</h4>
							<ul className="simple-bullet-list mb-xlg">
								<li className="red">
									<span className="title">Porto Template</span>
									<span className="description truncate">Lorem ipsom dolor sit.</span>
								</li>
								<li className="green">
									<span className="title">Tucson HTML5 Template</span>
									<span className="description truncate">Lorem ipsom dolor sit amet</span>
								</li>
								<li className="blue">
									<span className="title">Porto HTML5 Template</span>
									<span className="description truncate">Lorem ipsom dolor sit.</span>
								</li>
								<li className="orange">
									<span className="title">Tucson Template</span>
									<span className="description truncate">Lorem ipsom dolor sit.</span>
								</li>
							</ul>
						</div>

					</div>
				</section>
      
    </div>
  )
}

export default Manage;

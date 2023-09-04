import React from "react";
import avt from "../assets/images/avt.jpg"
import loggedUser from "../assets/images/logged-user.jpg"
import NavBar from "../components/NavBar";


function Home (){
  return (
    <div> 
      <div className="inner-wrapper">
        <NavBar/>
          <section role="main" className="content-body">
            <header className="page-header">
              <h2>Dashboard</h2>
              <div className="right-wrapper pull-right">
                <ol className="breadcrumbs">
                  <li>
                    <a href="/">
                      <i className="fa fa-home"></i>
                    </a>
                  </li>
                  <li>
                    <span>Dashboard</span>
                  </li>
                </ol>
              </div>
            </header>

            <h3>Hi ! This is my assignment. </h3>

            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <section className="panel panel-transparent">
                  <header className="panel-heading">
                    <h2 className="panel-title">My Profile</h2>
                  </header>
                  <div className="panel-body">
                    <section className="panel panel-group">
                      <header className="panel-heading bg-primary">
                        <div className="widget-profile-info">
                          <div className="profile-picture">
                            <img alt="This is avt" src={loggedUser} />
                          </div>
                          <div className="profile-info">
                            <h4 className="name text-semibold">Trinh Thu Trang</h4>
                            <h5 className="role">Administrator</h5>
                            <div className="profile-footer">
                              <a href="/edit">(edit profile)</a>
                            </div>
                          </div>
                        </div>
                      </header>
                      <div id="accordion">
                        <div className="panel panel-accordion panel-accordion-first">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a
                                className="accordion-toggle"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapse1One"
                              >
                                <i className="fa fa-check"></i> Tasks
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapse1One"
                            className="accordion-body collapse in"
                          >
                            <div className="panel-body">
                              <ul className="widget-todo-list">
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      checked=""
                                      id="todoListItem1"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      for="todoListItem1"
                                    >
                                      <span>Convert HTML template</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="/remove">
                                      <i className="fa fa-times"></i>
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      id="todoListItem5"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      for="todoListItem5"
                                    >
                                      <span>Develop a list page which contains a table employee</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="/remove">
                                      <i className="fa fa-times"></i>
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      id="todoListItem6"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      for="todoListItem6"
                                    >
                                      <span>Develop a form to allow enter new employee</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="/">
                                      <i className="fa fa-times"></i>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                              <hr className="solid mt-sm mb-lg" />
                              <form
                                method="get"
                                className="form-horizontal form-bordered"
                              >
                                <div className="form-group">
                                  <div className="col-sm-12">
                                    <div className="input-group mb-md">
                                      <input
                                        type="text"
                                        className="form-control"
                                      />
                                      <div className="input-group-btn">
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                          tabindex="-1"
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-accordion">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a
                                className="accordion-toggle"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapse1Two"
                              >
                                <i className="fa fa-comment"></i> Messages
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapse1Two"
                            className="accordion-body collapse"
                          >
                            <div className="panel-body">
                              <ul className="simple-user-list mb-xlg">
                                <li>
                                  <figure className="image rounded">
                                    <img
                                      src={avt}
                                      alt="Joseph Doe Junior"
                                      className="img-circle"
                                    />
                                  </figure>
                                  <span className="title">
                                    Joseph Doe Junior
                                  </span>
                                  <span className="message">
                                    Lorem ipsum dolor sit.
                                  </span>
                                </li>
                                <li>
                                  <figure className="image rounded">
                                    <img
                                      src={avt}
                                      alt="Joseph Junior"
                                      className="img-circle"
                                    />
                                  </figure>
                                  <span className="title">Joseph Junior</span>
                                  <span className="message">
                                    Lorem ipsum dolor sit.
                                  </span>
                                </li>
                                <li>
                                  <figure className="image rounded">
                                    <img
                                      src={avt}
                                      alt="Joe Junior"
                                      className="img-circle"
                                    />
                                  </figure>
                                  <span className="title">Joe Junior</span>
                                  <span className="message">
                                    Lorem ipsum dolor sit.
                                  </span>
                                </li>
                                <li>
                                  <figure className="image rounded">
                                    <img
                                      src={avt}
                                      alt="Joseph Doe Junior"
                                      className="img-circle"
                                    />
                                  </figure>
                                  <span className="title">
                                    Joseph Doe Junior
                                  </span>
                                  <span className="message">
                                    Lorem ipsum dolor sit.
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
              <div className="col-xl-3 col-lg-6">
                <section className="panel panel-transparent">
                  <header className="panel-heading">
                    <h2 className="panel-title">My Stats</h2>
                  </header>
                  <div className="panel-body">
                    <section className="panel">
                      <div className="panel-body">
                        <div
                          className="small-chart pull-right"
                          id="sparklineBarDash"
                        ></div>
                        <div className="h4 text-bold mb-none">488</div>
                        <p className="text-xs text-muted mb-none">
                          Average Profile Visits
                        </p>
                      </div>
                    </section>
                    <section className="panel">
                      <div className="panel-body">
                        <div className="circular-bar circular-bar-xs m-none mt-xs mr-md pull-right">
                          <div
                            className="circular-bar-chart"
                            data-percent="45"
                            data-plugin-options='{ "barColor": "#2baab1", "delay": 300, "size": 50, "lineWidth": 4 }'
                          >
                            <strong>Average</strong>
                            <label>
                              <span className="percent">45</span>%
                            </label>
                          </div>
                        </div>
                        <div className="h4 text-bold mb-none">12</div>
                        <p className="text-xs text-muted mb-none">
                          Working Projects
                        </p>
                      </div>
                    </section>
                    <section className="panel">
                      <div className="panel-body">
                        <div
                          className="small-chart pull-right"
                          id="sparklineLineDash"
                        ></div>
                        <script type="text/javascript">
                          var sparklineLineDashData = [15, 16, 17, 19, 10, 15,
                          13, 12, 12, 14, 16, 17];
                        </script>
                        <div className="h4 text-bold mb-none">89</div>
                        <p className="text-xs text-muted mb-none">
                          Pending Tasks
                        </p>
                      </div>
                    </section>
                  </div>
                </section>
                <section className="panel">
                  <header className="panel-heading">
                    <h2 className="panel-title">
                      <span className="label label-primary label-sm text-normal va-middle mr-sm">
                        198
                      </span>
                      <span className="va-middle">Friends</span>
                    </h2>
                  </header>
                  <div className="panel-body">
                    <div className="content">
                      <ul className="simple-user-list">
                        <li>
                          <figure className="image rounded">
                            <img
                              src={avt}
                              alt="Joseph Doe Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joseph Doe Junior</span>
                          <span className="message truncate">
                            Lorem ipsum dolor sit.
                          </span>
                        </li>
                        <li>
                          <figure className="image rounded">
                            <img
                              src={avt}
                              alt="Joseph Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joseph Junior</span>
                          <span className="message truncate">
                            Lorem ipsum dolor sit.
                          </span>
                        </li>
                        <li>
                          <figure className="image rounded">
                            <img
                              src={avt}
                              alt="Joe Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joe Junior</span>
                          <span className="message truncate">
                            Lorem ipsum dolor sit.
                          </span>
                        </li>
                      </ul>
                      <hr className="dotted short" />
                      <div className="text-right">
                        <a className="text-uppercase text-muted" href="/">
                          (View All)
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <div className="input-group input-search">
                      <input
                        type="text"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="Search..."
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-xl-6 col-lg-12">
                <section className="panel">
                  <header className="panel-heading panel-heading-transparent">
                  </header>
                  
                </section>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
};

export default Home;
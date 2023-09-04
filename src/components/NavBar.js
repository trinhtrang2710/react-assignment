import React from 'react';

export default function NavBar() {
  return (
    <div className='d-content'>
      <aside id="sidebar-left" className="sidebar-left">
            <div className="sidebar-header">
              <div className="sidebar-title">Navigation</div>
              <div
                className="sidebar-toggle hidden-xs"
                data-toggle-class="sidebar-left-collapsed"
                data-target="html"
                data-fire-event="sidebar-left-toggle"
              >
                <i className="fa fa-bars" aria-label="Toggle sidebar"></i>
              </div>
            </div>

            <div className="nano">
              <div className="nano-content">
                <nav id="menu" className="nav-main" role="navigation">
                  <ul className="nav nav-main">
                    <li className="nav-active">
                      <a href="/">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li className="nav-parent">
                      <a href="/employee">
                        <i className="fa fa-copy" aria-hidden="true"></i>
                        <span>Employee</span>
                      </a>
                    </li>
                    
                    <li className="nav-parent">
                      <a href="/manage">
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                        <span>Manage employee</span>
                      </a>
                    </li>
                  </ul>
                </nav>

              </div>
            </div>
          </aside>
    </div>
  )
}

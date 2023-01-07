import "./style/navbar.css";

function NavBar() {
  return (
    <div className="navmain blackcolor">
      <nav class="navbar-dark bg-dark navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand whitecolor" href="#Name">
              <h2>WagesHwari VaisHnavi</h2>
            </a>
          </div>
          <ul class="nav navhead">
            <li class="active">
              <a className="w3-metro-light-green" href="#Resume">
                Resume
              </a>
            </li>
            <li>
              <a className="whitecolor" href="#Projects">
                Projects
              </a>
            </li>
            <li>
              <a className="whitecolor" href="#Contact">
                Experience
              </a>
            </li>
            <li>
              <a className="whitecolor" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

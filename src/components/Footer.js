import React from 'react' 

const Footer = () => {
    return(
        <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Created and Designed by Christina Sohn with React &middot; chsohn15@gmail.com
              </p>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="email" href="mailto:chsohn15@gmail.com"><i class="fa fa-envelope-o"></i></a></li>
                <li><a class="medium" href="https://chsohn15.medium.com/" target = "_blank" rel = "noopener noreferrer"><i class="fa fa-medium"></i></a></li>
                <li><a class="github" href="https://github.com/chsohn15" target = "_blank" rel = "noopener noreferrer"><i class="fa fa-github"></i></a></li>
                <li><a class="linkedin" href="https://www.linkedin.com/in/christina-sohn/" target = "_blank" rel = "noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
    )
}

export default Footer
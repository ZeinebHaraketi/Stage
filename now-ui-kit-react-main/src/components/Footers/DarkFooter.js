/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
           
           
           
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            target="_blank"
          >
            Beyt Al Hikma
          </a>
         
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

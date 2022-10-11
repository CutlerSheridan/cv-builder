import { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="credit">Made by Cutler Sheridan.</p>
        <p className="credit">
          See more{' '}
          <a className="credit-link" href="cutlersheridan.github.io/portfolio">
            here.
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;

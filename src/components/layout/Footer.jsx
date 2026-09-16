import { Container } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <span>&copy; {year} Music Theory App</span>
        <a
          href="https://github.com/hannahro15/music-theory-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Container>
    </footer>
  );
}

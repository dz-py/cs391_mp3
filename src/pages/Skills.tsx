import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import useDynamicTitle from '../hooks/useDynamicTitle';

export default function Skills() {
    useDynamicTitle();
    return (
        <div className="page-wrapper">
            <Header />
            <div style={{ display: 'flex' }}>
                <Nav />
                <Main>
                <h3 id="main-title">Skills</h3>
                <div className="main-content">
                  <div className="main-text">
                    <h4>Technical Skills</h4>
                        <ul>
                            <li>Python, JavaScript, OCaml, C++</li>
                            <li>Web Development (HTML, Flask, React)</li>
                            <li>Database Management (MySQL, PostgreSQL)</li>
                            <li>Tools & Frameworks (Menhir, Dune, Git, Docker)</li>
                        </ul>

                    <h4>Soft Skills</h4>
                        <ul>
                            <li>Problem-Solving & Debugging</li>
                            <li>Effective Communication</li>
                            <li>Team Collaboration</li>
                            <li>Time Management</li>
                        </ul>

                    <h4>Other</h4>
                        <ul>
                            <li>Experience with real-time gesture tracking</li>
                            <li>Building interactive web applications</li>
                            <li>Optimizing algorithm performance</li>
                        </ul>
                  </div>
                </div>
                </Main>
            </div>
            <Footer />
        </div>
    );
}

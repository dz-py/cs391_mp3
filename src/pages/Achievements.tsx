import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Achievements() {
    return (
      <div className="page-wrapper">
        <Header />
        <div style={{ display: 'flex' }}>
          <Nav />
          <Main>
            <h3 id="main-title">Achievements</h3>
            <div className="main-content">
              <div className="main-text">
                <ul>
                  <li>
                    <strong>Python Programming Certification</strong> - Earned recognition for proficiency in Python, covering object-oriented programming, data structures, and algorithms.
                  </li>
                  <li>
                    <strong>Advanced Data Structures & Algorithms</strong> - Completed a certification program focusing on efficient algorithm design, recursion, and sorting techniques.
                  </li>
                  <li>
                    <strong>Computer Science Educator Training</strong> - Received training in effective teaching methodologies for programming concepts, enhancing student engagement and retention.
                  </li>
                  <li>
                    <strong>Software Development Fundamentals</strong> - Certified in software engineering principles, version control, and debugging best practices.
                  </li>
                  <li>
                    <strong>Artificial Intelligence & Machine Learning Basics</strong> - Gained foundational knowledge in AI concepts, including neural networks and machine learning models.
                  </li>
                </ul>
              </div>
            </div>
          </Main>
        </div>
        <Footer />
      </div>
    );
  }
  
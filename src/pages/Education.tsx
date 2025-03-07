import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import useDynamicTitle from '../hooks/useDynamicTitle';

export default function Education() {
    useDynamicTitle();

    return (
        <div className="page-wrapper">
            <Header />
                <div style={{ display: 'flex' }}>
                    <Nav />
                    <Main>
                        <h3 id="main-title">Education</h3>
                        <div className="main-content">
                            <div className="main-text">
                                <p>
                                I am a Junior Computer Science student at Boston University, graduating in May 2026. My coursework focuses on software development and data analysis, with solid foundations in Java, Python, and JavaScript programming. As a Teaching Assistant for CS111 Introduction to Programming, I help first-year students master programming fundamentals. I'm actively involved in BU's Computer Science Club and have developed several projects including a student meal planning web application. Currently seeking software development internships to apply my skills in a professional environment.
                                </p>
                            </div>
                        </div>
                    </Main>
                </div>
            <Footer />
        </div>
    );
}

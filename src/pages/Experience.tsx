import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import useDynamicTitle from '../hooks/useDynamicTitle';

export default function Experience() {
    useDynamicTitle();
    return (
        <div className="page-wrapper">
            <Header />
                <div style={{ display: 'flex' }}>
                    <Nav />
                    <Main>
                        <h3 id="main-title">Experience</h3>
                        <div className="main-content">
                            <div className="main-text">
                                <p>
                                From July 2020 to June 2022, I worked as a Computer Science Tutor at School Simplified on Discord, where I taught intermediate programming concepts such as functions, arrays, and algorithm design. I guided students in developing Python projects that incorporated object-oriented programming and fundamental data structures like stacks and queues. To enhance learning, I created engaging explanations for complex topics like recursion and basic sorting algorithms, using visual aids and practical examples to make the material more accessible.
                                </p>
                            </div>
                        </div>
                    </Main>
                </div>
            <Footer />
        </div>
    );
}

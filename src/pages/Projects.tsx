import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';
import useDynamicTitle from '../hooks/useDynamicTitle';

export default function Projects() {
    useDynamicTitle();
    return (
        <div className="page-wrapper">
            <Header />
                <div style={{ display: 'flex' }}>
                    <Nav />
                    <Main>
                        <div className="main-content">
                            <div className="main-text">
                                <Calculator />
                            </div>
                        </div>
                    </Main>
                </div>
            <Footer />
        </div>
    );
}


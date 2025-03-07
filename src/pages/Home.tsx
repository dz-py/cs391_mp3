import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import useDynamicTitle from '../hooks/useDynamicTitle';
import mbappe from '../img/mbappe.jpg';
import celtics from '../img/celtics.jpeg';


export default function Home() {
    useDynamicTitle(); 

    return (
        <div className="page-wrapper">
            <Header />
                <div style={{ display: 'flex' }}>
                    <Nav />
                    <Main>
                        <h3 id="main-title">Home</h3>
                        <div className="main-content">
                            <div className="main-text">
                                <p>
                                Hi, my name is Decheng and I'm an undergraduate studying at Boston University. I am majoring in Computer Science. I am interested in software development and data analysis. I am currently looking for internship opportunities in the field of software development and data analysis. In my free time, I enjoy coding, watching movies, and listening to music. I also enjoy playing basketball and soccor. I am a big fan of the NBA and I support the Boston Celtics. I am also a fan of Real Madrid and my favorite player is Kylian Mbappe. 
                                </p>
                            </div>
                            <div id="main-img">
                                <img src={mbappe} alt="Kylian Mbappe" width="50%" height="50%" />
                                <img src={celtics} alt="Boston Celtics" width="50%" height="50%"/>
                            </div>
                            
                        </div>
                    </Main>
                </div>
            <Footer />
        </div>
    );
}

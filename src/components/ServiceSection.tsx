import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

// Do an array of cards

const ServiceSection = () => {
    return ( 
        <div className="services">
            <div className="description">
                <h1>High <span>quality</span> services</h1>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diagram" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="home2" />
            </div>
        </div>
     );
}
 
export default ServiceSection;
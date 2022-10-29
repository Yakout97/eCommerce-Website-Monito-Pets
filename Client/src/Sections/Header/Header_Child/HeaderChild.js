import Button from '../../../Components/Button/Button';
import './HeaderChild.css';
import rec from '../../../images/Rectangle 1.svg'

function HeaderChild(){
    return(
        <div>
            <div id='headerChild' className='col-12 col-lg-6 text-center text-md-start left-section'>
                <div className="row">
                    <div>
                        <div>
                        <h1>One More Friend</h1>
                        <h2>Thousands More Fun!</h2>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div>
                        <p>Having a pet means you have more joy, a new friend, a happy<br/>person who will always be with you to have fun. We have 200+<br/>different pets that can meet your needs!</p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div>
                        <Button text="View Intro " fontWeight="400" className="Btn-secondary"><div className="fa-regular fa-circle-play"></div></Button>
                        <Button text="Explore Now" fontWeight="400"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <img src={rec} alt="left"/>
                </div>
                
            </div>
        </div>
    );
}

export default HeaderChild;
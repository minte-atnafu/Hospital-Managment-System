

import './HomePatient.css';
import NavBar from './NavBarp';
function Patient() {
    return (

        <div>
            <NavBar />
            <>
                <div className="home-container">
                    <div className="home-internal-container">
                        <div className="picture"></div>

                        <div className="message">
                            <h2 className='h2-tag'>Welcome: @username</h2>
                            <h1 className='h1-tag'>We Prioritize Your Health</h1>
                            <p>
                               </p>
                        </div>
                    </div>
                </div>
            </>


        </div>


    );
};
 export default Patient


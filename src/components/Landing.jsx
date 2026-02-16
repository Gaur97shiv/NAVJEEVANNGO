import '../css/landing.css';
import main from '../assets/LandImg.png';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="landing">
                <span className="left">
                    <div className="caption1">
                        
                        <h4>WE ARE NAVJEEVAN NIRMAN SANKALP NGO</h4>
                    </div>
                    <div className="titles">
                        <div className="caption2">
                            <p>At <span>NAVJEEVAN NIRMAN SANKALP,</span> we are Helping children learn, grow, and thrive. </p>
                        </div>
                        <div className="caption3">
                            <p>Extending helping hands to uplift underprivileged children and marginalized communities.</p>
                        </div>
                        <div className="btns">
                            <button type="button" className="btn btn-success" onClick={()=>navigate("/donate")}>DONATE</button>
                        </div>
                    </div>

                </span>
                <span className="right">
                    <img src={main} alt="Smiling Faces" />
                </span>
            </div>
    );
}
// import Drawer from './Goods';
import { Icon } from 'react-icons-kit';
import { arrows_remove } from 'react-icons-kit/linea/arrows_remove';
import img1 from '../Books/001.png';
import { basic_elaboration_briefcase_remove } from 'react-icons-kit/linea/basic_elaboration_briefcase_remove';
import { arrows_right } from 'react-icons-kit/linea/arrows_right';

function Drawer(props) {
    return (
    <div className="overlay">
    <div className="drawer">
        <h2 className="d-flex justify-between mb-20">
            Basket <Icon onClick={props.onClose} className="removeArrow cu-p" size={32} icon={arrows_remove} alt="Remove" /></h2>
                        
        <div className="items">
            <div className="cartItem d-flex align-center  mb-20">
                <div style={{ backgroundImage: `url(${img1})` }} className="cartItemImg"></div>

                <div className="mr-20 flex">
                    <p className="mb-5">Animal Farm is a satirical allegorical novella by George Orwell</p>
                    <b>13.00 $</b>
                </div>
                <Icon className="removeBtn" size={32} icon={basic_elaboration_briefcase_remove} alt="basic_elaboration_briefcase_remove" />
            </div>
            <div className="cartItem d-flex align-center">
                <div style={{ backgroundImage: `url(${img1})` }} className="cartItemImg"></div>

                <div className="mr-20">
                    <p className="mb-5">Animal Farm is a satirical allegorical novella by George Orwell</p>
                    <b>13.00 $</b>
                </div>
                <Icon className="removeBtn" size={32} icon={basic_elaboration_briefcase_remove} alt="basic_elaboration_briefcase_remove" />
            </div>
        </div>

        <div className="cartTotalBlock mb-40">
            <ul>
                <li className="d-flex">
                    <span>Total:</span>
                    <div></div>
                    <b>13.00 $</b>
                </li>
            </ul>
            <button className="blueButton">Place order
                <Icon className="arrow" size={32} icon={arrows_right} alt="Arrow right" /> </button>
        </div>
    </div>
    </div >
);
}

export default Drawer;
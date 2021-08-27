import React from 'react';
import styles from './Card.module.scss';
import { Icon } from 'react-icons-kit';
import { arrows_circle_plus } from 'react-icons-kit/linea/arrows_circle_plus';
import { ArrowsCircleCheck } from 'react-icons-kit/linea/arrows_circle_check';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
                        <img width={133} height={148} src={props.imageUrl} alt="Any book" />
                        <h5>{props.title}</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="box-price">Price:</span>
                    <b>{props.price} $</b>
                            </div>
                <Icon className={styles.plus} onClick={props.onClickPlus} size={30} icon={ arrows_circle_plus } alt="ArrowsCirclePlus" />
                        </div>
                    </div>
    );
}

export default Card;
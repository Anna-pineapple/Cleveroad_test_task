import React, {useContext} from 'react';
import { Container } from 'semantic-ui-react';
import {useAuthState} from "react-firebase-hooks/auth";
import { Context } from './../index';
import '../index.scss';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import Card from './Card/Card';
import Drawer from './Drawer';
import Navbar from './Navbar';

const arr = [
    { title: 'Animal Farm is a satirical allegorical novella by George Orwell.', price: 13.00, imageUrl: 'funny-shopping/src/Books/001.png' },
    { title: 'Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury.', price: 12.00, imageUrl: "/funny-shopping/src/Books/002.png" },
    { title: 'The Old Man and the Sea is a short novel written by the American author Ernest Hemingway.', price: 10.00, imageUrl: "/funny-shopping/src/Books/003.png" }
];

function Goods() {
    const [cardOpened, setCardOpened] = React.useState(false);
 
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)

        return (
            <div className="wrapper">
                {cardOpened && <Drawer onClose={() => setCardOpened(false)} />}
                <Navbar onClickCard={() => setCardOpened(true)} />
                <div className="d-flex align-between justify-between mb-40">
                    <h1>All books</h1>
                    <div className="search-block d-flex">
                        <Icon icon={search} alt="Search" />
                        <input placeholder="Search..." />
                    </div>
                </div>
            
                <div className="d-flex">
                    {arr.map((obj) => (
                        <Card title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                        onClickPlus={() => console.log('Press plus')} />
                    ))} 
                    </div>
                 </div>
        );
    };

export default Goods;
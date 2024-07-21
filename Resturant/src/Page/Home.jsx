import React, { Fragment, useState } from 'react';
import Header from '../Componants/Header/Header';
import Hero from '../Componants/Hero/Hero';
import Menu from '../Componants/Menu/Menu';
import Who from '../Componants/Who_we_are/Who';
import MenuPack from '../Componants/MenuPack/MenuPack';
import Rate from '../Componants/Rate/Rate';
import D_App from '../Componants/App/D_App';
import Footer from '../Componants/Footer/Footer';

function Home() {
    const [selectedItems, setSelectedItems] = useState([]);

    // Pass items/props to Header.
    const addItem = (item) => {
        setSelectedItems((selectedItems) => [...selectedItems, item])
    };

    // Get id and type from Header.
    const removeItem = (id, type) => {
        setSelectedItems(prevItems => prevItems.filter(item => !(item.id === id && item.type === type)));
    };

    return (
        <Fragment>
            {/* Passed "selectedItems" Array To Store Items That Added From 'addItem' Function */}
            <Header selectedItems={selectedItems} removeItem={removeItem}/>
            <Hero />
            {/* Passed 'addItem' Function */}
            <Menu addItem={addItem} />
            <Who />
            {/* Passed 'addItem' Function */}
            <MenuPack addItem={addItem}  />
            <Rate />
            <D_App />
            <Footer />
        </Fragment>
    )
}

export default Home;
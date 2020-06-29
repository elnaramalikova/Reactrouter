import React, {useState, useEffect} from 'react';
import Footer from './page/footer';
import Head from "./page/Head";
import Content from "./page/Content";

const Page = props => {
    const [itemsState, setItemsState] = useState({items:[]});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(r => r.json())
            .then(respJSON => {
                setItemsState(respJSON);
            })
    });

    return (
        <>
            <Head navItems={props.navItems}/>
            <Content pathItems={props.navItems}/>
            <Footer/>
        </>
    );
};

export default Page;

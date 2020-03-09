import React from 'react';
import './layout.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className = 'layout'>
            <header className = 'layout__header'>
                <Header/>
            </header>
            <main className = 'layout__main'>
                {children}
            </main>
            <footer className = 'layout__footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout

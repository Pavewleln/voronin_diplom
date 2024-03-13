'use client';

import {Footer} from 'flowbite-react';
import {Link} from "react-router-dom";

export const FooterComponent = () => {
    return (
        <Footer container>
            <Footer.Copyright href="#" by="БайБай" year={2024}/>
            <Footer.LinkGroup>
                <Link className={"me-4"} to={"/about"}>О нас</Link>
                <Link className={"me-4"} to={"/contacts"}>Контакты</Link>
            </Footer.LinkGroup>
        </Footer>
    );
}

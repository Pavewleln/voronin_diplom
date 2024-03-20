import {Route, Routes} from "react-router";
import {FooterComponent} from "./app/components/Footer";
import {HeaderComponent} from "./app/components/Header";
import {Home} from "./app/pages/Home";
import {About} from "./app/pages/About";
import {Contacts} from "./app/pages/Contacts";
import {Tickets} from "./app/pages/Tickets";
import {Ticket} from "./app/pages/Ticket";

function App() {
    return (
        <>
            <div className="m-auto flex flex-col min-h-screen">
                <HeaderComponent/>
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/tickets" element={<Tickets/>}/>
                        <Route path="/tickets/:id" element={<Ticket/>}/>
                    </Routes>
                </div>
            </div>
            <FooterComponent/>
        </>
    );
}

export default App;

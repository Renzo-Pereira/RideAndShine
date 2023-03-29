import NavBar from "./NavBar";
import Header from "./header";

export const Layout = ({children}) => {
    return (
        <main>
        <div className="backgroundHeader">
        <Header />  
        <NavBar />
        </div>
        {children}
        </main>
    );
};



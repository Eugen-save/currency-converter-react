import "./style.css";

const Container = ({ children }) => (
    <main className="container container--backgroundImage">
        {children}
    </main>
);

export default Container;
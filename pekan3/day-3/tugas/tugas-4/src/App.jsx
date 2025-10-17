import React, { useState, Suspense } from "react";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

export default function App() {
    const [page, setPage] = useState("home");

    return (
        <div style={{ padding: 20 }}>
            <h1>Contoh Code Splitting & Lazy Loading</h1>

            <div style={{ marginBottom: 20 }}>
                <button onClick={() => setPage("home")}>Home</button>
                <button onClick={() => setPage("about")} style={{ marginLeft: 10 }}>About</button>
                <button onClick={() => setPage("contact")} style={{ marginLeft: 10 }}>Contact</button>
            </div>

            <Suspense fallback={<div>Loading komponen...</div>}>
                {page === "home" && <Home />}
                {page === "about" && <About />}
                {page === "contact" && <Contact />}
            </Suspense>
        </div>
    )
}

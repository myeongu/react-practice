import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>App9</h1>

                <ul>
                    <li>
                        <Link to="/about/">about</Link>
                    </li>
                    <li>
                        <Link to="/about/company/">about company</Link>
                    </li>
                    <li>
                        <Link to="/profile/">profile</Link>
                    </li>
                    <li>
                        <Link to="/blog/">blog</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/about/" element={<AboutPage/>} />
                    <Route path="/about/company" element={<AboutCompanyPage />} />
                    <Route path="/profile/" element={<ProfilePage />} />
                    <Route path="/blog/" element={<BlogPage />} />
                </Routes>

                {/* <AboutPage />
                <AboutCompanyPage />
                <ProfilePage />
                <BlogPage /> */}
            </div>
        </BrowserRouter>
    )
}

// /about/ 주소로 갔을 때
const AboutPage = () => {
    return (
        <div>
            <h2>AboutPage</h2>
        </div>
    )
}

// /about/company 주소로 갔을 때
const AboutCompanyPage = () => {
    return (
        <div>
            <h2>AboutCompanyPage</h2>
        </div>
    )
}

// /profile/ 주소로 갔을 때
const ProfilePage = () => {
    return (
        <div>
            <h2>ProfilePage</h2>
        </div>
    )
}

// /blog/ 주소로 갔을 때
const BlogPage = () => {
    return (
        <div>
            <h2>BlogPage</h2>
        </div>
    )
    
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import ProjectPage from './pages/Projects/Projects';
import Project from './pages/Project/Project';

import Navbar from './components/Navbar/Navbar';

interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route element={<Navbar />}>
                        <Route index element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path='projects' element={<ProjectPage />}/>
                        <Route path='projects/project/:projectId' element={<Project />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    );
};

export default Application;

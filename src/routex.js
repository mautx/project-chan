import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from "./views/heroPage";
import GalleryProduct from "./views/galleryProduct";
import Services from "./views/services";
import ContactM from "./views/contact";
import Gallery from "./views/gallery";
import GalleryM from "./views/gallery";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HeroPage />} />
                <Route path="/productos" element={<GalleryProduct />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/contacto" element={<ContactM />} />
                <Route path="/galeria" element={<GalleryM />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
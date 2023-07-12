import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage } from "../pages"
import { HeroPage } from "../pages/HeroPage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to={"/marvel"} />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                </Routes>
            </div>
        </>
    )
}

import { Routes, Route } from "react-router-dom"
import { Home } from './Home'
import { Projects } from './Projects'
import { About } from './About'
import { Contact } from './Contact'
import styled from "styled-components"

export const Content = () => {
    return (
        <StyledContent>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </StyledContent>
    )
}

export const StyledContent = styled.div`
    display: flex;
    flex: 1;
    background: #efefef;
    padding: 20px;
    `;

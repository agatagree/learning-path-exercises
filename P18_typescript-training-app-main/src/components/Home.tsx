import { StyledSection } from "./Style"
import { StyledButton } from "./Style"
import { useState } from "react"

function Display (properties : {title: string, content: string}) {
    const [colorButton, setColorButton] = useState("#0A66C2");
    return (
        <StyledSection style={{justifyContent:"center", alignItems:"center"}}>
            <h2 style={{fontSize: "80px", margin: "20px"}}>{properties.title}</h2>
            <p style={{fontSize: "30px"}}>{properties.content}</p>
            <a href="./projects" target="_blank" style={{margin: "0 auto", marginTop: "30px"}}>
                <StyledButton 
                onMouseEnter={() => setColorButton("#16437E")}
                onMouseLeave={() => setColorButton("#0A66C2")}
                style={{backgroundColor:colorButton, width: "200px"}}>
                See my latest project
                </StyledButton>
            </a>
        </StyledSection>
    )
}

export const Home = () => {

    const homeText = {
        title: 'Hello!',
        content: 'Nice to meet you!',
    }
    return (
        <Display title={homeText.title} content ={homeText.content} />
    )
}

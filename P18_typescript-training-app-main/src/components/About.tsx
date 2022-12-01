import { StyledSection } from "./Style"
import { useState } from "react"
import { StyledButton } from "./Style"

const AboutText = {
    title: 'Hi, nice to meet you!',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
}

export const About = ({aboutTitle=AboutText.title, aboutContent=AboutText.content}) => {
    const [colorButton, setColorButton] = useState("#0A66C2");

    return (
        <StyledSection>
            <h2>{aboutTitle}</h2>
            <p>{aboutContent}</p>
            <a href="https://www.linkedin.com/" style={{margin: "0 auto", marginTop: "30px"}} data-testid="linkUrl">
                <StyledButton 
                onMouseEnter={() => setColorButton("#16437E")}
                onMouseLeave={() => setColorButton("#0A66C2")}
                style={{backgroundColor:colorButton}}>LinkedIn
                </StyledButton>
            </a>
        </StyledSection>
    )
}



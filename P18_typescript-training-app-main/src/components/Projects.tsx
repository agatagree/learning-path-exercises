import { projects } from "./ProjectsList"
import { ProjectCard } from "./ProjectCard"
import styled from "styled-components"

export const Projects = () => (
    <StyledGallery>
        {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
        ))}
    </StyledGallery>
)

const StyledGallery = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 10px;
`
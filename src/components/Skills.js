import { Container, Button } from "reactstrap";
import SkillsList from "../features/skills/SkillsList";

const Skills = () => {
    return(
        <Container className='skills mx-auto col-8'>
            <div className='h4 content'>What can I do for you?</div>
            <SkillsList />
            <Button>Contact Me</Button>
        </Container>
    )
};
export default Skills;
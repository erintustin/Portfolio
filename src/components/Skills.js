import { Container, ButtonGroup, Button } from "reactstrap";

const Skills = () => {
    return(
        <Container className='skills mx-auto col-8'>
            <div className='h4 content'>What can I do for you?</div>
            <div className='content'>
                <ButtonGroup>
                    <Button className='m-1'>Projects</Button>
                    <Button className='m-1'>Resume</Button>
                </ButtonGroup>
            </div>
</Container>
    )
};

export default Skills;
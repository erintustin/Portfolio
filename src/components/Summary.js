import { Container, Button, ButtonGroup } from "reactstrap";

const Summary = () => {
    return(
        <Container className='summary mx-auto col-8'>
            <div className='h2 content'>Hi, I'm Erin!</div>
            <div className='content'>
                I’m an energetic and adaptable recent bootcamp graduate seeking a junior developer role.
            </div>
                <ButtonGroup className='main-buttons'>
                    <Button className='m-1'>Projects</Button>
                    <Button className='m-1'>Resume</Button>
                </ButtonGroup>
</Container>
    )
};

export default Summary;
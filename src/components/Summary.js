import { Container, Button, ButtonGroup } from "reactstrap";
import avatar from '../app/assets/images/avatar.jpg';

const Summary = () => {
    return(
        <Container className='summary mx-auto col-8'>
            <div className='h2 content'>Hi, I'm Erin!</div>
            <img src={avatar} alt='self-portrait' className='avatar' />
            <div className='content'>
                I’m an energetic and adaptable recent bootcamp graduate seeking a junior developer role.
                <br /> <br />
                I specialize in mobile-first and responsive design with a focus on accessibility.
                <br/> <br />
                I have a passion for creating user-friendly, impactful web and mobile tools that can help make the world more inclusive and accessible to everyone. 
            </div>
                <ButtonGroup className='main-buttons'>
                    <Button className='m-1'>Projects</Button>
                    <Button className='m-1'>Resume</Button>
                </ButtonGroup>
</Container>
    )
};

export default Summary;
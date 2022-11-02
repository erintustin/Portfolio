import { Container } from 'reactstrap';
import Summary from '../components/Summary';
import Skills from '../components/Skills';

const HomePage = () => {
    return(
        <Container>
            <Summary />
            <Skills />
        </Container>
    )
};

export default HomePage;
import { Container, Row, Col } from 'reactstrap';



const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col className='mx-auto p-10'>
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='https://github.com/erintustin/'
                            target='new_window'
                        >
                            <i className='fa fa-github' />
                        </a>{' '}
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='https://www.linkedin.com/in/etustin/'
                            target='new_window'
                        >
                            <i className='fa fa-linkedin' />
                        </a>{' '}
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='mailto:erintustin@gmail.com'
                        >
                            <i className='fa fa-envelope-o' />
                        </a>
                        <p>© 2022 Erin Tustin</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    
        



    );
};

export default Footer;
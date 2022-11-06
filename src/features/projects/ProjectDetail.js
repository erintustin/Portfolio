import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const ProjectDetail = ({project}) => {
    const {name, images, description, url, github, skills, details  } = project;

    return (
        <p>Project Detail</p>
    )
};

export default ProjectDetail;
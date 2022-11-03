import { Container, Row, Col, Image } from 'reactstrap';

const SkillCard = ({skill}) => {
    const { name, image } = skill;

    return (
            <div className='m-0 mx-auto skill-card'>
            <img
                className='m-0 mx-auto skill-img'
                src={image}
                alt={name}
            /> 
            <p className='content mb-0'>{name}</p>
            
        </div>
    );
}

export default SkillCard;
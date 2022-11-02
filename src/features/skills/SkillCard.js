import { Card, CardImg, CardFooter, CardSubtitle } from 'reactstrap';

const SkillCard = ({skill}) => {
    const { name, image } = skill;

    return (
            <Card className='m-2 mx-auto'>
            <CardImg 
                className='m-0'
                src={image}
                alt={name}
            /> 
            <CardFooter>
                <CardSubtitle>{name}</CardSubtitle>             
            </CardFooter>
        </Card>
    );
}

export default SkillCard;
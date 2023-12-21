import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCard=(props)=> {
  return (
    <Card style={{ width: '18rem', margin:"1rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.sub}</Card.Subtitle>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="secondary" style={{margin:"0.5rem"}} href={props.demoURL} target='_blank'>Demo</Button>
        <Button variant="secondary" href={props.code} target='_blank'>Code</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;


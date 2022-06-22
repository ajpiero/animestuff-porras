import { Card, Button } from 'react-bootstrap';

const Producto = () => {
    return (
        <div>   
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>
                Este es un pequeno texto que sirve como ejemplo para tener contenido en este espacio.
              </Card.Text>
              <Button variant="primary">Ir a algun lado</Button>
            </Card.Body>
          </Card>
        </div>       

          )
 }

 export default Producto
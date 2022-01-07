import { Card } from "react-bootstrap";
const GameInfo = () => {
  return (
    <div>
      <Card
        bg="transparent"
        text="white"
        style={{ width: "18rem" }}
        className="mb-2"
        border="white"
      >
        <Card.Header>How to play</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="transparent"
        text="white"
        style={{ width: "18rem" }}
        className="mb-2"
        border="white"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="transparent"
        text="white"
        border="white"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>How to win</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GameInfo;

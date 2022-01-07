import React from "react";
import Board, { calculateWinner } from "./Board";
import { Container, Row, Button, Col, Stack, Modal } from "react-bootstrap";
import GameInfo from "./GameInfo";
import ModalMessage from "./ModalMessage";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      winner: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li
          key={move}
          className="list-group-item"
          style={{ backgroundColor: "#460b38" }}
        >
          <Button
            variant="warning ttc-txt-secondary"
            className="col-12"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </Button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
      this.state.winner
        ? console.log(this.state.winner)
        : this.setState({ winner: true });
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      this.state.winner
        ? this.setState({ winner: false })
        : console.log(this.state.winner);
    }

    return (
      <Container className="my-5">
        {this.state.winner ? <ModalMessage winner={status} /> : null}

        <Row>
          <Col>
            <GameInfo />
          </Col>
          <Col>
            {" "}
            <div className="game-board">
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
            </div>
          </Col>
          <Col>
            {" "}
            <div className="game-info">
              <div>{status}</div>
              <Stack gap={2} className="list-group mx-auto">
                {moves}
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;

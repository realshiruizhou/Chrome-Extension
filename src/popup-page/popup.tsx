//run 'yarn dev' to compile and reload
import React, { FC, useState } from 'react';
import { createRoot } from 'react-dom/client';

interface ISquareProps {
    value: string;
    onClick: () => void;
}

const Square: FC<ISquareProps> = (props: ISquareProps): JSX.Element => {
    const { value, onClick } = props;

    return (
        <button className='square' onClick={onClick}>{value}</button>
    );
}

const Board: FC = (): JSX.Element => {
    const status: string = 'Next Player: X';
    const [boardState, setBoardState] = useState(new Array<string>(9));

    const handleClick = (i: number) => {
        const temp = boardState.slice();
        temp[i] = 'X';
        setBoardState(temp);
    };

    const pieces: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
        const squares: JSX.Element[] = [];
        for (let j = 0; j < 3; j++) {
            const num: number = i * 3 + j;
            squares.push(
                <Square 
                    value={boardState[num]} 
                    onClick={() => handleClick(num)}
                />);
        }
        pieces.push(<div className='board-row'>{squares}</div>);
    }
    return (
        <>
            <div className='status'>{status}</div>
            {pieces}
        </>
    );
}

export const TicTacToe: FC = (): JSX.Element => {
    return (
        <div className='game'>
            <div className='game-board'>
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

export const Popup: FC = (): JSX.Element => {
    return (
        <TicTacToe />
    );
}

const container = document.getElementById('popup');
const root = createRoot(container!);
root.render(<Popup />);
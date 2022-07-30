//run 'yarn dev' to compile and reload
import React, { FC, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const Square: FC = () => {
    return (
        <button className='square'>

        </button>
    );
}

const Board: FC = () => {
    const status: string = 'Next Player: X';
    const pieces: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
        const squares: JSX.Element[] = [];
        for (let j = 0; j < 3; j++) {
            squares.push(<Square />)
        }
        pieces.push(<div className='board-row'>{squares}</div>)
    }
    return (
        <>
            <div className='status'>{status}</div>
            {pieces}
        </>
    );
}

export const Popup: FC = () => {
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

const container = document.getElementById('popup');
const root = createRoot(container!);
root.render(<Popup />);
import React from 'react';
import { render, screen } from '@testing-library/react';
import {OperationModal} from "../OperationModal";

test('render New Task in OperationalModel', () => {

    // @ts-ignore
    render(<OperationModal closeFunction={false}/>);
    const linkElement = screen.getByText(/New Task/i);
    expect(linkElement).toBeInTheDocument();
});
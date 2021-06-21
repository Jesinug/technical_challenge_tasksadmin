import React from 'react';
import { render, screen } from '@testing-library/react';
import {DeleteModal} from "../DeleteModal";

test('render edit Task in EditModel', () => {

    // @ts-ignore
    render(<DeleteModal open={true} handleDelete={false} handleClose={false}/>);
    const linkElement = screen.getByText(/Cancel/i);
    expect(linkElement).toBeInTheDocument();
});
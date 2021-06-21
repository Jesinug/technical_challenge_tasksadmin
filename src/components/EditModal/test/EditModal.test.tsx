import React from 'react';
import { render, screen } from '@testing-library/react';
import {EditModal} from "../EditModal";

test('render edit Task in EditModel', () => {

    // @ts-ignore
    render(<EditModal closeFunction={false} id={1} name={"test"} priority={1}/>);
    const linkElement = screen.getByText(/Edit Task/i);
    expect(linkElement).toBeInTheDocument();
});
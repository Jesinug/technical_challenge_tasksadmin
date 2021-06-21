import React, {useState} from 'react';
import { render, screen } from '@testing-library/react';
import {Card} from "../Card";


test('renders Card react link', () => {

    // @ts-ignore
    render(<Card index={1} tasks={null} task={{name: "test", id: 1, priority: 1}} />);
    const linkElement = screen.getByText(/Edit/i);
    expect(linkElement).toBeInTheDocument();
});
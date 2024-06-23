import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Carousel } from '../components/Carousel';
import { IMAGE_URL } from '../utils/constants';

const mockData = [
  {
    id: 1,
    title: 'Title 1',
    backdrop_path: 'path1.jpg',
    poster_path: 'path1_poster.jpg',
    overview: 'Overview 1',
  },
  {
    id: 2,
    title: 'Title 2',
    backdrop_path: 'path2.jpg',
    poster_path: 'path2_poster.jpg',
    overview: 'Overview 2',
  },
  {
    id: 3,
    title: 'Title 3',
    backdrop_path: 'path3.jpg',
    poster_path: 'path3_poster.jpg',
    overview: 'Overview 3',
  },
];

describe('Carousel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it('renders the carousel with data', () => {
    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>
    );

    const img1 = screen.getByRole('img', { name: /title 1/i });
    const img2 = screen.getByRole('img', { name: /title 2/i });
    const title1 = screen.getByRole('heading', { name: /title 1/i });
    const title2 = screen.getByRole('heading', { name: /title 2/i });
    const overview1 = screen.getByText(/overview 1/i);
    const overview2 = screen.getByText(/overview 2/i);

    expect(screen.getAllByRole('img')).toHaveLength(mockData.length);
    expect(img1).toHaveAttribute(
      'src',
      `${IMAGE_URL.original}${mockData[0].backdrop_path}`
    );
    expect(img2).toHaveAttribute(
      'src',
      `${IMAGE_URL.original}${mockData[1].backdrop_path}`
    );
    expect(title1).toHaveTextContent(mockData[0].title);
    expect(title2).toHaveTextContent(mockData[1].title);
    expect(overview1).toHaveTextContent(mockData[0].overview);
    expect(overview2).toHaveTextContent(mockData[1].overview);
  });

  it('navigates to the next item when the next button is clicked', () => {
    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>
    );
    const nextButtons = screen.getAllByRole('button', { name: /next/i });
    fireEvent.click(nextButtons[0]);
    const currentImg = screen.queryByAltText('Title 1');

    console.log(currentImg);
    const nextImg = screen.queryByAltText('Title 2');

    expect(currentImg).toHaveClass('invisible');
    expect(nextImg).toHaveClass('visible');
  });

  it('navigates to the previous item when the previous button is clicked', () => {
    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>
    );
    const prevButtons = screen.getAllByRole('button', { name: /previous/i });
    fireEvent.click(prevButtons[0]);
    const currentImg = screen.queryByAltText('Title 1');

    const nextImg = screen.queryByAltText('Title 3');

    expect(currentImg).toHaveClass('invisible');
    expect(nextImg).toHaveClass('visible');
  });

  it('changes to specific image when a dash indicator is clicked', () => {
    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>
    );
    const dashIndicators = screen.getAllByTestId('dash-indicator');

    fireEvent.click(dashIndicators[2]);

    const currentImg = screen.queryByAltText('Title 1');
    const nextImg = screen.queryByAltText('Title 2');
    const wantedImg = screen.queryByAltText('Title 3');

    expect(currentImg).toHaveClass('invisible');
    expect(nextImg).toHaveClass('invisible');
    expect(wantedImg).toHaveClass('visible');
  });
  it('changes image automatically after 5 seconds', () => {
    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>
    );
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    const currentImg = screen.queryByAltText('Title 1');
    const nextImg = screen.queryByAltText('Title 2');
    const lastImg = screen.queryByAltText('Title 3');

    expect(currentImg).toHaveClass('invisible');
    expect(nextImg).toHaveClass('visible');

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(lastImg).toHaveClass('visible');
    expect(currentImg).toHaveClass('invisible');
    expect(nextImg).toHaveClass('invisible');
  });
});

import React from 'react'
import { render, screen } from '@testing-library/react'
import Nav from './Nav'

jest.mock('components', () => ({
  Button: () => <h1>Button</h1>,
  ButtonAlt: () => <h1>ButtonAlt</h1>,
  ButtonIcon: () => <h1>ButtonIcon</h1>
}))

const setOpenMenuSpy = jest.fn()

test('Should render Nav.', () => {
  render(<Nav setOpenMenu={setOpenMenuSpy} />)

  const button = screen.getByRole('heading', { name: 'Button' })
  const buttonIcon = screen.getAllByRole('heading', { name: 'ButtonIcon' })
  const buttonAlt = screen.getByRole('heading', { name: 'ButtonAlt' })
  const pageLinks = screen.getAllByRole('link')

  expect(button).toBeInTheDocument()
  expect(buttonIcon.length).toBe(3)
  expect(buttonAlt).toBeInTheDocument()
  expect(pageLinks.length).toBe(6)
})

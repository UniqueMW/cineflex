import React from 'react'
import { render, screen } from '@testing-library/react'
import SideMenu from './SideMenu'

jest.mock('components', () => ({
  Button: () => <h1>Button</h1>,
  ButtonAlt: () => <h1>ButtonAlt</h1>,
  ButtonIcon: () => <h1>ButtonIcon</h1>
}))

test('Should render SideMenu.', () => {
  render(<SideMenu openMenu={true} setOpenMenu={jest.fn()} />)

  const links = screen.getAllByRole('link')
  const button = screen.getByRole('heading', { name: 'Button' })
  const buttonIcon = screen.getByRole('heading', { name: 'ButtonIcon' })
  const buttonAlt = screen.getByRole('heading', { name: 'ButtonAlt' })

  expect(button).toBeInTheDocument()
  expect(buttonIcon).toBeInTheDocument()
  expect(buttonAlt).toBeInTheDocument()
  expect(links.length).toBe(6)
})

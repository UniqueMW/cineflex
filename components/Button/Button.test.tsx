import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Button from './Button'

const clickHandlerSpy = jest.fn()
test('Should render Button Element.', async () => {
  render(<Button onClick={clickHandlerSpy}>Test</Button>)

  const button = screen.getByRole('button', { name: /test/i })
  await user.click(button)

  expect(button).toBeInTheDocument()
  expect(clickHandlerSpy).toBeCalled()
})

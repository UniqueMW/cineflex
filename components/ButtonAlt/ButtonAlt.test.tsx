import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import ButtonAlt from './ButtonAlt'

const clickHandlerSpy = jest.fn()
test('Should render Button Element.', async () => {
  render(<ButtonAlt onClick={clickHandlerSpy}>Test</ButtonAlt>)

  const button = screen.getByRole('button', { name: /test/i })
  await user.click(button)

  expect(button).toBeInTheDocument()
  expect(clickHandlerSpy).toBeCalled()
})

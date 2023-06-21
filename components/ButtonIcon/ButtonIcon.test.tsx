import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import ButtonIcon from './ButtonIcon'

const clickHandlerSpy = jest.fn()
test('Should render Button Element.', async () => {
  render(<ButtonIcon onClick={clickHandlerSpy}>Test</ButtonIcon>)

  const button = screen.getByRole('button', { name: /test/i })
  await user.click(button)

  expect(button).toBeInTheDocument()
  expect(clickHandlerSpy).toBeCalled()
})

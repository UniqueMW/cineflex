import '@testing-library/jest-dom/extend-expect'
import { jest } from '@jest/globals'
jest.mock('next/router', () => require('next-router-mock'))

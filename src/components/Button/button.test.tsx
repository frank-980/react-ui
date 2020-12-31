import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'
test("test button",()=>{
    const wrapper = render(<Button>123</Button>)
    const node = wrapper.queryByText("123")
    expect(node).toBeInTheDocument()
})
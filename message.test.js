import { render } from "@testing-library/react"
import Message from "./Message"

describe("message", () => {
    it('matches snapshot inline', () => {
        const component = render(<Message author="Anti" text="atitext" />)

        expect(component).toMatchSnapshot()
    })
})
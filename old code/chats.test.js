import { render } from "@testing-library/react"
import { useDispatch } from "react-redux"
import Chats from './Chats'

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}))



describe('chats', () => {
    it('contain chat name and id', () => {
        const component = render(<Chats name="chat" chatId="cht1" />)

        expect(component).toMatchSnapshot();
    })
})
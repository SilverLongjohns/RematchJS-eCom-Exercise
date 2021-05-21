import Search from "./Search";
import {fireEvent} from "@testing-library/react";

const {render, screen} = require("@testing-library/react");

const searchBarTestId = "my-search-bar"

describe("A search bar", () => {
    const onSearchMock = jest.fn();
    beforeEach(() => {
        render(<Search testId={searchBarTestId} onSearch={onSearchMock}/>)
    })
    it("should render an input component on load", async () => {
        await expect(screen.getByTestId(searchBarTestId)).toBeVisible()
    })
    it("should call a function on submit", async () => {
        fireEvent.click(screen.getByTestId(`${searchBarTestId}-button`));
        await expect(onSearchMock).toHaveBeenCalled();
    })
    it("should call a function with a search parameter", async () => {
        fireEvent.change(screen.getByTestId(`${searchBarTestId}-input`), {
            target:{value: "search term"}
        });
        fireEvent.click(screen.getByTestId(`${searchBarTestId}-button`));
        await expect(onSearchMock).toHaveBeenCalledWith("search term");
    })
})

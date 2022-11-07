import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
function DropdownShop() {
    const [sortValue, setSortValue] = useState("");
    const [pageValue, setPageValue] = useState("");
    const handleSelect = (e) => {
        console.log(e);
        setSortValue(e);
    };

    const handlePageValue = (e) => {
        console.log(e);
        setPageValue(e);
    };
    return (
        <div className="row pb-5 ms-auto">
            <Dropdown
                className="btn-drop-down col"
                variant="secondary"
                id="dropdown-basic-button"
                alignRight
                onSelect={handleSelect}
            >
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Sort By {sortValue}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="onsale">Sort by Sale</Dropdown.Item>
                    <Dropdown.Item eventKey="popular">
                        Sort By popular
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="lowtohigh">
                        Sort by price : low to high
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="hightolow">
                        Sort by price : high to low
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="col" onSelect={handlePageValue}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Show {pageValue}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="25">Show 25</Dropdown.Item>
                    <Dropdown.Item eventKey="20">Show 20</Dropdown.Item>
                    <Dropdown.Item eventKey="15">Show 15</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Show 5</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default DropdownShop;

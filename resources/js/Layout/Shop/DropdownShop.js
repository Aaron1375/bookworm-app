import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
function DropdownShop() {

    const [value, setValue] = useState("");
    const handleSelect = (e) => {
        console.log(e);
        setValue(e);
    };
    return (
        <div className="row pb-5 ms-auto">
            <DropdownButton
                className="btn-drop-down col"
                variant="secondary"
                id="dropdown-basic-button"
                alignRight
                title="Dropdown button"
            >   
                <Dropdown.Item onClick={() => sortSale()}>Sort by Sale</Dropdown.Item>
                <Dropdown.Item >Sort By popular</Dropdown.Item>
                <Dropdown.Item eventKey="option-2">Sort by price : low to high</Dropdown.Item>
                <Dropdown.Item eventKey="option-3">Sort by price : high to low</Dropdown.Item>
            </DropdownButton>

            <Dropdown className="col">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Show
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/shop">Show 25</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Show 20</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Show 15</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Show 5</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default DropdownShop;

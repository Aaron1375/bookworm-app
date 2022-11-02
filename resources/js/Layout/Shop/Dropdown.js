import {
    Dropdown
} from "react-bootstrap";
function DropdownShop() {
    return (
        <div className="wrapper pb-5 ms-auto">
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/shop">Action</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Something else</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Show
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/shop">Show 20</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Show 15</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Show 10</Dropdown.Item>
                    <Dropdown.Item href="#/shop">Show 5</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default DropdownShop;

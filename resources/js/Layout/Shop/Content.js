import { React} from "react";
import CardBooks from "../CardBooks";

export default function Content(props) {

    // const show = props.show;
    // console.log(show);
    return (
        <div className="row">
            {props.show.map((book, index) => {
                return <CardBooks book={book} key={index} />;
            })}
            {/* <PaginatedItems/> */}
        </div>
    );
}

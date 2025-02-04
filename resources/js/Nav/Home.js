import Hero from "../Layout/Home/Hero";
import Feature from "../Layout/Home/Feature";
import { Link } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

function Home() {
    return (
        <div className="mt-5">
            {/* BUTTON VIEW ALL > */}
            <div className="wrapper">
                <h2>On Sale</h2>
                <Link className="text-white right-button btn btn-dark mt-2"
                        to="/shop">View all <BsFillCaretRightFill/>
                </Link>
            </div>
            <hr />
            {/* SLIDE SHOW */}
            <Hero />

            <div>
            <h2 className="mt-5 text-center">Feature Book</h2>
            {/* RECOMMENDED & POPULAR */}
            <Feature/>
            </div>

        </div>
    );
}

export default Home;

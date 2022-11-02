import Hero from "../Layout/Home/Hero";
import Feature from "../Layout/Home/Feature";
function Home() {
    return (
        <div className="mt-5">
            <div className="wrapper">
                <h2>On Sale</h2>
                <div className="right-button">
                    <a className="btn btn-secondary" href="/">
                        View All <i class="fa-solid fa-caret-right"></i>
                    </a>
                </div>
            </div>
            <Hero />

            <div>
            <h2 className="mt-5 m-auto">Feature Book</h2>
            <Feature/>
            </div>

        </div>
    );
}

export default Home;

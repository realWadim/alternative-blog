import React from "react";

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Welcome to my Blog.</h1>
                        <p>
                            Join me on my road from waiter to full stack dev. Here I'll post updates on my progress
                            and useful things that I've learned on my path.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React from "react";

function MainContent() {
    return (
        <div className="container mt-4">
            <h1>Welcome to Coding Challenges</h1>
            <p>Take on coding challenges, collaborate with peers, and level up your coding skills!</p>
            {/* Start of expanded main content */}
            <div className="row">
                <div className="col-md-6">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac leo vitae magna convallis semper. Nam eu nulla ac libero euismod rutrum. Cras posuere risus vel ipsum tristique, nec malesuada urna ultrices. Ut non eros mauris. In hac habitasse platea dictumst. Duis ultricies eu lorem eu blandit. Curabitur pretium nisl vitae tortor ultrices, sed luctus felis commodo. Curabitur fringilla, nisi eget efficitur fermentum, nunc orci vehicula justo, eget sodales nisi leo id sapien.</p>
                </div>
                <div className="col-md-6">
                    <h2>Get Started</h2>
                    <p>Curabitur sed justo scelerisque, vestibulum nunc ut, convallis orci. Mauris ultrices lobortis lorem, in tempus sapien. Sed fermentum felis eu nunc malesuada, ac sollicitudin velit dignissim. Duis gravida quam ut tellus luctus, at faucibus orci fermentum. Fusce sollicitudin fringilla eros at efficitur. Integer auctor nec magna non efficitur. Phasellus ac velit id elit tincidunt posuere. Sed congue mi sit amet purus fringilla rhoncus. Sed ut justo ac est aliquam molestie. Curabitur volutpat, quam ac sodales eleifend, elit enim varius tortor, et sodales nisi velit eget nisi. Sed vulputate lectus non ipsum facilisis, a placerat dui tempor. Nam ut arcu sed justo facilisis commodo.</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <h2>Featured Challenges</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Challenge 1: Binary Search</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet lectus nec felis vulputate tristique vel nec est.</p>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Challenge 2: Sorting Algorithms</h5>
                            <p className="card-text">Integer vehicula, nulla eget tempor facilisis, sapien justo ultricies risus, eget pretium nisi dolor ut lectus. Maecenas sit amet nisl sit amet urna elementum viverra.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <h2>Latest Discussions</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Discussion 1: Nulla facilisi. Aliquam nec est eget elit tincidunt venenatis.</li>
                        <li className="list-group-item">Discussion 2: Suspendisse potenti. Donec eu sem a nisl feugiat tincidunt.</li>
                        <li className="list-group-item">Discussion 3: Vivamus nec lectus a magna vestibulum vestibulum.</li>
                    </ul>
                </div>
            </div>
            {/* End of expanded main content */}
        </div>
    );
}

export default MainContent;
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
            <div className="container">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <span className="font-semibold text-lg text-primary mb-2 block">

                            </span>
                            <h2
                                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                            >
                                Our Recent Blog
                            </h2>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap ml-24 mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-4699.jpg?w=740&t=st=1665516210~exp=1665516810~hmac=85318f796231f540a55591f8e16725618e4dd8c84db2f4594c40ce071dbe52b6"
                                    alt="image"
                                    className="w-full"
                                />

                            </div>
                            <div>

                                <h3>
                                    <Link
                                        to="/blog1"
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        What is cors?
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    What is CORS? CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1665516888~exp=1665517488~hmac=f856df244607f8e5c907d3c313aa05739817c89f94d5adfe5298132669ce61b0"
                                    alt="image"
                                    className="w-full"
                                />
                            </div>
                            <div>

                                <h3>
                                    <Link
                                        to="/blog1"
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        what is node ? how does node work .
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1665516888~exp=1665517488~hmac=f856df244607f8e5c907d3c313aa05739817c89f94d5adfe5298132669ce61b0"
                                    alt="image"
                                    className="w-full"
                                />
                            </div>
                            <div>

                                <h3>
                                    <Link
                                        to="/blog2"
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        why are you using firebase? What other options do you have to implement authentication?
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">

                                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                                    what other option implement authentication without firebase?

                                    1. Ory.
                                    2. Supabase.
                                    3. Okta.
                                    4.  PingIdentity.
                                    5.  Keycloak.
                                    6.  Frontegg.
                                    7.   Authress.
                                    8.    STYTCH,
                                    9.Auth0.
                                    10. Conclusion.
                                    11. OneLogin.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=740&t=st=1665516912~exp=1665517512~hmac=26203cdace1c4ab509ac56241453491263fce7c53e79f6f99e9742eed95864dc"
                                    alt="image"
                                    className="w-full"
                                />
                            </div>
                            <div>

                                <h3>
                                    <Link
                                        to="/blog3"
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        How does the private route work?
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
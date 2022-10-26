import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (





        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://global-uploads.webflow.com/62b397ed0ff18cefd722ad0c/62e81ca0304e5174b6fa0d78_coding_for_business.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What Is CORS</h2>
                    <p>CORS Stands For Cross Origin Resource Sharing One Website or a port Does not allow another port or another website to use it's data or any resourse so by installing a node package name cors in express app we can share a website's data to another website</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://global-uploads.webflow.com/62b397ed0ff18cefd722ad0c/62e81ca0304e5174b6fa0d78_coding_for_business.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Why we are using FireBase ? what are other options we have to implement authentication</h2>
                    <p>Apart From Firebase we have other options like Oauth,Octa,Aws and many more the reason behind using firebase beacuse it is trusted and many experienced developers of google made it so it is pretty sure that it  trustworthy to handle our app user's credentials like emails and passwords.To authenricate our User we use firebase so that the uses of apps can be restricted to some extent</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://global-uploads.webflow.com/62b397ed0ff18cefd722ad0c/62e81ca0304e5174b6fa0d78_coding_for_business.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How does the Private Routes Word</h2>
                    <p>Fisrt of all we puth that route for example "checkout" route inside of a component when this "checkout" route is requested the component it is inside of will check some condition if it is the authentic user or not if it is then it will allow the user to "checkout" otherwise it will navigate us to login page</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://global-uploads.webflow.com/62b397ed0ff18cefd722ad0c/62e81ca0304e5174b6fa0d78_coding_for_business.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is Node ? How does it word</h2>
                    <p>  Node is a Javascript Runtime it is used to Run Javascript in server ,for a long time Javascript was used in the server side but a creative programmer decided to use it use it on the server side he took the the V8 engine of chrome and added some C++ code and boom it is the new Node js it is consist of  call stack,queue,memory,Event loop ,Thread pool
                        event loop is a very complicated thing call stack takes the code and runs it immedietely then it calls the queue if any code is incomplete to run the event is resposible to  call the fisrt one from queue to call stack
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

        </div>




        // <div className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        //     <div className="container">
        //         <div className="flex flex-wrap justify-center -mx-4">
        //             <div className="w-full px-4">
        //                 <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
        //                     <span className="font-semibold text-lg text-primary mb-2 block">

        //                     </span>
        //                     <h2
        //                         className="
        //           font-bold
        //           text-3xl
        //           sm:text-4xl
        //           md:text-[40px]
        //           text-dark
        //           mb-4
        //           "
        //                     >
        //                         Our Recent Blog
        //                     </h2>
        //                     <p className="text-base text-body-color">
        //                         There are many variations of passages of Lorem Ipsum available
        //                         but the majority have suffered alteration in some form.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="flex flex-wrap ml-24 mx-4">
        //             <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        //                 <div className="max-w-[370px] mx-auto mb-10">
        //                     <div className="rounded overflow-hidden mb-8">
        //                         <img
        //                             src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-4699.jpg?w=740&t=st=1665516210~exp=1665516810~hmac=85318f796231f540a55591f8e16725618e4dd8c84db2f4594c40ce071dbe52b6"
        //                             alt="image"
        //                             className="w-full"
        //                         />

        //                     </div>
        //                     <div>

        //                         <h3>
        //                             <Link
        //                                 to="/blog1"
        //                                 className="
        //                 font-semibold
        //                 text-xl
        //                 sm:text-2xl
        //                 lg:text-xl
        //                 xl:text-2xl
        //                 mb-4
        //                 inline-block
        //                 text-dark
        //                 hover:text-primary
        //                 "
        //                             >
        //                                 What is cors?
        //                             </Link>
        //                         </h3>
        //                         <p className="text-base text-body-color">
        //                             What is CORS? CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        //                 <div className="max-w-[370px] mx-auto mb-10">
        //                     <div className="rounded overflow-hidden mb-8">
        //                         <img
        //                             src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1665516888~exp=1665517488~hmac=f856df244607f8e5c907d3c313aa05739817c89f94d5adfe5298132669ce61b0"
        //                             alt="image"
        //                             className="w-full"
        //                         />
        //                     </div>
        //                     <div>

        //                         <h3>
        //                             <Link
        //                                 to="/blog1"
        //                                 className="
        //                 font-semibold
        //                 text-xl
        //                 sm:text-2xl
        //                 lg:text-xl
        //                 xl:text-2xl
        //                 mb-4
        //                 inline-block
        //                 text-dark
        //                 hover:text-primary
        //                 "
        //                             >
        //                                 what is node ? how does node work .
        //                             </Link>
        //                         </h3>
        //                         <p className="text-base text-body-color">
        //                             Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        //                 <div className="max-w-[370px] mx-auto mb-10">
        //                     <div className="rounded overflow-hidden mb-8">
        //                         <img
        //                             src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1665516888~exp=1665517488~hmac=f856df244607f8e5c907d3c313aa05739817c89f94d5adfe5298132669ce61b0"
        //                             alt="image"
        //                             className="w-full"
        //                         />
        //                     </div>
        //                     <div>

        //                         <h3>
        //                             <Link
        //                                 to="/blog2"
        //                                 className="
        //                 font-semibold
        //                 text-xl
        //                 sm:text-2xl
        //                 lg:text-xl
        //                 xl:text-2xl
        //                 mb-4
        //                 inline-block
        //                 text-dark
        //                 hover:text-primary
        //                 "
        //                             >
        //                                 why are you using firebase? What other options do you have to implement authentication?
        //                             </Link>
        //                         </h3>
        //                         <p className="text-base text-body-color">

        //                             Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
        //                             what other option implement authentication without firebase?

        //                             1. Ory.
        //                             2. Supabase.
        //                             3. Okta.
        //                             4.  PingIdentity.
        //                             5.  Keycloak.
        //                             6.  Frontegg.
        //                             7.   Authress.
        //                             8.    STYTCH,
        //                             9.Auth0.
        //                             10. Conclusion.
        //                             11. OneLogin.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        //                 <div className="max-w-[370px] mx-auto mb-10">
        //                     <div className="rounded overflow-hidden mb-8">
        //                         <img
        //                             src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=740&t=st=1665516912~exp=1665517512~hmac=26203cdace1c4ab509ac56241453491263fce7c53e79f6f99e9742eed95864dc"
        //                             alt="image"
        //                             className="w-full"
        //                         />
        //                     </div>
        //                     <div>

        //                         <h3>
        //                             <Link
        //                                 to="/blog3"
        //                                 className="
        //                 font-semibold
        //                 text-xl
        //                 sm:text-2xl
        //                 lg:text-xl
        //                 xl:text-2xl
        //                 mb-4
        //                 inline-block
        //                 text-dark
        //                 hover:text-primary
        //                 "
        //                             >
        //                                 How does the private route work?
        //                             </Link>
        //                         </h3>
        //                         <p className="text-base text-body-color">
        //                             The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Blog;
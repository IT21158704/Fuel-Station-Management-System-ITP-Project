export default function LandingpPage(){
    return(
        <section class="vh-100">
            <div class="container-fluid">
                <div class="row">
                <div class="col-sm-6 px-0 d-none d-sm-block">
                    <img className="h-100" alt="Sample image" src={require('./img/img2.jpg')} />
                </div>

                
                <div class="col-sm-6 text-black">

                <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="align-items-center">
                            <a href='/PaySheet'><div class="pt-1 mb-4">
                                    <button class="btn btn-outline-danger btn-lg btn-block" type="submit">Get Started</button>
                                </div></a>
                            </div>
                        </div>
                        <div class="mt-auto p-2 bd-highlight"><a href='/login'>Admin Login</a></div>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}
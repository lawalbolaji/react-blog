import React from 'react';

function login(){
    return (
        <div class="container mt-5 pt-5">
            <main>
                <div class="py-3 text-center">
                <h2>Login</h2>
                </div>
            
                <div class="row g-5">
                    <div class="col-3"></div>
                    <div class="col-6 py-0 mb-5">
                        <form class="needs-validation" novalidate>
                            <div class="row g-3">

                            <div class="col-12">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                <div class="invalid-feedback">
                                    Please enter a valid email address.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="password" class="form-label">Paasword</label>
                                <input type="password" class="form-control" id="password" placeholder="password" />
                                <div class="invalid-feedback">
                                    Please enter a valid password.
                                </div>
                            </div>
                
                            <div class="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>

                            </div>
                    
                            <button class="w-100 btn btn-primary btn-lg" type="submit">Login</button>
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>

            </main>

        </div>    

    );
}

export default login;
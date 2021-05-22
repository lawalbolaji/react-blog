import React from 'react';

function Register(){
    return (
        <div class="container pt-5 mt-5">
            <main>
                <div class="py-3 text-center">
                <h2>Register</h2>
                </div>
            
                <div class="row g-5">
                    <div class="col-3"></div>
                    <div class="col-6 py-0 mb-5">
                        <form class="needs-validation" novalidate>
                        <div class="row g-3">
                            <div class="col-sm-6">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                            </div>
                
                            <div class="col-sm-6">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                            </div>

                            <div class="col-12">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                <div class="invalid-feedback">
                                    Please enter a valid email address.
                                </div>
                            </div>
                
                            <div class="col-sm-6">
                                <label for="username" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text">@</span>
                                    <input type="text" class="form-control" id="username" placeholder="Username" required />
                                    <div class="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <label for="phone_number" class="form-label">Phone Number</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text">+234</span>
                                    <input type="number" class="form-control" id="phone_number" placeholder="Phone Number" required />
                                    <div class="invalid-feedback">
                                        Valid Phone Number is required.
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-12">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="password" />
                                <div class="invalid-feedback">
                                    Please enter a valid password.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="repeat_password" class="form-label">Repeat Password</label>
                                <input type="password" class="form-control" id="repeat_password" placeholder="password" />
                                <div class="invalid-feedback">
                                    Please enter a matching password.
                                </div>
                            </div>

                            <div class="col-md-5">
                            <label for="country" class="form-label">Country</label>
                            <select class="form-select" id="country" required>
                                <option value="">Choose...</option>
                                <option>Nigeria</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                            </div>
                
                            <div class="col-md-4">
                            <label for="state" class="form-label">State</label>
                            <select class="form-select" id="state" required>
                                <option value="">Choose...</option>
                                <option>Kwara</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                            </div>
                
                            <div class="col-md-3">
                            <label for="zip" class="form-label">City</label>
                            <select class="form-select" id="state" required>
                                <option value="">Choose...</option>
                                <option>Ilorin</option>
                            </select>
                            </div>
                        </div>
                
                        <button class="w-100 btn btn-primary btn-lg" type="submit">Create Account</button>
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>

            </main>

        </div>    

    );
}

export default Register;
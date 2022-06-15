import React from 'react';

const FormsPage = () => {
    return (
        <div className="usa-section">
            <div className="grid-container">
                <div className="grid-row grid-gap">
                    <div className="usa-layout-docs__sidenav desktop:grid-col-3">
                        
                    </div>

                    <main className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs" id="main-content">
                        <h2>Forms</h2>

                        <p className="usa-intro">No javascript.</p>

                        <h3>Example 1: Login</h3>

                       <form className="usa-form">
                            <fieldset className="usa-fieldset">
                                <legend className="usa-legend">Sign in</legend>
                                <span>or <a href="https://goraft.tech">create an account</a></span>

                                <label className="usa-label" for="username">Username or email address</label>
                                <input className="usa-input" id="username" name="username" type="text" autocapitalize="off" autocorrect="off" />

                                <label className="usa-label" for="password-sign-in">Password</label>
                                <input className="usa-input" id="password-sign-in" name="password" type="password" />
                                <p className="usa-form__note">
                                <a title="Show password" href="https://goraft.tech"
                                    className="usa-show-password"
                                    aria-controls="password-sign-in">Show password</a>
                                </p>

                                <input className="usa-button" type="submit" value="Sign in" />
                                <p>
                                    <a href="https://goraft.tech" title="Forgot username">
                                        Forgot username?
                                    </a>
                                </p>
                                <p>
                                    <a href="https://goraft.tech" title="Forgot password">
                                        Forgot password?
                                    </a>
                                </p>
                            </fieldset>
                        </form>

                        <h3>Example 2: character counter</h3>

                        <form className="usa-form">
                            <div className="usa-character-count">
                                <div className="usa-form-group">
                                <label className="usa-label" for="with-hint-input">
                                    Text input
                                </label>
                                <span id="with-hint-input-hint" className="usa-hint">
                                    This is an input with a character counter.
                                </span>
                                <input className="usa-input usa-character-count__field" id="with-hint-input" maxlength="25" name="with-hint-input" aria-describedby="with-hint-input-info with-hint-input-hint" />
                                </div>
                                <span id="with-hint-input-info" className="usa-hint usa-character-count__message" aria-live="polite">
                                You can enter up to 25 characters
                                </span>
                            </div>
                        </form>

                        <h3>Example 3: validation</h3>

                        <form className="usa-form">
                            <fieldset className="usa-fieldset">
                                <legend className="usa-legend">Enter a code</legend>
                                <div className="usa-alert usa-alert--info usa-alert--validation">
                                <div className="usa-alert__body">
                                    <h3 className="usa-alert__heading">Code requirements</h3>
                                    <ul className="usa-checklist" id="validate-code">
                                        <li className="usa-checklist__item usa-checklist__item--checked" data-validator="uppercase">Use at least one uppercase character</li>
                                        <li className="usa-checklist__item" data-validator="numerical">Use at least one number</li>
                                    </ul>
                                </div>
                                </div>
                                <label className="usa-label" for="code">Code</label>
                                <input className="usa-input" id="code" name="code" type="text"
                                aria-describedby="validate-code"
                                data-validate-uppercase="[A-Z]"
                                data-validate-numerical="\d"
                                data-validation-element="#validate-code" />
                                <input className="usa-button" type="submit" value="Submit code" />
                            </fieldset>
                        </form>
                    </main>
                </div>
            </div>
        </div> 
    );
   
             
    
}

export default FormsPage;

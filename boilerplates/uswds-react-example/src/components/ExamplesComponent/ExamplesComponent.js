import React from 'react';
import { Link } from 'react-router-dom';

const ExamplesComponent = () => (
    <section>

        <p className="usa-intro">Other types of elements using the USWDS.</p>

        <ul className="usa-list">
            <li>
                <Link
                    to="/forms"
                    ascustom={Link}
                    variant="external"
                    target="_blank"
                >
                    Forms
                </Link>
            </li>
            <li>
                <Link
                    to="/modals"
                    ascustom={Link}
                    variant="external"
                    target="_blank"
                >
                    Modals
                </Link>
            </li>
        </ul>
    </section>
);

export default ExamplesComponent;
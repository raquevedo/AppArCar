import react from 'react';
import '../App/App.css';

function alertFail(failalert){
    return(
        <div>
            <div id={failalert ? 'failalerton' : 'failalertoff'} class="callout alert">
                <h5>Missing fields to complete</h5>
            </div>
        </div>
    );
}
export {alertFail};
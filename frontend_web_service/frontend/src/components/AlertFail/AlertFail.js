import react from 'react';
import '../App/App.css';

function AlertFail(props){
    return(
        <div>
            <div id={props.failalert ? 'failalerton' : 'failalertoff'} class="callout alert">
                <h5>Missing fields to complete</h5>
            </div>
        </div>
    );
}
export default AlertFail;
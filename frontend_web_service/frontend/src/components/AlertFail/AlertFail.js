import react from 'react';
import '../App/App.css';

function AlertFail(props){
    return(
        <div>
            <div id={props.failAlert ? 'fail-alert-on' : 'fail-alert-off'} class="callout alert">
                <h5>Missing fields to complete</h5>
            </div>
        </div>
    );
}
export default AlertFail;
import React from "react";
import PropTypes from 'prop-types';

import * as styles from './report.component.module.css';

export default function Report(props) {

    const { 
        index,
        report: {
            id, 
            state, 
            payload: { 
                reportType,
                message = ''
            } = {}
        },
        block,
        resolve
    } = props;

    return (
        <div className={styles.report}>
            <div className={`${styles.reportColumn} ${styles.wideColumn}`}>
                <div>Id: {id}</div>
                <div>State: {state}</div>
                <a className={styles.reportDetailsLink} href="#">Details</a>
            </div>
            <div className={`${styles.reportColumn} ${styles.wideColumn}`}>
                <div>Type: {reportType}</div>
                <div>Message: {message}</div>
            </div>
            <div className={`${styles.reportColumn} ${styles.smallColumn}`}>
                <button onClick={() => block(index, id)}>Block</button>
                <button onClick={() => resolve(index, id)}>Resolve</button>
            </div>
        </div>
    );
}

// const report = {
//     id: PropTypes.number, 
//     state: PropTypes.string, 
//     payload: { 
//         reportType: PropTypes.string,
//         message: PropTypes.string
//     } = {},
//     block: PropTypes.func,
//     resolve: PropTypes.func
// };

Report.propTypes = {
    index: PropTypes.number,
    report: PropTypes.object
};
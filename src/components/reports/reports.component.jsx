import React, { useState, useEffect } from "react";

import Report from '../report/report.component';
import { getReports, blockReport, resolveReport } from '../../services/report.service';

import styles from './reports.component.module.scss';
import * as CONSTANT from '../../app.constant';

export default function Reports() {
    const [reports, setReports] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getReports(CONSTANT.API.reports)
            .then((data) => {
                setReports(data);
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e)
            });
    }, []);
    
    const block = (index, id) => {
        setLoading(true);

        blockReport(`${CONSTANT.API.updateReportState}/${id}`)
            .then((response) => {
                console.log('block', response)
                setReports([
                    ...reports.slice(0, index), 
                    ...reports.slice(index + 1)]
                );
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
            });
    };

    const resolve = (index, id) => {
        setLoading(true);

        resolveReport(`${CONSTANT.API.updateReportState}/${id}`)
            .then((response) => {
                console.log('resolve', response);
                setReports([
                    ...reports.slice(0, index), 
                    ...reports.slice(index + 1)]
                );
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
            });
    };

    return (
        <div className={styles.reports}>
            <h3>Reports: {reports.length}</h3>
            { isLoading && <h4>Loading...</h4> }

            {!isLoading && reports.map((report, index) => (
                <Report 
                    key={index} 
                    index={index}
                    report={report} 
                    block={block} 
                    resolve={resolve}
                />
            ))}
        </div>
    );
}
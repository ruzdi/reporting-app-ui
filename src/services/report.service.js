import { doGet, doPut } from './api.service';

const getReports = async (url) => {
    let response = await doGet(url);
    const reports = response || [];

    return reports;
};

const resolveReport = async (url) => {
    console.log('resolveReport reports');

    let response = await doPut(url, { "ticketState": "CLOSED" });
    console.log('response : ', response);
};

const blockReport = async (url) => {
    console.log('blockReport reports');

    let response = await doPut(url, { "ticketState": "BLOCKED" });
    console.log('response : ', response);
};

export {
    getReports,
    resolveReport,
    blockReport
};

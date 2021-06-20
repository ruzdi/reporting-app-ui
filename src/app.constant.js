export const STATE = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED',
    BLOCKED: 'BLOCKED'
};

const BASE_PATH = 'http://localhost:8080';

export const API = {
    reports: `${BASE_PATH}/reports`,
    updateReportState: `${BASE_PATH}/reports`
};
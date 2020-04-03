
export const reportApi = {
    createReport,
    getReports,
    changeStatus,
    submitComment,
    submitRating
};

function createReport(axios, jsonRequest)
{
    // const formData = new FormData();
    // formData.append('img', img);

    return axios.post('/users/report', jsonRequest, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then( response =>  response ? response.data : null)
        .catch( err => err);
}


function getReports(axios, jsonRequest)
{
    return axios.get('/users/report/list', jsonRequest)
        .then( response =>  response ? response.data : null)
        .catch( err => err);
}


function changeStatus(axios, jsonRequest)
{
    return axios.post('/users/report/changeState', jsonRequest)
        .then( response =>  response ? response.data : null)
        .catch( err => err);
}

function submitComment(axios, jsonRequest)
{
    return axios.post('/users/comment', jsonRequest)
        .then( response =>  response ? response.data : null)
        .catch( err => err);
}

function submitRating(axios, jsonRequest)
{
    return axios.post('/users/report/rate', jsonRequest)
        .then( response =>  response ? response.data : null)
        .catch( err => err);
}
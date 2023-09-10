async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from API');
        }, 1000);
    });
}

module.exports = fetchData;
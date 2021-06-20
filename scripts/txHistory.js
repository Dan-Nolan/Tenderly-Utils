const api = require('../common/api');
const { accountId, projectSlug, forkId } = require('../common/config');

const txHistoryUrl = `/${accountId}/project/${projectSlug}/fork/${forkId}/transactions?page=1&perPage=20`;

(async () => {
    const response = await api.get(txHistoryUrl);

    console.log(response.data.fork_transactions);
})();

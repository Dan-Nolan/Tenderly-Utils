const api = require('../common/api');
const { accountId, projectSlug } = require('../common/config');

const balanceUrl = `/account/${accountId}/project/${projectSlug}/fork/${forkId}/balance`;
const address = ""; // TODO: add address

(async () => {
    const response = await api.post(balanceUrl, {
      accounts: [address]
    });

    console.log(response);
})();

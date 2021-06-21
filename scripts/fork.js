const api = require('../common/api');
const { accountId, projectSlug } = require('../common/config');

const forkUrl = `/account/${accountId}/project/${projectSlug}/fork`;

(async () => {
  const response = await api.post(forkUrl, { network_id: "1" });

  console.log(response);
})();

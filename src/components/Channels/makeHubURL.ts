/* eslint-disable no-restricted-globals */
const standardHubId: RegExp = /\/[a-zA-Z]{7}\//;
const customHubId: RegExp = /\/[a-zA-Z]{7}\?/;
const localHubId: RegExp = /hub_id=[a-zA-Z]{7}/;

export default function makeHubURL(hubId: string): string {
  if (standardHubId.test(location.href)) {
    return location.href.replace(standardHubId, `/${hubId}/`);
  }
  if (customHubId.test(location.href)) {
    return location.href.replace(customHubId, `/${hubId}?`);
  }
  if (localHubId.test(location.href)) {
    return location.href.replace(localHubId, `hub_id=${hubId}`);
  }
  return hubId;
}

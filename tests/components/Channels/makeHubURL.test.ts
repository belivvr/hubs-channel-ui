import makeHubURL from '../../../src/components/Channels/makeHubURL';
import { mockLocationHref } from '../../testUtils';

beforeEach(() => {
  mockLocationHref({ href: 'http://locahost' });
});

describe('makeHubURL', () => {
  const givenHubId: string = 'unknown';

  context('When current page is standard hub URL', () => {
    it('Should returns hub URL', () => {
      mockLocationHref({ href: 'https://hubs.mozilla.com/eTDzkRg/snappy-bleak-camp' });

      expect(makeHubURL(givenHubId)).toBe(`https://hubs.mozilla.com/${givenHubId}/snappy-bleak-camp`);
    });
  });

  context('When current page is custom hub URL', () => {
    it('Should returns hub URL', () => {
      mockLocationHref({ href: 'https://hubs.mozilla.com/eTDzkRg?avatarId=AZY2rHS' });

      expect(makeHubURL(givenHubId)).toBe(`https://hubs.mozilla.com/${givenHubId}?avatarId=AZY2rHS`);
    });
  });

  context('When current page is local hub URL', () => {
    it('Should returns hub URL', () => {
      mockLocationHref({ href: 'https://hubs.local:4000/hub?hub_id=eTDzkRg' });
      
      expect(makeHubURL(givenHubId)).toBe(`https://hubs.local:4000/hub?hub_id=${givenHubId}`);
    });
  });

  context('When current page is no case in function', () => {
    it('Should returns given hub id', () => {
      mockLocationHref({ href: 'https://hubs.mozilla.com/spoke' });
      
      expect(makeHubURL(givenHubId)).toBe(givenHubId);
    });
  });
});

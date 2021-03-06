# Hubs Channel UI

![Belivvr logo](https://avatars.githubusercontent.com/u/40684200?s=200&v=4)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

[![codecov](https://codecov.io/gh/belivvr/hubs-channel-ui/branch/main/graph/badge.svg?token=YPOW3WC158)](https://codecov.io/gh/belivvr/hubs-channel-ui)

---

## Introduce

This library add channel UI in [mozilla/hubs](https://github.com/mozilla/hubs)  

## Install

```bash
npm i @belivvr/hubs-channel-ui --legacy-peer-deps
```

- Find `package-lock.json` in `@belivvr/hubs-channel-ui` part and copy
- Revert `package-lock.json` and paste `@belivvr/hubs-channel-ui` part

## Usage

Add `hub.js` in under code.

```tsx
import { Sidebar } from "./sidebar/Sidebar";
import { CloseButton } from "./input/CloseButton";

import {
  ChannelContainer,
  ChannelsButton,
  LightThemeIcon,
  DarkThemeIcon,
} from "@belivvr/hubs-channel-ui";
```

### ChannelContainer

Find `hub.js` in `this.state.sidebarId ? (` and paste under this

```tsx
function handleClickPrivateChannelButton(channel) {
  // if you want to use private channel...
}

// ...

{this.state.sidebarId === "channels" && (
  <ChannelContainer
    Sidebar={Sidebar}
    CloseButton={CloseButton}
    data={data}
    usePrivateChannel={usePrivateChannel}
    error={isPrivateChannelError}
    onClose={() => this.setSidebar(null)}
    onClickPrivateChannelButton={handleClickPrivateChannelButton}
  />
)}
```

### ChannelsButton

Find `hub.js` in `toolbarCenter={` and paste under this

```tsx
{entered && (
  <ChannelsButton
    ToolbarButton={ToolbarButton}
    onClick={() => this.toggleSidebar("channels")}
    LightThemeIcon={<img src={LightThemeIcon} alt="" />}
    DarkThemeIcon={<img src={DarkThemeIcon} alt="" />}
  />
)}
```

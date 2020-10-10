var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");

var mailColorize = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      mailColorize: {
        async colorizeMailList() {
          // implementation
        }
      }
    }
  }
};

var freeDiskSpacePlugin = {
  get: function(successCallback, errorCallback) {
    cordova.exec(
      successCallback,
      errorCallback,
      'FreeDiskSpacePlugin',
      'get', []
    );
  }
};

module.exports = freeDiskSpacePlugin;

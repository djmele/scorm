
// Minimal SCORM 1.2 wrapper: Find API and call LMSInitialize/LMSFinish/LMSSetValue/LMSCommit.
// This is not a full robust library; it's a simple educational wrapper.
var SCORM = (function(){
  function findAPI(win){
    try{
      if(win.API) return win.API;
      if(win.parent && win.parent !== win) return findAPI(win.parent);
    }catch(e){}
    return null;
  }
  var API = findAPI(window);
  return {
    initialized:false,
    init: function(){
      if(!API) return false;
      var res = API.LMSInitialize("");
      this.initialized = (res.toString() === "true");
      return this.initialized;
    },
    finish: function(){
      if(!API || !this.initialized) return false;
      API.LMSCommit("");
      var res = API.LMSFinish("");
      this.initialized = false;
      return (res.toString() === "true");
    },
    set: function(key,value){
      if(!API || !this.initialized) return false;
      return (API.LMSSetValue(key, String(value)) === "true");
    },
    get: function(key){
      if(!API || !this.initialized) return null;
      return API.LMSGetValue(key);
    },
    commit: function(){ if(API && this.initialized) API.LMSCommit(""); }
  };
})();

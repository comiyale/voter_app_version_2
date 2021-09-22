import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";

//Load Vuex
Vue.use(Vuex);

const moduleTodos = {
  state: {
    todos: [
      {
        id: 1,
        title: "Todo One"
      },
      {
        id: 2,
        title: "Todo two"
      }
    ]
  },
  getters: {
    allTodos: state => {
      return state.todos;
    },
    countTodos: state => {
      return state.todos.length;
    }
  },
  actions: {},
  mutation: {
    increment(state) {
      state.count++;
    }
  }
};

// LeftNav store
const moduleLeftNavDrawer = {
  state: {
    count: 1500,
    leftDrawer: true
  },
  getter: {
    leftDrawer: state => {
      return state.leftDrawer;
    },
    count: state => {
      return state.count;
    }
  },
  setter: {
    leftDrawer: state => {
      !state.leftDrawer;
    }
  },
  mutations: {
    toogleLeftDrawer(state) {
      let tempState = state.leftDrawer;
      state.leftDrawer = !tempState;
    }
  }
};

// Commons store
const moduleCommons = {
  state: {
    appName: "Inec App",
    currentYear: new Date(),
    copyright: ""
  },
  getter: {
    currentYear: state => {
      return state.currentYear.getFullYear();
    },
    appName: state => {
      return state.appName;
    },
    copyright: state => {
      return (state.copyright =
        state.appName + " &copy; " + state.currentYear.getFullYear());
    }
  },
  setter: {},
  mutations: {}
};

// Url store
const urlCommons = {
  state: {
    // baseUrl: "http://134.209.18.95:8000/apiv1/",
    // baseUrlAuth: "http://134.209.18.95:8000/auth/",
    // siteUrl: "http://apptest.corporate-setup.com/",
    // serverUrl: "http://134.209.18.95:8000/",
    //baseUrl: "http://localhost/VotersApi/",
    baseUrl: "https://inecvotersapi.azurewebsites.net/api/v1/",
    baseUrlAuth: "http://localhost:9000/auth/",
    siteUrl: "http://localhost:8080/",
    serverUrl: "http://localhost:9000/",
    scanFingerBase: "https://localhost:8443/",
    scanFingerUrl: "https://localhost:8443/SGIFPCapture",
    adLoginUrl: "login",
    inecUserLogin: "login/inecUser",
    voterUserLogin: "login/voter",
    voterRegistrationUrl: "user/register",
    validateVoter: "user/validateVoter",
    getAllVoters: "user/getAllUsers",
    getLocalElections: "election/getAllLocalElections",
    getStateElections: "election/getAllStateElections",
    getFederalElections: "election/getAllFederalElections",
    vote: "election/vote",
    getLocalElectionResult: "election/getLocalElectionResult",
    getStateElectionResult: "election/getStateElectionResult",
    getFederalElectionResult: "election/getFederalElectionResult",
    // signupUrl: "user/register",
    getUserByEmailUrl: "user/getUserByEmail/",
    getUserByNameUrl: "getUserByName/",
    updateUserUrl: "updateUser/",
    confirmEmailUrl: "confirmEmail/",
    getActiveDocumentTypeUrl: "getActiveDocumentType",
    uploadDocumentUrl: "uploadDocument",
    getUserDocumentsUrl: "getUserDocuments/",
    updateUserDocumentUrl: "updateUserDocument",
    getAllActiveDocumentExpirationUrl: "getAllActiveDocumentExpiration",
    getAllActiveTrainingWithFilesUrl: "getAllActiveTrainingWithFiles",
    getTrainingByIDUrl: "getTrainingByID"
  },
  getter: {
    baseUrl: state => {
      return state.baseUrl;
    }
  },
  setter: {},
  mutations: {}
};

// Main store
export default new Vuex.Store({
  state: {
    token: null,
    createdBy: "sheriff.olaboye",
    redirectTimeout: 2000,
    alertTimeout: 7000,
    alertLongTimeout: 12000,
    allowedUploadLimit: 2000000,
    documentPopupWindowWidth: 800,
    documentPopupWindowHeight: 500,
    setTokenLocalStorageKey: "token",
    setIsLoginLocalStorageKey: "isLogin",
    setIsLoginAsVoterLocalStorageKey: "isLoginAsVoter",
    setEmailLocalStorageKey: "email",
    setMobileLocalStorageKey: "mobile",
    setOTPLocalStorageKey: "OTP",
    successCode: "00",
    successMessage: "SUCCESSFUL",
    appName: "Inec App",
    documentStatusOptions: ["ACTIVE", "NOT ACTIVE"],
    pdpLogoUrl: "/assets/images/pdp.png",
    apcLogoUrl: "/assets/images/apc.png",
    zlpLogoUrl: "/assets/images/zlp.jpeg"
  },
  getter: {
    createdBy: state => {
      return state.createdBy;
    },
    alertTimeout: state => {
      return state.alertTimeout;
    }
  },
  setter: {},
  mutations: {
    setToken(state, value) {
      console.log("setToken mutation call");
      state.token = value;
    },
    setIsLogin(state, value) {
      console.log("setIsLogin mutation call");
      state.isLogin = value;
    }
  },
  actions: {},
  modules: {
    todosStore: moduleTodos,
    leftNavDrawerStore: moduleLeftNavDrawer,
    commonStore: moduleCommons,
    urlStore: urlCommons
  }
});

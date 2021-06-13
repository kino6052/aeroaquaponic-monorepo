(this["webpackJsonptree-of-abstraction"] = this["webpackJsonptree-of-abstraction"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap);"]);
// Module
exports.push([module.i, "html,\r\nbody {\r\n  color: white;\r\n  font-family: \"Source Code Pro\";\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n* {\r\n  transition: 0.5s;\r\n}\r\n\r\np,\r\na,\r\nb,\r\ni {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bridge */ "./src/bridge.ts");
/* harmony import */ var _components_CollectionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CollectionContainer */ "./src/components/CollectionContainer.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Loader */ "./src/components/Loader.tsx");
/* harmony import */ var _components_TreeContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TreeContainer */ "./src/components/TreeContainer.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");

var _jsxFileName = "C:\\Users\\Kirill\\Documents\\Repos\\aeroaquaponic-monorepo\\misc\\tree-of-abstraction\\src\\App.tsx";







function App() {
  var _useSharedState = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["useSharedState"])(_bridge__WEBPACK_IMPORTED_MODULE_3__["StateSubject"]),
      _useSharedState2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSharedState, 1),
      state = _useSharedState2[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, state.isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Loader__WEBPACK_IMPORTED_MODULE_5__["Loader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }), state.route === _bridge__WEBPACK_IMPORTED_MODULE_3__["ERoute"].Collection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_CollectionContainer__WEBPACK_IMPORTED_MODULE_4__["CollectionContainer"], {
    state: state,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_TreeContainer__WEBPACK_IMPORTED_MODULE_6__["TreeContainer"], {
    state: state,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })));
}

/***/ }),

/***/ "./src/bridge.ts":
/*!***********************!*\
  !*** ./src/bridge.ts ***!
  \***********************/
/*! exports provided: Id, Scope, RootId, ERoute, initialState, initialCollectionState, initialLoadingState, StateSubject, sequence, getSequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Id", function() { return Id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootId", function() { return RootId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERoute", function() { return ERoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCollectionState", function() { return initialCollectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialLoadingState", function() { return initialLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateSubject", function() { return StateSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSequence", function() { return getSequence; });
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/main.service */ "./src/services/main.service.ts");
/* harmony import */ var _services_collection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/collection.service */ "./src/services/collection.service.ts");
/* harmony import */ var _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/EventWrapper */ "./src/utils/EventWrapper.tsx");
/* harmony import */ var _services_shortcuts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/shortcuts.service */ "./src/services/shortcuts.service.ts");
/* harmony import */ var _services_persistence_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/persistence.service */ "./src/services/persistence.service.ts");
/* harmony import */ var _services_browser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/browser.service */ "./src/services/browser.service.ts");
/* harmony import */ var _services_browser_service__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_services_browser_service__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");










var Id;

(function (Id) {
  Id["AddItemInput"] = "add-item-input";
  Id["Item"] = "item-element";
  Id["SearchItemsInput"] = "search-items-input";
  Id["Note"] = "note-element";
  Id["NoteTitle"] = "note-title";
  Id["NoteDescription"] = "note-description";
  Id["SearchNotesInput"] = "search-notes-input";
  Id["Keyboard"] = "keyboard";
  Id["Collection"] = "collection-element";
  Id["Save"] = "save-io";
  Id["Load"] = "load-io";
  Id["State"] = "collections-io";
  Id["Tree"] = "tree-io";
})(Id || (Id = {}));

var Scope = ["tree", "notes"];
var RootId = "".concat(Id.Item, "-root");
var ERoute;

(function (ERoute) {
  ERoute["Collection"] = "Collection";
  ERoute["Tree"] = "Tree";
})(ERoute || (ERoute = {}));

var RootNode = {
  id: RootId,
  children: [],
  notes: [],
  isCollapsed: false,
  isHighlighted: false,
  isEditable: false,
  parent: "",
  title: "ROOT",
  indent: 0
};
var initialState = {
  isLoading: false,
  // Routing
  route: ERoute.Tree,
  collection: {
    collectionNodes: {},
    selectedCollection: "test"
  },
  tree: {
    title: "Tree",
    // Tree
    scope: Scope[0],
    treeNodes: Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, RootId, RootNode),
    tree: [RootId],
    selectedNode: RootId,
    itemSearchInput: "",
    //Notes
    noteNodes: {},
    notes: [],
    selectedNote: "",
    noteSearchInput: ""
  }
};
var initialCollectionState = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialState), {}, {
  route: ERoute.Collection,
  collection: Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialState.collection), {}, {
    selectedCollection: undefined
  })
});
var initialLoadingState = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialCollectionState), {}, {
  isLoading: true
});
var StateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](initialLoadingState);
_utils_EventWrapper__WEBPACK_IMPORTED_MODULE_5__["EventSubject"].subscribe(function (event) {
  var prevState = StateSubject.getValue();
  var newState = Object(_services_main_service__WEBPACK_IMPORTED_MODULE_3__["act"])(prevState)(event);
  console.info(event, newState);
  StateSubject.next(newState);
});
var sequence = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["genericSequence"])(_services_main_service__WEBPACK_IMPORTED_MODULE_3__["act"], initialState);
var getSequence = function getSequence(initialState) {
  return function (inputs) {
    return inputs.reduce(function (acc, input) {
      return Object(_services_main_service__WEBPACK_IMPORTED_MODULE_3__["act"])(acc)(input);
    }, initialState);
  };
};

/***/ }),

/***/ "./src/components/CollectionContainer.tsx":
/*!************************************************!*\
  !*** ./src/components/CollectionContainer.tsx ***!
  \************************************************/
/*! exports provided: CollectionContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionContainer", function() { return CollectionContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");
/* harmony import */ var _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/EventWrapper */ "./src/utils/EventWrapper.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Kirill\\Documents\\Repos\\aeroaquaponic-monorepo\\misc\\tree-of-abstraction\\src\\components\\CollectionContainer.tsx";




var CollectionContainer = function CollectionContainer(props) {
  var state = props.state.collection;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      overflow: "hidden",
      background: "black"
    },
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, Object.values(state.collectionNodes).map(function (entity) {
    var id = entity.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: id,
      style: {
        marginLeft: "32px",
        backgroundColor: entity.isHighlighted && "grey" || "unset"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__["EventWrapper"], {
      key: id,
      id: "".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Collection, "-").concat(id.replace("".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Collection, "-"), "")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, !entity.isEditable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 40
      }
    }, entity.title), entity.isEditable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      autoFocus: true,
      value: entity.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 39
      }
    })));
  })));
};

/***/ }),

/***/ "./src/components/Loader.tsx":
/*!***********************************!*\
  !*** ./src/components/Loader.tsx ***!
  \***********************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Kirill\\Documents\\Repos\\aeroaquaponic-monorepo\\misc\\tree-of-abstraction\\src\\components\\Loader.tsx";


var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      position: "fixed",
      background: "rgba(0, 0, 0, 0.5)",
      color: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Loading..."));
};

/***/ }),

/***/ "./src/components/TreeContainer.tsx":
/*!******************************************!*\
  !*** ./src/components/TreeContainer.tsx ***!
  \******************************************/
/*! exports provided: TreeContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeContainer", function() { return TreeContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");
/* harmony import */ var _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/EventWrapper */ "./src/utils/EventWrapper.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Kirill\\Documents\\Repos\\aeroaquaponic-monorepo\\misc\\tree-of-abstraction\\src\\components\\TreeContainer.tsx";




var TreeContainer = function TreeContainer(props) {
  var _state$notes;

  var state = props.state.tree;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      overflow: "hidden",
      background: "black"
    },
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      opacity: state.scope === "tree" ? "100%" : "50%",
      display: "flex",
      flexDirection: "column",
      width: "50%",
      borderRight: "2px dashed black",
      height: "100%",
      background: "#333",
      overflow: "scroll"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      position: "fixed",
      top: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__["EventWrapper"], {
    id: _bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].SearchItemsInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    autoFocus: true,
    placeholder: "Search",
    value: state.itemSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, state.tree.map(function (id) {
    var node = state.treeNodes[id];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: id,
      style: {
        marginLeft: node.indent * 32,
        backgroundColor: node.isHighlighted && "orange" || node.id === state.selectedNode && "grey" || "unset"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__["EventWrapper"], {
      key: id,
      id: "".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Item, "-").concat(id.replace("".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Item, "-"), "")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, !node.isEditable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 40
      }
    }, node.title), node.isEditable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      autoFocus: true,
      value: node.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 39
      }
    })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, node.isCollapsed ? "(...)" : ""));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      opacity: state.scope === "notes" ? "100%" : "50%",
      flexDirection: "column",
      width: "50%",
      borderRight: "2px dashed black",
      background: "#333",
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      position: "fixed",
      top: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__["EventWrapper"], {
    id: _bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].SearchNotesInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    autoFocus: true,
    placeholder: "Search",
    value: state.noteSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, (_state$notes = state.notes) === null || _state$notes === void 0 ? void 0 : _state$notes.map(function (id) {
    var _state$noteNodes;

    var note = (_state$noteNodes = state.noteNodes) === null || _state$noteNodes === void 0 ? void 0 : _state$noteNodes[id];
    if (!note) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: id,
      style: {
        background: id === state.selectedNote ? "grey" : "unset"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__["EventWrapper"], {
      key: id,
      id: "".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Item, "-").concat(id.replace("".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Note, "-"), "")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, !note.isEditable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 42
      }
    }, note.title), !note.isEditable && !note.isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 23
      }
    }, note.description)), note.isEditable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__["EventWrapper"], {
      id: "".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].NoteTitle, "-").concat(id.replace("".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Note, "-"), "")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: note.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 23
      }
    })), note.isEditable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__["EventWrapper"], {
      id: "".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].NoteDescription, "-").concat(id.replace("".concat(_bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Note, "-"), "")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: note.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 23
      }
    }))));
  }))));
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
var _jsxFileName = "C:\\Users\\Kirill\\Documents\\Repos\\aeroaquaponic-monorepo\\misc\\tree-of-abstraction\\src\\index.tsx";




var rootElement = document.getElementById("root");
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 8
  }
}), rootElement);

/***/ }),

/***/ "./src/services/browser.service.ts":
/*!*****************************************!*\
  !*** ./src/services/browser.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/services/collection.service.ts":
/*!********************************************!*\
  !*** ./src/services/collection.service.ts ***!
  \********************************************/
/*! exports provided: shortcutAddCollection, shortcutUpCollection, shortcutDownCollection, shortcutEnterCollection, shortcutEditCollection, shortcutRemoveCollection, changeCollectionTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutAddCollection", function() { return shortcutAddCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutUpCollection", function() { return shortcutUpCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutDownCollection", function() { return shortcutDownCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutEnterCollection", function() { return shortcutEnterCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutEditCollection", function() { return shortcutEditCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutRemoveCollection", function() { return shortcutRemoveCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCollectionTitle", function() { return changeCollectionTitle; });
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _shortcuts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shortcuts.service */ "./src/services/shortcuts.service.ts");






var shortcutAddCollection = function shortcutAddCollection(state, event) {
  var collectionId = "".concat(_bridge__WEBPACK_IMPORTED_MODULE_3__["Id"].Collection, "-").concat(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].generateId());
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    collectionNodes: Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.collectionNodes), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, collectionId, {
      id: collectionId,
      isEditable: false,
      title: "Collection",
      isHighlighted: false
    }))
  });
};

var getCollectionList = function getCollectionList(state) {
  return Object.values(state.collectionNodes);
};

var shortcutUpCollection = function shortcutUpCollection(state, event) {
  var list = getCollectionList(state);
  var highlightedItemIndex = list.findIndex(function (highlightedItem) {
    return highlightedItem.isHighlighted;
  });
  var newHighlightedItemIndex = (list.length + highlightedItemIndex - 1) % list.length;
  var collectionNodes = list.map(function (item, index) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item), {}, {
      isHighlighted: index === newHighlightedItemIndex
    });
  }).reduce(function (acc, item) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.id, item));
  }, {});
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    collectionNodes: collectionNodes
  });
};
var shortcutDownCollection = function shortcutDownCollection(state, event) {
  var list = getCollectionList(state);
  var highlightedItemIndex = list.findIndex(function (highlightedItem) {
    return highlightedItem.isHighlighted;
  });
  var newHighlightedItemIndex = (list.length + highlightedItemIndex + 1) % list.length;
  var collectionNodes = list.map(function (item, index) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item), {}, {
      isHighlighted: index === newHighlightedItemIndex
    });
  }).reduce(function (acc, item) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.id, item));
  }, {});
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    collectionNodes: collectionNodes
  });
};
var shortcutEnterCollection = function shortcutEnterCollection(state, event) {
  var list = getCollectionList(state);
  var highlightedItemIndex = list.findIndex(function (highlightedItem) {
    return highlightedItem.isHighlighted;
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    selectedCollection: list[highlightedItemIndex].id
  });
};
var shortcutEditCollection = function shortcutEditCollection(state, event) {
  var _event = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(event, 3),
      type = _event[0],
      id = _event[1],
      value = _event[2];

  var isEnter = value === _shortcuts_service__WEBPACK_IMPORTED_MODULE_5__["Shortcut"].Enter;
  var list = getCollectionList(state);
  var highlightedItemIndex = list.findIndex(function (highlightedItem) {
    return highlightedItem.isHighlighted;
  });
  var isEditable = list[highlightedItemIndex].isEditable;
  if (isEnter && !isEditable) return false;
  var collectionNodes = list.map(function (item, index) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item), {}, {
      isEditable: index === highlightedItemIndex ? !item.isEditable : false
    });
  }).reduce(function (acc, item) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.id, item));
  }, {});
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    collectionNodes: collectionNodes
  });
};
var shortcutRemoveCollection = function shortcutRemoveCollection(state, event) {
  var list = getCollectionList(state);
  var highlightedItemIndex = list.findIndex(function (highlightedItem) {
    return highlightedItem.isHighlighted;
  });
  var collectionNodes = list.filter(function (item, index) {
    return index !== highlightedItemIndex;
  }).reduce(function (acc, item) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.id, item));
  }, {});
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    collectionNodes: collectionNodes
  });
};
var changeCollectionTitle = function changeCollectionTitle(state, event) {
  var _event2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(event, 3),
      id = _event2[1],
      value = _event2[2];

  var list = getCollectionList(state);
  var itemIndex = list.findIndex(function (item) {
    return item.id === id;
  });
  var collectionNodes = list.map(function (item, index) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item), {}, {
      title: index === itemIndex ? value : item.title
    });
  }).reduce(function (acc, item) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.id, item));
  }, {});
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    collectionNodes: collectionNodes
  });
};

/***/ }),

/***/ "./src/services/main.service.ts":
/*!**************************************!*\
  !*** ./src/services/main.service.ts ***!
  \**************************************/
/*! exports provided: UndoStack, RedoStack, actTree, actCollection, act */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoStack", function() { return UndoStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedoStack", function() { return RedoStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actTree", function() { return actTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actCollection", function() { return actCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "act", function() { return act; });
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _collection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collection.service */ "./src/services/collection.service.ts");
/* harmony import */ var _note_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note.service */ "./src/services/note.service.ts");
/* harmony import */ var _shortcuts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shortcuts.service */ "./src/services/shortcuts.service.ts");
/* harmony import */ var _tree_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree.service */ "./src/services/tree.service.ts");










var UndoStack = [];
var RedoStack = [];

var toggleScope = function toggleScope(state, event) {
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    scope: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["without"])(_bridge__WEBPACK_IMPORTED_MODULE_4__["Scope"], state.scope)[0]
  });
};

var actTree = function actTree(_state) {
  return function (_ref) {
    var _ref2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 3),
        type = _ref2[0],
        id = _ref2[1],
        value = _ref2[2];

    // console.warn(type, id, value)
    // Shortcuts
    var toggleScopeResult = type === "keydown" && id === _bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].Keyboard && value === _shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].ToggleScope && toggleScope(_state, [type, id, value]);
    var state = toggleScopeResult || _state;

    if (state.scope === "tree") {
      // IO
      var changeItemTitleResult = type === "change" && id.includes(_bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].Item) && Object(_tree_service__WEBPACK_IMPORTED_MODULE_9__["changeItemTitle"])(state, [type, id, value]);
      var clickItemResult = type === "click" && id.includes(_bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].Item) && Object(_tree_service__WEBPACK_IMPORTED_MODULE_9__["clickItem"])(state, [type, id, value]);
      var changeSearchInputResult = type === "change" && id === _bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].SearchItemsInput && Object(_tree_service__WEBPACK_IMPORTED_MODULE_9__["changeSearchInput"])(state, [type, id, value]);
      var undoableTreeResult = // Shortcuts
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compose"])([[_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Add, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutAddItem"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Remove, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutRemoveItem"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].MoveDown, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutMoveDown"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].MoveUp, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutMoveUp"]]])(state, [type, id, value]) || clickItemResult || changeItemTitleResult;

      if (undoableTreeResult) {
        RedoStack.length = 0;
        UndoStack.push(state.treeNodes);
      }

      var nonUndoableTreeResult = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compose"])([[_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Undo, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutUndo"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Redo, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutRedo"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Up, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutUp"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Down, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutDown"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Collapse, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutCollapse"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Enter, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutEnter"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Edit, _tree_service__WEBPACK_IMPORTED_MODULE_9__["shortcutToggleEditItem"]]])(state, [type, id, value]) || // IO
      changeSearchInputResult || state;
      var treeResult = undoableTreeResult || nonUndoableTreeResult;
      return Object(_note_service__WEBPACK_IMPORTED_MODULE_7__["processNotes"])(Object(_tree_service__WEBPACK_IMPORTED_MODULE_9__["process"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, treeResult), {}, {
        treeNodes: Object(_tree_service__WEBPACK_IMPORTED_MODULE_9__["updateHighligted"])(treeResult)
      })));
    } else {
      // IO
      var changeNotesSearchInputResult = type === "change" && id === _bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].SearchNotesInput && Object(_note_service__WEBPACK_IMPORTED_MODULE_7__["changeNotesSearchInput"])(state, [type, id, value]);
      var changeNoteTitleResult = type === "change" && id.includes(_bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].NoteTitle) && Object(_note_service__WEBPACK_IMPORTED_MODULE_7__["changeNoteTitle"])(state, [type, id, value]);
      var changeNoteDescriptionResult = type === "change" && id.includes(_bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].NoteDescription) && Object(_note_service__WEBPACK_IMPORTED_MODULE_7__["changeNoteDescription"])(state, [type, id, value]);
      return Object(_note_service__WEBPACK_IMPORTED_MODULE_7__["processNotes"])(changeNoteTitleResult || changeNoteDescriptionResult || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compose"])([[_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Add, _note_service__WEBPACK_IMPORTED_MODULE_7__["shortcutAddNote"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Up, _note_service__WEBPACK_IMPORTED_MODULE_7__["shortcutUpNote"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Down, _note_service__WEBPACK_IMPORTED_MODULE_7__["shortcutDownNote"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Collapse, _note_service__WEBPACK_IMPORTED_MODULE_7__["shortcutCollapseNote"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Remove, _note_service__WEBPACK_IMPORTED_MODULE_7__["shortcutRemoveNote"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Edit, _note_service__WEBPACK_IMPORTED_MODULE_7__["editNote"]]])(state, [type, id, value]) || changeNotesSearchInputResult || state);
    }
  };
};
var actCollection = function actCollection(state) {
  return function (event) {
    var _event = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(event, 3),
        type = _event[0],
        id = _event[1],
        value = _event[2];

    var changeCollectionTitleResult = type === "change" && id.includes(_bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].Collection) && Object(_collection_service__WEBPACK_IMPORTED_MODULE_6__["changeCollectionTitle"])(state, [type, id, value]);
    var collection = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compose"])([[_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Add, _collection_service__WEBPACK_IMPORTED_MODULE_6__["shortcutAddCollection"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Down, _collection_service__WEBPACK_IMPORTED_MODULE_6__["shortcutDownCollection"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Up, _collection_service__WEBPACK_IMPORTED_MODULE_6__["shortcutUpCollection"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Edit, _collection_service__WEBPACK_IMPORTED_MODULE_6__["shortcutEditCollection"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Enter, _collection_service__WEBPACK_IMPORTED_MODULE_6__["shortcutEditCollection"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Enter, _collection_service__WEBPACK_IMPORTED_MODULE_6__["shortcutEnterCollection"]], [_shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Remove, _collection_service__WEBPACK_IMPORTED_MODULE_6__["shortcutRemoveCollection"]]])(state, event) || changeCollectionTitleResult || state;
    return collection;
  };
};
var act = function act(state) {
  return function (event) {
    var _collection$collectio;

    var _event2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(event, 3),
        type = _event2[0],
        id = _event2[1],
        value = _event2[2]; // Switches


    if (state.isLoading) return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
      isLoading: false
    }); // IO
    else if (id === _bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].State && state.route === _bridge__WEBPACK_IMPORTED_MODULE_4__["ERoute"].Collection) {
        var loadedState = JSON.parse(value);
        var collectionNodes = Object.keys(loadedState).map(function (key) {
          var node = {
            id: key,
            isEditable: false,
            isHighlighted: false,
            title: loadedState[key].title
          };
          return node;
        }).reduce(function (acc, node) {
          return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, node.id, node));
        }, {});
        return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _bridge__WEBPACK_IMPORTED_MODULE_4__["initialLoadingState"]), {}, {
          isLoading: false,
          collection: {
            collectionNodes: collectionNodes
          }
        });
      } else if (id === _bridge__WEBPACK_IMPORTED_MODULE_4__["Id"].State && state.route === _bridge__WEBPACK_IMPORTED_MODULE_4__["ERoute"].Tree && state.collection.selectedCollection) {
        var _tree = JSON.parse(value)[state.collection.selectedCollection];
        return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _bridge__WEBPACK_IMPORTED_MODULE_4__["initialState"]), {}, {
          isLoading: false,
          tree: _tree || _bridge__WEBPACK_IMPORTED_MODULE_4__["initialState"].tree,
          collection: Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.collection)
        });
      }
    var tree = state.route === _bridge__WEBPACK_IMPORTED_MODULE_4__["ERoute"].Tree ? actTree(state.tree)(event) : state.tree;
    var collection = state.route === _bridge__WEBPACK_IMPORTED_MODULE_4__["ERoute"].Collection ? actCollection(state.collection)(event) : state.collection;
    var route = !!collection.selectedCollection ? _bridge__WEBPACK_IMPORTED_MODULE_4__["ERoute"].Tree : _bridge__WEBPACK_IMPORTED_MODULE_4__["ERoute"].Collection;
    var hasRouteChanged = route !== state.route;
    var title = collection.selectedCollection && ((_collection$collectio = collection.collectionNodes[collection.selectedCollection]) === null || _collection$collectio === void 0 ? void 0 : _collection$collectio.title) || "Tree";
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
      route: route,
      tree: Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, tree), {}, {
        title: title
      }),
      collection: collection,
      isLoading: hasRouteChanged
    });
  };
};

/***/ }),

/***/ "./src/services/note.service.ts":
/*!**************************************!*\
  !*** ./src/services/note.service.ts ***!
  \**************************************/
/*! exports provided: shortcutAddNote, shortcutDownNote, shortcutUpNote, shortcutCollapseNote, shortcutRemoveNote, editNote, updateNoteNodes, changeNoteTitle, changeNoteDescription, processNotes, changeNotesSearchInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutAddNote", function() { return shortcutAddNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutDownNote", function() { return shortcutDownNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutUpNote", function() { return shortcutUpNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutCollapseNote", function() { return shortcutCollapseNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutRemoveNote", function() { return shortcutRemoveNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editNote", function() { return editNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNoteNodes", function() { return updateNoteNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNoteTitle", function() { return changeNoteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNoteDescription", function() { return changeNoteDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processNotes", function() { return processNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNotesSearchInput", function() { return changeNotesSearchInput; });
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _tree_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree.service */ "./src/services/tree.service.ts");








var shortcutAddNote = function shortcutAddNote(state, event) {
  var noteId = "".concat(_bridge__WEBPACK_IMPORTED_MODULE_5__["Id"].Note, "-").concat(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].generateId());
  var newNoteNode = {
    description: "Description...",
    title: "Title",
    id: noteId,
    isCollapsed: true,
    isEditable: false,
    isHighlighted: false,
    parents: [state.selectedNode]
  };
  var newTreeNodes = Object(_tree_service__WEBPACK_IMPORTED_MODULE_7__["updateTreeNodes"])(state, function (node) {
    if (node.id === state.selectedNode) {
      return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, node), {}, {
        notes: [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(node.notes), [noteId])
      });
    }

    return node;
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    treeNodes: newTreeNodes,
    selectedNote: newNoteNode.id,
    noteNodes: Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, newNoteNode.id, newNoteNode), state.noteNodes)
  });
};
var shortcutDownNote = function shortcutDownNote(state, event) {
  var notes = state.notes;
  var maxIndex = notes.length;
  var index = state.notes.indexOf(state.selectedNote);
  var newIndex = (index + 1) % maxIndex;
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    selectedNote: notes[newIndex]
  });
};
var shortcutUpNote = function shortcutUpNote(state, event) {
  var notes = state.notes;
  var maxIndex = notes.length;
  var index = state.notes.indexOf(state.selectedNote);
  var newIndex = (maxIndex + index - 1) % maxIndex;
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    selectedNote: notes[newIndex]
  });
};
var shortcutCollapseNote = function shortcutCollapseNote(state, event) {
  var note = state.noteNodes[state.selectedNote];

  var newNoteNodes = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.noteNodes), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.selectedNote, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, note), {}, {
    isCollapsed: !note.isCollapsed
  })));

  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    noteNodes: newNoteNodes
  });
};
var shortcutRemoveNote = function shortcutRemoveNote(state) {
  var selectedNote = state.noteNodes[state.selectedNote];

  var newNoteNodes = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.noteNodes), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.selectedNote, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, selectedNote), {}, {
    parents: []
  })));

  var newTreeNodes = Object(_tree_service__WEBPACK_IMPORTED_MODULE_7__["updateTreeNodes"])(state, function (node) {
    if (selectedNote.parents.includes(node.id)) {
      return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, node), {}, {
        notes: node.notes.filter(function (id) {
          return id !== state.selectedNote;
        })
      });
    }

    return node;
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    noteNodes: newNoteNodes,
    treeNodes: newTreeNodes
  });
};
var editNote = function editNote(state) {
  var selectedNote = state.noteNodes[state.selectedNote];

  var newNoteNodes = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, updateNoteNodes(state, function (note) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, note), {}, {
      isEditable: false
    });
  })), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.selectedNote, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, selectedNote), {}, {
    isEditable: !selectedNote.isEditable
  })));

  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    noteNodes: newNoteNodes
  });
};
var updateNoteNodes = function updateNoteNodes(state, cb) {
  return Object.values(state.noteNodes).map(cb).reduce(function (acc, note) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, note.id, note));
  }, {});
};
var changeNoteTitle = function changeNoteTitle(state, _ref) {
  var _ref2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
      id = _ref2[1],
      value = _ref2[2];

  var newNoteNodes = updateNoteNodes(state, function (note) {
    var isFound = id.replace(_bridge__WEBPACK_IMPORTED_MODULE_5__["Id"].NoteTitle, "") === note.id.replace(_bridge__WEBPACK_IMPORTED_MODULE_5__["Id"].Note, "");
    if (!isFound) return note;
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, note), {}, {
      title: value
    });
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    noteNodes: newNoteNodes
  });
};
var changeNoteDescription = function changeNoteDescription(state, _ref3) {
  var _ref4 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 3),
      id = _ref4[1],
      value = _ref4[2];

  var newNoteNodes = updateNoteNodes(state, function (note) {
    var isFound = id.replace(_bridge__WEBPACK_IMPORTED_MODULE_5__["Id"].NoteDescription, "") === note.id.replace(_bridge__WEBPACK_IMPORTED_MODULE_5__["Id"].Note, "");
    if (!isFound) return note;
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, note), {}, {
      description: value
    });
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    noteNodes: newNoteNodes
  });
};
var processNotes = function processNotes(state) {
  var descendants = [state.selectedNode].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_tree_service__WEBPACK_IMPORTED_MODULE_7__["getDescendants"])(state.selectedNode, state)));
  var newNotes = Object.values(state.noteNodes).reduce(function (acc, note) {
    var intersectionResult = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["intersection"])(descendants, note.parents);
    var isMatch = state.noteSearchInput.length >= 3 && note.title.toLowerCase().includes(state.noteSearchInput.toLowerCase());
    var notFiltered = state.noteSearchInput.length < 3 && intersectionResult.length > 0;
    return isMatch || notFiltered ? [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(acc), [note.id]) : acc;
  }, []);
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    notes: newNotes
  });
};
var changeNotesSearchInput = function changeNotesSearchInput(state, _ref5) {
  var _ref6 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 3),
      value = _ref6[2];

  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
    noteSearchInput: value
  });
};

/***/ }),

/***/ "./src/services/persistence.service.ts":
/*!*********************************************!*\
  !*** ./src/services/persistence.service.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");
/* harmony import */ var _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/EventWrapper */ "./src/utils/EventWrapper.tsx");
/* harmony import */ var _shortcuts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shortcuts.service */ "./src/services/shortcuts.service.ts");








 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyA3kMxazy633uQ4BKTvWYF8hFZEl0PP_as",
  authDomain: "tree-of-abstraction.firebaseapp.com",
  databaseURL: "https://tree-of-abstraction.firebaseio.com",
  projectId: "tree-of-abstraction",
  storageBucket: "tree-of-abstraction.appspot.com",
  messagingSenderId: "161683871914",
  appId: "1:161683871914:web:7cd83dc09d276698c8d8d3",
  measurementId: "G-SPG691QK9Z"
};
firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].initializeApp(firebaseConfig);
var db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database();

var writeCollection = function writeCollection(collectionId, tree, cb) {
  firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref("collection/" + collectionId).set(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, tree)).then(cb).catch(cb);
};

var dbRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref();

var getCollections = function getCollections() {
  return dbRef.child("collection").get().then(function (snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch(function (error) {
    console.error(error);
  });
};

var normalizeState = function normalizeState(state) {
  return Object.entries(state).map(function (_ref) {
    var _ref2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        id = _ref2[0],
        tree = _ref2[1];

    return [id, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, tree), {}, {
      noteNodes: tree.noteNodes || {},
      notes: tree.notes || [],
      tree: tree.tree || [],
      treeNodes: tree.treeNodes && Object.values(tree.treeNodes).map(function (node) {
        return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
          children: node.children || [],
          notes: node.notes || []
        });
      }).reduce(function (acc, node) {
        return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, node.id, node));
      }, {}) || {}
    })];
  }).reduce(function (acc, _ref3) {
    var _ref4 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, 2),
        id = _ref4[0],
        tree = _ref4[1];

    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, id, tree));
  }, {});
};

window.addEventListener("load", function () {
  _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_7__["EventSubject"].subscribe(function (event) {
    var _event = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(event, 3),
        type = _event[0],
        id = _event[1],
        value = _event[2]; // On Save Keydown


    if (type === "keydown" && value === _shortcuts_service__WEBPACK_IMPORTED_MODULE_8__["Shortcut"].Save) {
      _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_7__["EventSubject"].next(["io", _bridge__WEBPACK_IMPORTED_MODULE_6__["Id"].Save, "true"]);
    } // On Save IO
    else if (type === "io" && id === _bridge__WEBPACK_IMPORTED_MODULE_6__["Id"].Save && value === "true") {
        var _StateSubject$getValu = _bridge__WEBPACK_IMPORTED_MODULE_6__["StateSubject"].getValue(),
            selectedCollection = _StateSubject$getValu.collection.selectedCollection,
            tree = _StateSubject$getValu.tree; // Write Collection


        if (selectedCollection) {
          writeCollection(selectedCollection, tree, function () {
            _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_7__["EventSubject"].next(["io", _bridge__WEBPACK_IMPORTED_MODULE_6__["Id"].Save, "false"]);
          }); // Reset Loading State
        } else {
          _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_7__["EventSubject"].next(["io", _bridge__WEBPACK_IMPORTED_MODULE_6__["Id"].Save, "false"]);
        } // On Load IO

      } else if (type === "io" && id === _bridge__WEBPACK_IMPORTED_MODULE_6__["Id"].Load && value === "true") {
        getCollections().then(function (state) {
          console.info(state);
          if (!state) return;
          _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_7__["EventSubject"].next(["io", _bridge__WEBPACK_IMPORTED_MODULE_6__["Id"].State, JSON.stringify(normalizeState(state))]);
        });
      }
  });
  _bridge__WEBPACK_IMPORTED_MODULE_6__["StateSubject"].subscribe(function (state) {
    // Loading Event
    if (state.isLoading) {
      _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_7__["EventSubject"].next(["io", _bridge__WEBPACK_IMPORTED_MODULE_6__["Id"].Load, "true"]);
    }
  });
});

/***/ }),

/***/ "./src/services/shortcuts.service.ts":
/*!*******************************************!*\
  !*** ./src/services/shortcuts.service.ts ***!
  \*******************************************/
/*! exports provided: Shortcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shortcut", function() { return Shortcut; });
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");
/* harmony import */ var _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/EventWrapper */ "./src/utils/EventWrapper.tsx");



var Shortcut;

(function (Shortcut) {
  Shortcut["ToggleScope"] = "alt+shift+t";
  Shortcut["Add"] = "ctrl+shift+a";
  Shortcut["MoveDown"] = "ctrl+down";
  Shortcut["MoveUp"] = "ctrl+up";
  Shortcut["Up"] = "up";
  Shortcut["Down"] = "down";
  Shortcut["Edit"] = "ctrl+shift+e";
  Shortcut["Redo"] = "ctrl+shift+z";
  Shortcut["Undo"] = "ctrl+z";
  Shortcut["Collapse"] = "ctrl+shift+c";
  Shortcut["Enter"] = "enter";
  Shortcut["Remove"] = "delete";
  Shortcut["Save"] = "ctrl+s";
})(Shortcut || (Shortcut = {}));

try {
  hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter = function () {
    return true;
  };

  Object(hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.values(Shortcut).join(","), function (e, handler) {
    e.preventDefault();
    _utils_EventWrapper__WEBPACK_IMPORTED_MODULE_2__["EventSubject"].next(["keydown", _bridge__WEBPACK_IMPORTED_MODULE_1__["Id"].Keyboard, handler.key]);
  });
} catch (e) {
  console.warn("Couldn't initialize keyboard listener");
}

/***/ }),

/***/ "./src/services/tree.service.ts":
/*!**************************************!*\
  !*** ./src/services/tree.service.ts ***!
  \**************************************/
/*! exports provided: getDescendants, getIsDescendant, getParents, updateHighligted, updateTreeNodes, shortcutAddItem, shortcutRemoveItem, clickItem, changeSearchInput, process, shortcutCollapse, changeItemTitle, shortcutToggleEditItem, shortcutEnter, shortcutDown, shortcutMoveDown, shortcutUp, shortcutMoveUp, shortcutUndo, shortcutRedo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescendants", function() { return getDescendants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsDescendant", function() { return getIsDescendant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParents", function() { return getParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHighligted", function() { return updateHighligted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTreeNodes", function() { return updateTreeNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutAddItem", function() { return shortcutAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutRemoveItem", function() { return shortcutRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickItem", function() { return clickItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSearchInput", function() { return changeSearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutCollapse", function() { return shortcutCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeItemTitle", function() { return changeItemTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutToggleEditItem", function() { return shortcutToggleEditItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutEnter", function() { return shortcutEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutDown", function() { return shortcutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutMoveDown", function() { return shortcutMoveDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutUp", function() { return shortcutUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutMoveUp", function() { return shortcutMoveUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutUndo", function() { return shortcutUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutRedo", function() { return shortcutRedo; });
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.service */ "./src/services/main.service.ts");








var getDescendants = function getDescendants(id, state) {
  var node = state.treeNodes[id];
  if (!node) return [];
  return node.children.reduce(function (acc, id) {
    return [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(acc), [id], Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(getDescendants(id, state)));
  }, []);
};
var getIsDescendant = function getIsDescendant(potentialDescendant, potentialParent, state) {
  var descendants = getDescendants(potentialParent, state);
  return [descendants.includes(potentialDescendant), descendants];
};
var getParents = function getParents(id, state) {
  var node = state.treeNodes[id];
  if (!node) return [];
  return [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(getParents(node.parent, state)), [id]);
};
var updateHighligted = function updateHighligted(state) {
  var newTreeNodes = updateTreeNodes(state, function (node) {
    var value = state.itemSearchInput;
    var isHighlighted = !!value && value.length >= 3 && node.title.toLowerCase().includes(value.toLowerCase());
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      isHighlighted: isHighlighted
    });
  });
  return newTreeNodes;
};
var updateTreeNodes = function updateTreeNodes(state, cb) {
  return Object.values(state.treeNodes).map(cb).reduce(function (acc, node) {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc), {}, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, node.id, node));
  }, {});
};
var shortcutAddItem = function shortcutAddItem(state, event) {
  var selectedId = state.selectedNode || _bridge__WEBPACK_IMPORTED_MODULE_5__["RootId"];
  var newNode = {
    children: [],
    id: "".concat(_bridge__WEBPACK_IMPORTED_MODULE_5__["Id"].Item, "-").concat(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].generateId()),
    isCollapsed: false,
    notes: [],
    parent: selectedId,
    title: "title",
    isHighlighted: false,
    isEditable: false,
    indent: state.treeNodes[selectedId].indent + 1
  };
  var parent = state.treeNodes[selectedId];

  var newParent = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parent.id, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, parent), {}, {
    children: [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(parent.children), [newNode.id])
  }));

  var treeNodes = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.treeNodes), newParent), Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, newNode.id, newNode));

  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: treeNodes
  });
};
var shortcutRemoveItem = function shortcutRemoveItem(state, _ref) {
  var _state$treeNodes$node;

  var _ref2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
      id = _ref2[1];

  var nodeId = state.selectedNode;
  var parentId = (_state$treeNodes$node = state.treeNodes[nodeId]) === null || _state$treeNodes$node === void 0 ? void 0 : _state$treeNodes$node.parent;
  var parent = state.treeNodes[parentId];
  if (!parent) return state;
  var index = state.treeNodes[parentId].children.indexOf(nodeId);
  var newTreeNodes = updateTreeNodes(state, function (node) {
    var isFound = node.id === nodeId && node.id !== _bridge__WEBPACK_IMPORTED_MODULE_5__["RootId"];
    var isParent = node.id === parentId;
    if (isParent) return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      children: node.children.filter(function (id) {
        return id !== nodeId;
      })
    });
    if (isFound) return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      parent: ""
    });
    return node;
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    selectedNode: newTreeNodes[parentId].children[Math.max(0, index - 1)] || parentId,
    treeNodes: newTreeNodes
  });
};
var clickItem = function clickItem(state, _ref3) {
  var _ref4 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 3),
      id = _ref4[1],
      value = _ref4[2];

  if (value === "10") {
    var _getIsDescendant = getIsDescendant(id, state.selectedNode, state),
        _getIsDescendant2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_getIsDescendant, 2),
        isDescendant = _getIsDescendant2[0],
        descendants = _getIsDescendant2[1];

    var isDescendantOrSelf = isDescendant || id === state.selectedNode;
    if (isDescendantOrSelf) return state;
    var newTreeNodes = updateTreeNodes(state, function (node) {
      var parentId = state.treeNodes[state.selectedNode].parent; // Update indent of descendants

      if (descendants.includes(node.id)) {
        return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
          indent: state.treeNodes[id].indent + (node.indent - state.treeNodes[state.selectedNode].indent) + 1
        });
      } // Update target node


      if (node.id === id) {
        return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
          children: [state.selectedNode].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(node.children.filter(function (id) {
            return id !== state.selectedNode;
          })))
        });
      } // Update selected node's parent


      if (node.id === parentId) {
        return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
          children: node.children.filter(function (id) {
            return id !== state.selectedNode;
          })
        });
      } // Update selected node parent property


      if (node.id === state.selectedNode) {
        return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
          parent: id,
          indent: state.treeNodes[id].indent + 1
        });
      }

      return node;
    });
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
      treeNodes: newTreeNodes,
      selectedNode: id
    });
  }

  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    selectedNode: id
  });
};
var changeSearchInput = function changeSearchInput(state, _ref5) {
  var _ref6 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 3),
      value = _ref6[2];

  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    itemSearchInput: value
  });
};
var process = function process(state) {
  var currentTree = [_bridge__WEBPACK_IMPORTED_MODULE_5__["RootId"]].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(getDescendants(_bridge__WEBPACK_IMPORTED_MODULE_5__["RootId"], state)));
  var highlighted = Object.values(state.treeNodes).filter(function (_ref7) {
    var isHighlighted = _ref7.isHighlighted;
    return isHighlighted;
  }).map(function (_ref8) {
    var id = _ref8.id;
    return id;
  });
  var highlightedParents = highlighted.reduce(function (acc, id) {
    return [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(acc), Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(getParents(id, state)));
  }, Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(highlighted));
  var selectedParents = getParents(state.selectedNode, state);
  var collapsed = Object.values(state.treeNodes).filter(function (_ref9) {
    var isCollapsed = _ref9.isCollapsed;
    return isCollapsed;
  }).map(function (_ref10) {
    var id = _ref10.id;
    return id;
  });
  var collapsedDescendants = collapsed.reduce(function (acc, id) {
    return [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(acc), Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(getDescendants(id, state)));
  }, []);

  if (!state.itemSearchInput || state.itemSearchInput.length < 3) {
    var toExclude = lodash__WEBPACK_IMPORTED_MODULE_4__["without"].apply(void 0, [collapsedDescendants].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(highlightedParents), Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedParents)));
    var tree = lodash__WEBPACK_IMPORTED_MODULE_4__["without"].apply(void 0, [currentTree].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(toExclude)));
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
      tree: tree
    });
  } else {
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
      tree: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["intersection"])(currentTree, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["union"])(highlightedParents, selectedParents))
    });
  }
};
var shortcutCollapse = function shortcutCollapse(state, _ref11) {
  var _ref12 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref11, 2),
      id = _ref12[1];

  var newTreeNodes = updateTreeNodes(state, function (node) {
    var isFound = node.id === state.selectedNode;
    if (!isFound) return node;
    var isCollapsed = !node.isCollapsed;
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      isCollapsed: isCollapsed
    });
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: newTreeNodes
  });
};
var changeItemTitle = function changeItemTitle(state, _ref13) {
  var _ref14 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref13, 3),
      id = _ref14[1],
      value = _ref14[2];

  var newTreeNodes = updateTreeNodes(state, function (node) {
    var isFound = id === node.id;
    if (!isFound) return node;
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      title: value
    });
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: newTreeNodes
  });
};
var shortcutToggleEditItem = function shortcutToggleEditItem(state, event) {
  var newTreeNodes = updateTreeNodes(state, function (node) {
    var isFound = node.id === state.selectedNode;
    if (!isFound) return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      isEditable: false
    });
    var isEditable = !node.isEditable;
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      isEditable: isEditable
    });
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: newTreeNodes
  });
};
var shortcutEnter = function shortcutEnter(state, event) {
  var newTreeNodes = updateTreeNodes(state, function (node) {
    var isFound = node.id === state.selectedNode;
    if (!isFound) return node;
    var isEditable = false;
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      isEditable: isEditable
    });
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: newTreeNodes
  });
};
var shortcutDown = function shortcutDown(state, event) {
  var nodes = state.tree;
  var maxIndex = nodes.length;
  var index = state.tree.indexOf(state.selectedNode);
  var newIndex = (index + 1) % maxIndex;
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    selectedNode: nodes[newIndex]
  });
};
var shortcutMoveDown = function shortcutMoveDown(state, event) {
  var node = state.treeNodes[state.selectedNode];
  if (!node) return state;
  var parent = state.treeNodes[node.parent];
  if (!parent) return state;
  var children = parent.children;
  var maxIndex = children.length - 1;
  var index = parent.children.indexOf(node.id);
  if (index === maxIndex) return state;
  var newChildren = [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children.slice(0, index)), [children[index + 1], children[index]], Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children.slice(index + 2)));
  var treeNodes = updateTreeNodes(state, function (node) {
    if (node.id !== parent.id) return node;
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      children: newChildren
    });
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: treeNodes
  });
};
var shortcutUp = function shortcutUp(state, event) {
  var nodes = state.tree;
  var maxIndex = nodes.length;
  var index = state.tree.indexOf(state.selectedNode);
  var newIndex = (maxIndex + (index - 1)) % maxIndex;
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    selectedNode: nodes[newIndex]
  });
};
var shortcutMoveUp = function shortcutMoveUp(state, event) {
  var node = state.treeNodes[state.selectedNode];
  if (!node) return state;
  var parent = state.treeNodes[node.parent];
  if (!parent) return state;
  var children = parent.children;
  var index = parent.children.indexOf(node.id);
  if (index === 0) return state;
  var newChildren = [].concat(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children.slice(0, index - 1)), [children[index], children[index - 1]], Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children.slice(index + 1)));
  var treeNodes = updateTreeNodes(state, function (node) {
    if (node.id !== parent.id) return node;
    return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, node), {}, {
      children: newChildren
    });
  });
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: treeNodes
  });
};
var shortcutUndo = function shortcutUndo(state, event) {
  if (!_main_service__WEBPACK_IMPORTED_MODULE_7__["UndoStack"].length) return state;
  _main_service__WEBPACK_IMPORTED_MODULE_7__["RedoStack"].push(state.treeNodes);
  var prev = _main_service__WEBPACK_IMPORTED_MODULE_7__["UndoStack"].pop();
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: prev
  });
};
var shortcutRedo = function shortcutRedo(state, event) {
  if (!_main_service__WEBPACK_IMPORTED_MODULE_7__["RedoStack"].length) return state;
  _main_service__WEBPACK_IMPORTED_MODULE_7__["UndoStack"].push(state.treeNodes);
  var prev = _main_service__WEBPACK_IMPORTED_MODULE_7__["RedoStack"].pop();
  return Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
    treeNodes: prev
  });
};

/***/ }),

/***/ "./src/utils/EventWrapper.tsx":
/*!************************************!*\
  !*** ./src/utils/EventWrapper.tsx ***!
  \************************************/
/*! exports provided: EventSubject, EventWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSubject", function() { return EventSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventWrapper", function() { return EventWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var EventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
var EventWrapper = function EventWrapper(props) {
  var children = props.children,
      id = props.id;
  var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
    if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child)) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
        id: id,
        onClick: function onClick(e) {
          e.preventDefault();
          EventSubject.next(["click", id, "".concat(+e.ctrlKey).concat(+e.shiftKey)]);
        },
        onChange: function onChange(e) {
          var _e$target;

          e.preventDefault();
          EventSubject.next(["change", id, e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value]);
        },
        onFocus: function onFocus(e) {
          e.preventDefault();
          EventSubject.next(["focus", id, ""]);
        }
      });
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, childrenWithProps);
};

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: useSharedState, setPartial, Utils, compose, genericSequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSharedState", function() { return useSharedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPartial", function() { return setPartial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericSequence", function() { return genericSequence; });
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bridge */ "./src/bridge.ts");




var useSharedState = function useSharedState(subject) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(subject.getValue()),
      _useState2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var sub = subject.subscribe(function (s) {
      return setState(s);
    });
    return function () {
      return sub.unsubscribe();
    };
  }, [subject]);

  var newSetState = function newSetState(state) {
    return subject.next(state);
  };

  return [value, newSetState];
};
var setPartial = function setPartial(subject, partial) {
  var prev = subject.getValue();
  subject.next(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev), partial));
};

var getRandomNumbers = function getRandomNumbers(length) {
  var value = Array.from(Math.round(Math.random() * Math.pow(10, length)).toString()).reverse();
  return new Array(length).fill("0").map(function (v, i) {
    return value[i] || v;
  }).reverse().join("");
};

var generateId = function generateId() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return new Array(amount).fill(0).map(function (a, i, b) {
    return "".concat(i && "-").concat(getRandomNumbers(length));
  }).join("");
};

var Utils = {
  generateId: generateId
};
var compose = function compose(arr) {
  return function (state, event) {
    return arr.reduce(function (acc, _ref) {
      var _ref2 = Object(C_Users_Kirill_Documents_Repos_aeroaquaponic_monorepo_misc_tree_of_abstraction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
          shortcut = _ref2[0],
          cb = _ref2[1];

      var result = event[0] === "keydown" && event[1] === _bridge__WEBPACK_IMPORTED_MODULE_3__["Id"].Keyboard && event[2] === shortcut && cb(state, event);
      return acc || result;
    }, false);
  };
};
var genericSequence = function genericSequence(act, initialState) {
  return function (inputs) {
    return inputs.reduce(function (acc, input) {
      return act(acc)(input);
    }, initialState);
  };
};

/***/ }),

/***/ 1:
/*!***************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Kirill\Documents\Repos\aeroaquaponic-monorepo\misc\tree-of-abstraction\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\Kirill\Documents\Repos\aeroaquaponic-monorepo\misc\tree-of-abstraction\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\Kirill\Documents\Repos\aeroaquaponic-monorepo\misc\tree-of-abstraction\src\index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map
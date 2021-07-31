import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { IAppState, Id, StateSubject } from "../bridge";
import { EventSubject } from "../utils/EventWrapper";
import { Shortcut } from "./shortcuts.service";

// TODO: Think of how to test this file

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3kMxazy633uQ4BKTvWYF8hFZEl0PP_as",
  authDomain: "tree-of-abstraction.firebaseapp.com",
  databaseURL: "https://tree-of-abstraction.firebaseio.com",
  projectId: "tree-of-abstraction",
  storageBucket: "tree-of-abstraction.appspot.com",
  messagingSenderId: "161683871914",
  appId: "1:161683871914:web:7cd83dc09d276698c8d8d3",
  measurementId: "G-SPG691QK9Z",
};

firebase.initializeApp(firebaseConfig);

const writeCollection = (
  collectionId: string,
  tree: IAppState["tree"],
  cb: () => void
) => {
  firebase
    .database()
    .ref("collection/" + collectionId)
    .set({
      ...tree,
    })
    .then(cb)
    .catch(cb);
};

const dbRef = firebase.database().ref();

const getCollections = () =>
  dbRef
    .child("collection")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

const normalizeState = (state: { [id: string]: IAppState["tree"] }) =>
  Object.entries(state)
    .map(
      ([id, tree]) =>
        [
          id,
          {
            ...tree,
            noteNodes: tree.noteNodes || {},
            notes: tree.notes || [],
            tree: tree.tree || [],
            treeNodes:
              (tree.treeNodes &&
                Object.values(tree.treeNodes)
                  .map((node) => ({
                    ...node,
                    children: node.children || [],
                    notes: node.notes || [],
                  }))
                  .reduce((acc, node) => ({ ...acc, [node.id]: node }), {})) ||
              {},
          } as IAppState["tree"],
        ] as [string, IAppState["tree"]]
    )
    .reduce((acc, [id, tree]) => ({ ...acc, [id]: tree }), {});

window.addEventListener("load", () => {
  EventSubject.subscribe((event) => {
    const [type, id, value] = event;
    // On Save Keydown
    if (type === "keydown" && value === Shortcut.Save) {
      EventSubject.next(["io", Id.Save, "true"]);
    }
    // On Save IO
    else if (type === "io" && id === Id.Save && value === "true") {
      const {
        collection: { selectedCollection },
        tree,
      } = StateSubject.getValue();
      // Write Collection
      if (selectedCollection) {
        writeCollection(selectedCollection, tree, () => {
          EventSubject.next(["io", Id.Save, "false"]);
        });
        // Reset Loading State
      } else {
        EventSubject.next(["io", Id.Save, "false"]);
      }
      // On Load IO
    }
  });
});

document.addEventListener("route", () => {
  getCollections().then((state) => {
    console.info(state);
    if (!state) return;
    EventSubject.next(["io", Id.State, JSON.stringify(normalizeState(state))]);
  });
});

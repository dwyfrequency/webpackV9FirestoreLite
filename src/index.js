import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../hidden/firebaseConfig";
import { getFirestore, getDoc, doc } from "firebase/firestore/lite";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

async function component() {
  const element = document.createElement("div");

  element.innerHTML = JSON.stringify(
    await getDoc(
      doc(
        firestore,
        "users/Ncf7nIwi1jgnPuwwdWvgruWYxpr2/todos/bEYKh45q9H39is5udWlg"
      )
    )
  );

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup    52K Apr 19 13:07 dist/main.js
// Run `ls -lh dist/main.js` to get the above

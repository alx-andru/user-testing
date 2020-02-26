import { Component } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { AngularFireAuth } from "@angular/fire/auth";
import "firebase/firestore";
import * as firebase from "firebase";

export interface Experiment {
  name: string;
  startTime?: firebase.firestore.FieldValue;
  endTime?: firebase.firestore.FieldValue;
  forms?: Form[];
}

export interface Form {
  startTime: firebase.firestore.FieldValue;
  endTime: firebase.firestore.FieldValue;
  label?: string;
  title?: string;
  description?: string;
  fieldGroups?: {
    classes?: string;
    fields?: {
      appearance?: string;
      classes?: string;
      placeholder?: string;
      value?: any;
      label?: string;
      index?: number;
    }[];
  }[];
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  forms = [
    {
      label: "A",
      title: "Where are you staying?",
      description:
        "Provide details of your first accommodation (for example, hotel or host).",
      fieldGroups: [
        {
          classes: "col-2 ratio-1-2",
          fields: [
            {
              appearance: "outline",
              classes: "cell-50",
              placeholder: "street",
              value: null,
              label: "Street",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "street 2",
              value: null,
              label: "Street 2",
              index: 1
            }
          ]
        },
        {
          classes: "col-1",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "street",
              value: null,
              label: "Street",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "street 2",
              value: null,
              label: "Street 2",
              index: 1
            }
          ]
        }
      ]
    },
    {
      label: "B",
      title: "Where are you staying?",
      description:
        "Provide details of your first accommodation (for example, hotel or host).",
      fieldGroups: [
        {
          classes: "col-2 ratio-1-2",
          fields: [
            {
              appearance: "outline",
              classes: "cell-50",
              placeholder: "street",
              value: null,
              label: "Street",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "street 2",
              value: null,
              label: "Street 2",
              index: 1
            }
          ]
        },
        {
          classes: "col-1",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "street",
              value: null,
              label: "Street",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "street 2",
              value: null,
              label: "Street 2",
              index: 1
            }
          ]
        },
        {
          classes: "col-1",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "street",
              value: null,
              label: "Street",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "street 2",
              value: null,
              label: "Street 2",
              index: 1
            }
          ]
        }
      ]
    }
  ];

  private itemDoc: AngularFirestoreDocument<Experiment>;

  progress = 0;
  appearance = "outline";
  started = true;
  currentExperiment = "";
  selectedIndex = 0;

  constructor(private afs: AngularFirestore) {
    firebase.auth().signInAnonymously();
  }

  update(item: Experiment) {
    this.itemDoc.update({});
  }

  start() {
    this.started = true;
    this.selectedIndex = 0;
    this.updateProgress();
  }

  async reset() {
    this.selectedIndex = -1;
    this.started = false;
    firebase.auth().signOut();
    firebase.auth().signInAnonymously();

    this.currentExperiment = firebase.auth().currentUser.uid;
    this.started = false;
    console.log("new experiment", this.currentExperiment);

    this.itemDoc = this.afs.doc<any>(`experiments/test`);
    await this.itemDoc.update({
      name: "test"
    });

    this.selectedIndex = -1;
  }

  continue(formIndex: number) {
    console.log({ formIndex });
    console.log(this.forms);

    if (formIndex + 1 === this.forms.length) {
      this.reset();
    } else {
      this.selectedIndex = formIndex + 1;
    }
    this.updateProgress();
    // take form field
    // update
    // go to next form
  }

  updateProgress() {
    this.progress = ((this.selectedIndex + 1) / this.forms.length) * 100;
  }
}

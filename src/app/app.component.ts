import { Component, OnInit } from "@angular/core";
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
  stopTimer0?: firebase.firestore.FieldValue;
  stopTimer1?: firebase.firestore.FieldValue;
  stopTimer2?: firebase.firestore.FieldValue;
  stopTimer3?: firebase.firestore.FieldValue;
  stopTimer4?: firebase.firestore.FieldValue;
  stopTimer5?: firebase.firestore.FieldValue;
  endTime?: firebase.firestore.FieldValue;
  forms?: Form[];
}

export interface Form {
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
      iconRight?: string;
      iconLeft?: string;
      inputType?: string;
      required?: boolean;
    }[];
  }[];
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  forms: Form[] = [
    {
      label: "A",
      title: "Where do you live?",
      description:
        "Provide your permanent home address. Please do not enter a temporary address.",
      fieldGroups: [
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "cell-50",
              placeholder: "Apartment #",
              value: null,
              label: "Apartment #",

              index: 0
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "Address Line 1",
              value: null,
              label: "Address Line 1",
              required: true,
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "Address Line 2",
              value: null,
              label: "Address Line 2",
              index: 1
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "City",
              value: null,
              label: "City",
              required: true,
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "State/Provice/Region",
              value: null,
              label: "State/Provice/Region",
              required: true,
              index: 1
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "cell-75",
              placeholder: "Phone Number",
              value: null,
              label: "Phone Number",
              iconRight: "phone",
              required: true,
              index: 0,
              inputType: "number"
            }
          ]
        }
      ]
    },
    {
      label: "B",
      title: "Where do you live?",
      description:
        "Provide your permanent home address. Please do not enter a temporary address.",

      fieldGroups: [
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "Street Number",
              value: null,
              label: "Street Number",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "Address Line 1",
              required: true,
              value: null,
              label: "Address Line 1",
              index: 1
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "Address Line 2",
              required: true,
              value: null,
              label: "Address Line 2",
              index: 0
            },
            {
              appearance: "outline",
              classes: "cell-75",
              placeholder: "Apartment Number",
              value: null,
              label: "Apartment Number",
              index: 1
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "City",
              required:true,
              value: null,
              label: "City",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "State/Province/Region",
              required:true,
              value: null,
              label: "State/Province/Region",
              index: 1
            }
          ]
        },
        {
          classes: "col col-1",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "Phone Number",
              required:true,
              value: null,
              label: "Phone Number",
              iconRight: "phone",
              index: 0,
              inputType: "number"
            }
          ]
        }
      ]
    },
    {
      label: "C",
      title: "Where do you live?",
      description:
        "Provide your permanent home address. Please do not enter a temporary address.",

      fieldGroups: [
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "cell-50",
              placeholder: "Apartment #",
              value: null,
              label: "Apartment #",
              index: 1
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "Address Line 1",
              value: null,
              required:true,
              label: "Address Line 1",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "Address Line 2",
              value: null,
              label: "Address Line 2",
              index: 1
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "City",
              required:true,
              value: null,
              label: "City",
              index: 0
            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "State/Province/Region",
              value: null,
              required:true,
              label: "State/Province/Region",
              index: 1
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "cell-75",
              placeholder: "Phone Number",
              value: null,
              label: "Phone Number",
              required:true,
              iconRight: "phone",
              index: 0,
              inputType: "number"
            }
          ]
        }
      ]
    },
    {
      label: "D",
      title: "Where do you live?",
      description:
        "Provide your permanent home address. Please do not enter a temporary address.",

      fieldGroups: [
        {
          classes: "col col-2 ratio-2-1",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "Streetname, street number or P.O. Box",
              value: null,
              label: "Address Line 1",
              index: 0,
              required:true

            },
            {
              appearance: "outline",
              classes: "",
              placeholder: "Apartment or unit number",
              value: null,
              label: "Apartment number",
              index: 1
            }
          ]
        },
        {
          classes: "col col-1",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "Additional address line",
              value: null,
              label: "Address Line 2",
              index: 0
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "",
              placeholder: "State, province or region as applicable",
              value: null,
              required:true,
              label: "State/Province/Region",
              index: 1
            },
            {
              appearance: "outline",
              classes: "",
              required:true,
              placeholder: "City",
              value: null,
              label: "City",
              index: 0
            }
          ]
        },
        {
          classes: "col col-2",
          fields: [
            {
              appearance: "outline",
              classes: "cell-75",
              placeholder: "Phone Number",
              value: null,
              required:true,
              label: "Phone Number",
              iconRight: "phone",
              index: 0,
              inputType: "number"
            }
          ]
        }
      ]
    }
  ];

  private itemDoc: AngularFirestoreDocument<Experiment>;

  progress = 0;
  appearance = "outline";
  started = false;
  currentExperiment = "";
  selectedIndex = 0;

  constructor(private afs: AngularFirestore) {}

  async ngOnInit() {
    await firebase.auth().signInAnonymously();
    this.reset();
  }

  start() {
    this.started = true;
    this.selectedIndex = 0;
    this.updateProgress();
    this.itemDoc.update({
      startTime: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async reset() {
    this.selectedIndex = -1;
    this.started = false;
    await firebase.auth().signOut();
    await firebase.auth().signInAnonymously();

    this.currentExperiment = firebase.auth().currentUser.uid;
    this.started = false;
    console.log("new experiment", this.currentExperiment);

    this.itemDoc = this.afs.doc<Experiment>(
      `experiments/${this.currentExperiment}`
    );

    await this.itemDoc.set({
      name: this.currentExperiment
    });
    this.updateProgress();
    this.selectedIndex = -1;
    this.forms.forEach(form => {
      form.fieldGroups.forEach(fieldGroup => {
        fieldGroup.fields.forEach(field => {
          field.value = null;
        });
      });
    });
  }

  continue(formIndex: number) {
    console.log({ formIndex });
    console.log(this.forms);

    const nextIndex = formIndex + 1;
    const reset = nextIndex === this.forms.length;

    // this.forms[0].endTime = firebase.firestore.FieldValue.serverTimestamp();
    if (!reset) {
      // this.forms[
      //   nextIndex
      // ].startTime = firebase.firestore.FieldValue.serverTimestamp();
    }

    const exp: Experiment = {
      name: this.currentExperiment,
      forms: this.forms
    };

    exp[
      `stopTimer${formIndex}`
    ] = firebase.firestore.FieldValue.serverTimestamp();

    if (nextIndex === this.forms.length) {
      exp.endTime = firebase.firestore.FieldValue.serverTimestamp();
      this.itemDoc.update(exp);
      this.reset();
    } else {
      this.itemDoc.update(exp);
      this.selectedIndex = formIndex + 1;
    }

    // take form field
    // update

    // go to next form

    this.updateProgress();
  }

  updateProgress() {
    this.progress = ((this.selectedIndex + 1) / this.forms.length) * 100;
  }
}

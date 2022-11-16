import { Meteor } from 'meteor/meteor';
// import '/imports/api/Patients';
import {PatientsCollection} from '/imports/api/Patients';






Meteor.startup(async () => {
 await PatientsCollection.remove({})

});


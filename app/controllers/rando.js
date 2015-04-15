import Ember from "ember";
import { moment } from 'ember-moment/computed';

export default Ember.Controller.extend({
    updated: moment('date', 'MM/DD/YYYY hh:mm:ss')
});

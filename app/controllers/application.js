import Ember from "ember";
import { moment } from 'ember-moment/computed';

export default Ember.Controller.extend({
    first: moment('date', 'MM/DD/YYYY hh:mm:ss')
});

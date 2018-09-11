import {observable, action, computed} from "mobx";
import data from "../db/data.json";
import _ from "lodash/core";

class DataStore {
    VIEW_INVENTORY = "inventory";
    VIEW_ACCOMPLISHMENTS = "accomplishments";
    VIEW_WHAT_TO_DO = "what_do_i_do";

    @observable data = [];
    @observable view = this.VIEW_INVENTORY;

    @action changeView = (view) => {
        this.view = view;
    };

    @action toggleItemOwned = (id) => {
        this.data = this.data.map((el) => {
            if(el.id === id) {
                el.owned = !el.owned;
            }
            return el;
        });
    };

    @action setAllOwnedThroughItemId = (ids, target_id) => {
        let owned = true;
        _.each(ids, (id) => {
            if(id !== -1) {
                this.data = this.data.map((el) => {
                    if(el.id === id) {
                        el.owned = owned;
                    }
                    return el;
                });
            }
            if(id === -1 || id === target_id) {
                owned = false;
            }
        });
    };

    findChildren = (item_id) => {
        return _.filter(this.data, (el) => {
            return el.parent === item_id;
        });
    };

    totalNumber = (totals_to) => {
        if(typeof totals_to === "number") {
            return totals_to;
        }

        return this.data.filter((el) => {
            return (el.totals_to === totals_to && !!el.owned);
        }).length;
    };

    @computed get meetPrereqs() {
        const owned = this.data.filter((el) => {
            return !!el.owned;
        }, this);
        let owned_ids = owned.map((el) => {
            return el.id;
        });
        const not_owned = this.data.filter((el) => {
            return !el.owned;
        }, this);
        return not_owned.filter((el) => {
            if(!el.requirements) return true;

            let prereqs_met = _.every(el.requirements.owned, (requirement) => {
                return owned_ids.includes(requirement);
            });
            if(el.requirements.greater_than) {
                const gt = el.requirements.greater_than;
                prereqs_met = prereqs_met && (this.totalNumber(gt[0]) > this.totalNumber(gt[1]));
            }
            return prereqs_met;
        }, this);
    }

    @computed get dataForCurrentView() {
        const filtered = this.data.filter((el) => {
            return el.category === this.view;
        }, this);
        let by_category = {};
        _.each(filtered, (el) => {
            let cat = el.sub_category;
            if(!by_category.hasOwnProperty(cat)) {
                by_category[cat] = [];
            }
            by_category[cat].push(el);
        });
        return by_category;
    }
}

const dataStore = new DataStore();
dataStore.data = data;

export default dataStore;
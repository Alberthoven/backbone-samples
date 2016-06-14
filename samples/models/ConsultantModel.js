var ConsultantModel = Backbone.Model.extend({

    localStorage: new Backbone.LocalStorage('consultant'),

    defaults: {
        project: 'No project'
    },

    validate: function(attrs, options) {
        var validationErrors = {};
        validationErrors = this._notEmptyTypedAndValid(validationErrors, attrs, 'age', _.isNumber, this._validateAdult);
        validationErrors = this._notEmptyTypedAndValid(validationErrors, attrs, 'name', _.isString);
        validationErrors = this._notEmptyTypedAndValid(validationErrors, attrs, 'surname', _.isString);
        validationErrors = this._notEmptyTypedAndValid(validationErrors, attrs, 'project', _.isString);
        if (_.keys(validationErrors).length) {
            return validationErrors;
        }
    },

    _notEmptyTypedAndValid: function (validation, attrs, attr, typeF, validF) {
        var v = _.has(attrs, attr) ? attrs[attr] : null;
        if (!v) {
            validation[attr] = "Empty " + attr;
        } else if (!typeF(v)) {
            validation[attr] = "Not valid " + attr;
        } else if (validF) {
            var err = validF.apply(this, [v]);
            if (err) {
                validation[attr] = err + attr;
            }

        }
        return validation;
    },

    _validateAdult: function (v) {
        if (v < this.constructor.MINIMUM_AGE) {
            return 'Not adult ';
        }
    }
}, {
    MINIMUM_AGE: 18
});

import React from 'react';
import { injectIntl } from 'react-intl';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  TextInput,
  NumberInput,
  PublishedComponent,
} from '@openimis/fe-core';
import {
  MODULE_NAME,
  CONTAINS_LOOKUP,
  GREATER_OR_EQUAL_LOOKUP,
  LESS_OR_EQUAL_LOOKUP,
  DATE_TO_DATETIME_SUFFIX,
  DATE_END_OF_DAY_SUFFIX,
} from '../constants';
import { escapeGqlString } from '../util/sereGroupFilters';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: '0 0 10px 0',
    width: '100%',
  },
  item: {
    padding: theme.spacing(1),
  },
}));

function filterValue(filters, key) {
  return filters?.[key]?.value ?? null;
}

function filterTextValue(filters, key) {
  const v = filters?.[key]?.value;
  return v == null ? '' : String(v);
}

function SereGroupFilter({ intl, filters, onChangeFilters }) {
  const classes = useStyles();
  const dateUpdatedFrom = filterValue(filters, 'dateUpdatedFrom');

  const pushFilter = (id, value, filter) => {
    onChangeFilters([{ id, value, filter }]);
  };

  const onChangeContains = (field, value) => {
    const trimmed = (value ?? '').trim();
    pushFilter(
      field,
      trimmed || null,
      trimmed ? `${field}_${CONTAINS_LOOKUP}: "${escapeGqlString(trimmed)}"` : null,
    );
  };

  const onChangeExactNumber = (field, value) => {
    const n = value === '' || value == null ? null : Number(value);
    pushFilter(
      field,
      n,
      n != null && !Number.isNaN(n) ? `${field}: ${n}` : null,
    );
  };

  const onChangeDateFrom = (value) => {
    pushFilter(
      'dateUpdatedFrom',
      value,
      value ? `dateUpdated_${GREATER_OR_EQUAL_LOOKUP}: "${value}${DATE_TO_DATETIME_SUFFIX}"` : null,
    );
  };

  const onChangeDateTo = (value) => {
    pushFilter(
      'dateUpdatedTo',
      value,
      value ? `dateUpdated_${LESS_OR_EQUAL_LOOKUP}: "${value}${DATE_END_OF_DAY_SUFFIX}"` : null,
    );
  };

  return (
    <Grid container className={classes.form} spacing={1}>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="sereGroups.filter.importCode"
          value={filterTextValue(filters, 'importCode')}
          onChange={(v) => onChangeContains('importCode', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="sereGroups.filter.name"
          value={filterTextValue(filters, 'name')}
          onChange={(v) => onChangeContains('name', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="sereGroups.filter.region"
          value={filterTextValue(filters, 'region')}
          onChange={(v) => onChangeContains('region', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="sereGroups.filter.prefecture"
          value={filterTextValue(filters, 'prefecture')}
          onChange={(v) => onChangeContains('prefecture', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="sereGroups.filter.subPrefecture"
          value={filterTextValue(filters, 'subPrefecture')}
          onChange={(v) => onChangeContains('subPrefecture', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="sereGroups.filter.district"
          value={filterTextValue(filters, 'district')}
          onChange={(v) => onChangeContains('district', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2} className={classes.item}>
        <NumberInput
          module={MODULE_NAME}
          label="sereGroups.filter.membersCount"
          min={0}
          value={filterValue(filters, 'membersCount')}
          onChange={(v) => onChangeExactNumber('membersCount', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <PublishedComponent
          pubRef="core.DatePicker"
          module={MODULE_NAME}
          label="sereGroups.filter.dateUpdatedFrom"
          value={filterValue(filters, 'dateUpdatedFrom')}
          onChange={onChangeDateFrom}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <PublishedComponent
          pubRef="core.DatePicker"
          module={MODULE_NAME}
          label="sereGroups.filter.dateUpdatedTo"
          value={filterValue(filters, 'dateUpdatedTo')}
          {...(dateUpdatedFrom ? { minDate: dateUpdatedFrom } : {})}
          onChange={onChangeDateTo}
        />
      </Grid>
    </Grid>
  );
}

export default injectIntl(SereGroupFilter);

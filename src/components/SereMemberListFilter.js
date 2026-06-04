import React from 'react';
import { injectIntl } from 'react-intl';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  TextInput,
  ConstantBasedPicker,
} from '@openimis/fe-core';
import {
  MODULE_NAME,
  CONTAINS_LOOKUP,
  SERE_MEMBER_STATUSES,
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

function filterTextValue(filters, key) {
  const v = filters?.[key]?.value;
  return v == null ? '' : String(v);
}

function filterValue(filters, key) {
  return filters?.[key]?.value ?? null;
}

function SereMemberListFilter({ intl, filters, onChangeFilters }) {
  const classes = useStyles();

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

  const onChangeStatus = (value) => {
    pushFilter(
      'status',
      value || null,
      value && SERE_MEMBER_STATUSES.includes(value) ? `status: ${value}` : null,
    );
  };

  const onChangePresenceCount = (value) => {
    const trimmed = (value ?? '').trim();
    if (!trimmed) {
      pushFilter('presenceCount', null, null);
      return;
    }
    const n = Number(trimmed);
    pushFilter(
      'presenceCount',
      trimmed,
      !Number.isNaN(n) ? `presenceCount: ${n}` : null,
    );
  };

  return (
    <Grid container className={classes.form} spacing={1}>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.codeMenage"
          value={filterTextValue(filters, 'codeMenage')}
          onChange={(v) => onChangeContains('codeMenage', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.lastName"
          value={filterTextValue(filters, 'lastName')}
          onChange={(v) => onChangeContains('lastName', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.firstName"
          value={filterTextValue(filters, 'firstName')}
          onChange={(v) => onChangeContains('firstName', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.phone"
          value={filterTextValue(filters, 'phone')}
          onChange={(v) => onChangeContains('phone', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.sereName"
          value={filterTextValue(filters, 'sereName')}
          onChange={(v) => onChangeContains('sereName', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.sereImportCode"
          value={filterTextValue(filters, 'sereImportCode')}
          onChange={(v) => onChangeContains('sereImportCode', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.role"
          value={filterTextValue(filters, 'role')}
          onChange={(v) => onChangeContains('role', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.beneficiaryType"
          value={filterTextValue(filters, 'beneficiaryType')}
          onChange={(v) => onChangeContains('beneficiaryType', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.prefecture"
          value={filterTextValue(filters, 'prefecture')}
          onChange={(v) => onChangeContains('prefecture', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.subPrefecture"
          value={filterTextValue(filters, 'subPrefecture')}
          onChange={(v) => onChangeContains('subPrefecture', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.district"
          value={filterTextValue(filters, 'district')}
          onChange={(v) => onChangeContains('district', v)}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <TextInput
          module={MODULE_NAME}
          label="members.filter.presenceCount"
          value={filterTextValue(filters, 'presenceCount')}
          onChange={onChangePresenceCount}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={classes.item}>
        <ConstantBasedPicker
          module={MODULE_NAME}
          label="members.status"
          nullLabel="members.status.null"
          value={filterValue(filters, 'status')}
          onChange={onChangeStatus}
          constants={SERE_MEMBER_STATUSES}
          withNull
        />
      </Grid>
    </Grid>
  );
}

export default injectIntl(SereMemberListFilter);

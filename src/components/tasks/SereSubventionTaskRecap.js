import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useModulesManager, useTranslations } from '@openimis/fe-core';
import { MODULE_NAME } from '../../constants';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  hint: {
    marginBottom: theme.spacing(1.5),
  },
  row: {
    display: 'flex',
    padding: '6px 0',
    borderBottom: '1px solid #eee',
  },
  rowLabel: {
    flex: '0 0 48%',
    color: '#666',
    paddingRight: 12,
  },
  rowValue: {
    flex: 1,
    fontWeight: 500,
    wordBreak: 'break-word',
  },
  highlight: {
    fontWeight: 700,
  },
}));

function pickData(incomingData) {
  if (!incomingData || typeof incomingData !== 'object') return {};
  if (incomingData.incoming_data && typeof incomingData.incoming_data === 'object') {
    return incomingData.incoming_data;
  }
  return incomingData;
}

function SereSubventionTaskRecap({ incomingData }) {
  const classes = useStyles();
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);
  const data = pickData(incomingData);

  const displayValue = (value) => {
    if (value === null || value === undefined || value === '') return '—';
    if (typeof value === 'boolean') {
      return value
        ? formatMessage('tasks.subvention.yes')
        : formatMessage('tasks.subvention.no');
    }
    return String(value);
  };

  const activeCount = data.to_keep_active_count ?? data.active_count;
  const suspendCount = data.to_suspend_count ?? data.inactive_count;
  const membersTotal = data.members_total;
  const planLabel = data.benefit_plan_label
    || (
      data.benefit_plan_code
        ? `${data.benefit_plan_code}${data.benefit_plan_name ? ` — ${data.benefit_plan_name}` : ''}`
        : null
    );

  const rows = [
    {
      key: 'label',
      label: formatMessage('tasks.subvention.field.label'),
      value: data.label,
    },
    {
      key: 'benefitPlan',
      label: formatMessage('tasks.subvention.field.benefitPlan'),
      value: planLabel,
    },
    {
      key: 'thresholds',
      label: formatMessage('tasks.subvention.field.thresholds'),
      value: (
        data.presence_count_min != null && data.presence_count_max != null
          ? `${data.presence_count_min} – ${data.presence_count_max}`
          : null
      ),
    },
    {
      key: 'membersTotal',
      label: formatMessage('tasks.subvention.field.membersTotal'),
      value: membersTotal,
      highlight: true,
    },
    {
      key: 'active',
      label: formatMessage('tasks.subvention.field.activeCount'),
      value: activeCount,
      highlight: true,
    },
    {
      key: 'suspend',
      label: formatMessage('tasks.subvention.field.toSuspendCount'),
      value: suspendCount,
      highlight: true,
    },
    {
      key: 'statusUpdated',
      label: formatMessage('tasks.subvention.field.statusUpdated'),
      value: data.members_status_updated,
    },
    {
      key: 'syncSp',
      label: formatMessage('tasks.subvention.field.syncSocialProtection'),
      value: data.sync_social_protection,
    },
    {
      key: 'batchId',
      label: formatMessage('tasks.subvention.field.batchId'),
      value: data.batch_id,
    },
  ].filter((row) => row.value !== null && row.value !== undefined && row.value !== '');

  if (rows.length === 0) {
    return (
      <Typography variant="body2" color="textSecondary">
        {formatMessage('tasks.subvention.noData')}
      </Typography>
    );
  }

  return (
    <Box>
      <Typography className={classes.sectionTitle}>
        {formatMessage('tasks.subvention.recapTitle')}
      </Typography>
      <Typography variant="body2" color="textSecondary" className={classes.hint}>
        {formatMessage('tasks.subvention.recapHint')}
      </Typography>
      {rows.map(({ key, label, value, highlight }) => (
        <div key={key} className={classes.row}>
          <Typography className={classes.rowLabel} variant="body2">
            {label}
          </Typography>
          <Typography
            className={`${classes.rowValue}${highlight ? ` ${classes.highlight}` : ''}`}
            variant="body2"
          >
            {displayValue(value)}
          </Typography>
        </div>
      ))}
    </Box>
  );
}

export default SereSubventionTaskRecap;

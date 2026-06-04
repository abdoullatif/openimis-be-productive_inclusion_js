import React from 'react';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  MEMBER_STATUS_ACTIVE,
  MEMBER_STATUS_INACTIVE,
  MEMBER_STATUS_PENDING,
  MEMBER_STATUS_SUSPENDED,
} from '../constants';

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
  inactive: {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.getContrastText(theme.palette.grey[400]),
  },
  pending: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
  },
  suspended: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
  },
}));

function statusClass(status, classes) {
  switch (status) {
    case MEMBER_STATUS_ACTIVE:
      return classes.active;
    case MEMBER_STATUS_INACTIVE:
      return classes.inactive;
    case MEMBER_STATUS_PENDING:
      return classes.pending;
    case MEMBER_STATUS_SUSPENDED:
      return classes.suspended;
    default:
      return classes.inactive;
  }
}

function SereMemberStatusChip({ status, label }) {
  const classes = useStyles();
  if (!label && !status) return '—';
  return (
    <Chip
      size="small"
      label={label ?? status}
      className={statusClass(status, classes)}
    />
  );
}

export default SereMemberStatusChip;
